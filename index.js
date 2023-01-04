const nameField = document.getElementById("name-field");
const showButton = document.getElementById("show-button");
const calendar = document.getElementById("birth-date-widget");

function getBirthDayAndMonth() {
  const chosenDate = new Date(calendar.value);
  const zodiacSignName = getZodiacSignName(
    chosenDate.getDate(),
    chosenDate.getMonth() + 1
  );
  console.log(zodiacSignName);
  return zodiacSignName;
}

calendar.addEventListener("change", getBirthDayAndMonth);
