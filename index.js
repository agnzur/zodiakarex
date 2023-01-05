const nameField = document.getElementById("name-field");
const showButton = document.getElementById("show-button");
const calendar = document.getElementById("birth-date-widget");

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
