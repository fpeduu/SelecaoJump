from typing import Optional
from fastapi import APIRouter
from pydantic import BaseModel
from .controller import (core_instance, big_core_instance, CASE_ID,
    END_TIMESTAMP, START_TIMESTAMP, ACTIVITY
)

router = APIRouter(
    prefix="/api/processos",
    tags=['processos'],
    responses={404: {"processos": "Not found"}}
)

@router.get("/stats/", status_code=200)
async def get_log_stats(big_df: Optional[bool] = False):
    """
    Returns statistics about the log:
    casesCount: NPU (unique cases) count
    movimentosCount: Total movimentos count
    avgMovimentosPerCase: Average movimentos per case
    avgCaseDuration: Average case duration, in seconds
    avgMovimentoDuration: Average movimento duration, in seconds
    {
        casesCount: int,
        movimentosCount: int,
        avgCaseDuration: seconds,
        avgMovimentosPerCase: float,
        avgMovimentoDuration: seconds
    }
    """
    df = core_instance.log.copy() if not big_df else big_core_instance.log.copy()
    df['duration'] = df[END_TIMESTAMP] - df[START_TIMESTAMP]
    df["duration"] = df["duration"].astype('timedelta64[s]')

    movimentos_count = len(df)
    cases_count = len(df[CASE_ID].unique())
    avg_movimento_duration = df['duration'].mean()
    avg_movimentos_per_case = movimentos_count / cases_count
    case_duration_sum = df.groupby(CASE_ID)['duration'].sum().mean()

    return {
        "casesCount": cases_count,
        "movimentosCount": movimentos_count,
        "avgCaseDuration": case_duration_sum,
        "avgMovimentoDuration": avg_movimento_duration,
        "avgMovimentosPerCase": avg_movimentos_per_case,
    }

@router.get("/", status_code=200)
async def get_all_processos_infos(big_df: Optional[bool] = False):
    """
    Returns a list of all processos with some stats
    """

    cases = []
    df = core_instance.log.copy() if not big_df else big_core_instance.log.copy()
    df['duration'] = df[END_TIMESTAMP] - df[START_TIMESTAMP]
    df["duration"] = df["duration"].astype('timedelta64[s]')

    for NPU, group in df.groupby(CASE_ID):
        trace_duration = group['duration'].sum()

        cases.append({
            "NPU": NPU,
            "totalMovimentos": len(group),
            "totalDuration": trace_duration.total_seconds(),
            "movimentos": '--'
        })
        


    return { "cases": cases }


@router.get("/{movimento}", status_code=200)
async def get_processos_infos(movimento: str, big_df: Optional[bool] = False):
    """
    Returns a list of processos with the pinned movimento with some stats and a count
    of how many times the given movimento happened.
    """

    pinned_movimento = movimento
    cases = []
    df = core_instance.log.copy() if not big_df else big_core_instance.log.copy()
    df['duration'] = df[END_TIMESTAMP] - df[START_TIMESTAMP]
    df["duration"] = df["duration"].astype('timedelta64[s]')

    for NPU, group in df.groupby(CASE_ID):
        trace_duration = group['duration'].sum()
        pinned_movimento_count = len(
            group[group[ACTIVITY] == pinned_movimento]
        )

        # only add cases that have the pinned movimento
        if pinned_movimento_count > 0:
            cases.append({
                "NPU": NPU,
                "totalMovimentos": len(group),
                "totalDuration": trace_duration.total_seconds(),
                "movimentos": pinned_movimento_count
            })

    return { "cases": cases }
