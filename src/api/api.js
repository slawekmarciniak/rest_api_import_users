async function getData() {
  const response = await fetch("https://randomuser.me/api/?results=10");
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    console.log(message);
    throw new Error(message);
  }
  const data = await response.json();
  return data.results;
}

export default getData;
