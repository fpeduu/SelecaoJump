from typing import Optional
from fastapi.responses import FileResponse
from routes.image import dfg_visualizer
from .controller import core_instance, big_core_instance
from fastapi import APIRouter
import pm4py

router = APIRouter(
    prefix="/api/visualization",
    tags=['visualization'],
    responses={404: {"visualization": "Not found"}}
)

def generate_svg(eventlog):
    frequency_dfg, start_act_freq, end_act_freq = pm4py.discover_dfg(eventlog)
    return dfg_visualizer(
        frequency_dfg, eventlog,
        start_act_freq, end_act_freq
    ).render()

@router.get("/image/", status_code=200)
async def get_eventlog_image(big_df: Optional[bool] = False):
    """ Returns the svg image string of the log. """
    event_log = core_instance.log.copy() if not big_df else big_core_instance.log.copy()
    svg_file_path = generate_svg(event_log)
    return FileResponse(svg_file_path)
