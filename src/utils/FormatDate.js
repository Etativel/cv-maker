function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: "short", year: "numeric" };
  let [month, year] = date.toLocaleDateString("en-US", options).split(" ");
  return `${month}. ${year}`;
}

export { formatDate };
