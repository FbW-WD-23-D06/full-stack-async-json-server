import { PERSONS_API_URL } from "../utils/data/API.js";

const firstNameInputElement = document.getElementById("person-firstName");
const lastNameInputElement = document.getElementById("person-lastName");
const formElement = document.querySelector("form");

const handleAddPerson = async () => {
  let error = null;
  let newPersonSent = null;
  try {
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

    newPersonSent = response.json();
  } catch (err) {
    console.log("err:", err);
    error = {
      message: err.message,
      name: err.name,
    };
  } finally {
    return {
      error,
      newPersonSent,
    };
  }
};

formElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  await handleAddPerson();
});
