const PERSONS_API_URL = "http://localhost:3000/persons";

async function getPersons() {
  const response = await fetch(PERSONS_API_URL);
  const persons = await response.json();
  console.log('persons:',persons);
  return persons
}

getPersons();
