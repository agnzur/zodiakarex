const nameField = document.getElementById("name-field");
const showButton = document.getElementById("show-button");
const calendar = document.getElementById("birth-date-widget");

function onUserInput() {
  if (nameField.value !== "" && calendar.value !== "") {
    showButton.disabled = false;
  } else {
    showButton.disabled = true;
  }
}
nameField.addEventListener("input", onUserInput);
calendar.addEventListener("input", onUserInput);

function changeIndex2Link() {
  const index2Link = document.getElementById("index2-link");
  return (index2Link.href = `./index2.html?name=${nameField.value}&birthDate=${calendar.value}`);
}
nameField.addEventListener("input", changeIndex2Link);
calendar.addEventListener("input", changeIndex2Link);
