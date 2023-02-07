const nameField = document.getElementById("name-field");
const calendar = document.getElementById("calendar-widget");

function onUserInput() {
  const showButton = document.getElementById("show-button");
  const regex = new RegExp(/[A-Za-z]+/);
  if (regex.test(nameField.value) === true && calendar.value !== "") {
    showButton.disabled = false;
  } else {
    showButton.disabled = true;
  }
}
nameField.addEventListener("input", onUserInput);
calendar.addEventListener("input", onUserInput);

function changeHoroscopePageHref() {
  const horoscopePage = document.getElementById("horoscope-page-href");
  horoscopePage.href = `./horoscope.html?name=${nameField.value}&birthDate=${calendar.value}`;
}
nameField.addEventListener("input", changeHoroscopePageHref);
calendar.addEventListener("input", changeHoroscopePageHref);
