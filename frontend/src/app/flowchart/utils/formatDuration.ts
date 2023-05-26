export function formatDuration(duration: number) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  let text = '';

  if (years > 0) {
    text += `${years} anos, `;
  }

  if (months % 12 > 0) {
    text += `${months % 12} meses, `;
  }

  if (days % 30 > 0) {
    text += `${days % 30} dias, `;
  }

  if (hours % 24 > 0) {
    text += `${hours % 24} horas, `;
  }

  if (minutes > 0) {
    text += `${Math.round(minutes)} minutos  `;
  }

  text = text.slice(0, -2) + '.';

  return text;
}
