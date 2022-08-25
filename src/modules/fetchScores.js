async function fetchScores(url) {
  const response = await fetch(url);
  return response.json();
}

export default fetchScores;
