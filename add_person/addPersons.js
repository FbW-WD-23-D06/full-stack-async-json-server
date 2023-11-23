import { PERSONS_API_URL } from "../utils/data/API.js";

const firstNameInputElement = document.getElementById("person-firstName");
const lastNameInputElement = document.getElementById("person-lastName");
const formElement = document.querySelector("form");

const handleAddPerson = async () => {
  const newPerson = {
    firstName: firstNameInputElement.value,
    lastName: lastNameInputElement.value,
  };
  const response = await fetch(PERSONS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPerson),
  });

  const data = response.json();
  return data;
};

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  handleAddPerson();
});
