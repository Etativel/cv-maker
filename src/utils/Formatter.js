function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: "short", year: "numeric" };
  let [month, year] = date.toLocaleDateString("en-US", options).split(" ");
  return `${month}   ${year}`;
}

function getGitHubUsername(link) {
  const githubRegex = /github\.com\/([^/?#\s]+)/;
  const match = link.match(githubRegex);

  if (match) {
    return `github.com/${match[1]}`;
  }

  return link;
}

function getLinkedInUsername(link) {
  const linkedinRegex = /linkedin\.com\/in\/([a-zA-Z0-9-]+)/;
  const match = link.match(linkedinRegex);

  if (match) {
    const username = match[1].split("-")[0];
    return `linkedin.com/in/${username}`;
  }

  return link;
}

export { formatDate, getGitHubUsername, getLinkedInUsername };
