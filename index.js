const PERSONS_API_URL = "http://localhost:3000/persons";

const personsSection = document.getElementById("persons-section");

async function getPersons() {
  let error = null;
  let persons = null;
  try {
    const response = await fetch(PERSONS_API_URL);
    const data = await response.json();
    persons = data;
  } catch (err) {
    error = {
      message: err.message,
      name: err.name,
    };
  } finally {
    return {
      error,
      persons,
    };
  }
}

const renderPersons = async () => {
  const personsInfos = await getPersons();
  console.log(
    "🚀 ~ file: index.js:25 ~ renderPersons ~ persons:",
    personsInfos
  );

  const personsList = personsInfos.persons.map((person) => {
    return `<div class="person-container"><p>First Name: <strong>${person.firstName}</strong><p> <p>Last Name: <strong>${person.lastName}</strong></p></div>`;
  });

  const noProfiles =
    "<div><h6>There are not profiles, please create one in the add profile page</h6></div>";

  personsSection.innerHTML =
    personsInfos.persons.length > 0 ? personsList.join("") : noProfiles;
};

renderPersons();
