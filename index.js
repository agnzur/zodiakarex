const nameField = document.getElementById("name-field");
const showButton = document.getElementById("show-button");
const calendar = document.getElementById("birth-date-widget");
console.log(calendar.value);

function getBirthDayAndMonth() {
  const chosenDate = new Date(calendar.value);
  const zodiacSignName = getZodiacSignName(
    chosenDate.getDate(),
    chosenDate.getMonth() + 1
  );

  return zodiacSignName;
}

calendar.addEventListener("change", getBirthDayAndMonth);

async function showHoroscope() {
  const horoscopeSign = getBirthDayAndMonth();
  const horoscopeResult = await getApi(horoscopeSign);
  console.log(horoscopeSign);
  console.log(horoscopeResult);
}
calendar.addEventListener("change", showHoroscope);

function onUserInput() {
  if (
    nameField.value !== null &&
    nameField.value !== undefined &&
    nameField.value !== "" &&
    calendar.value !== ""
  ) {
    showButton.disabled = false;
  } else {
    showButton.disabled = true;
  }
}
nameField.addEventListener("input", onUserInput);

// function showZodiacSign() {
// const signHolder = document.getElementsByClassName("sign-holder")[0];
// const horoscopeSign = getBirthDayAndMonth();
//   const nameHolder = document.getElementsByClassName("name-holder")[0];
//   nameHolder.innerHTML = nameField.value;
// }
// showZodiacSign();
