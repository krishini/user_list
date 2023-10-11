function formatDate(date) {
  const collator = new Intl.DateTimeFormat("es-AR", {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
  const formattedDate = collator.format(date)
  return formattedDate;
}