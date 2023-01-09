const params = new URLSearchParams(window.location.search);

function getZodiacSign() {
  const chosenDate = new Date(params.get("birthDate"));
  const zodiacSignName = getZodiacSignName(
    chosenDate.getDate(),
    chosenDate.getMonth() + 1
  );

  return zodiacSignName;
}

async function showHoroscope() {
  const horoscopeSign = getZodiacSign();
  const horoscopeResult = await getApi(horoscopeSign);
  const horoscopeHolder = document.getElementById("horoscope-container");
  horoscopeHolder.innerHTML = "Horoscope: " + horoscopeResult.description;
}
showHoroscope();

function showZodiacSign() {
  const nameHolder = document.getElementsByClassName("name-holder")[0];
  nameHolder.innerHTML = "Name: " + params.get("name");

  const signHolder = document.getElementsByClassName("sign-holder")[0];
  signHolder.innerHTML = "Zodiac sign: " + getZodiacSign();
}
showZodiacSign();
