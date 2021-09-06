const API_URL = "https://randomuser.me/api";
const usersQuantity = 10;

async function getData() {
  const response = await fetch(`${API_URL}/?results=${usersQuantity}`);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    console.log(message);
    throw new Error(message);
  }
  const data = await response.json();
  return data.results;
}

export default getData;
