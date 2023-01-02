const nameField = document.getElementById("name-field");
const showButton = document.getElementById("show-button");

async function getBirthDayAndMonth() {
  const calendar = document.getElementById("birth-date-widget");
  const chosenDate = calendar.value;
  const dateFormat = chosenDate.slice(5).replace("-", ".");

  // const zodiacSigns = await assignZodiacSignToDate(dateFormat);
  // console.log(zodiacSigns);

  console.log(dateFormat);
  calendar.addEventListener("click", getBirthDayAndMonth);
}
getBirthDayAndMonth();
