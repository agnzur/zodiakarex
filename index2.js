const params = new URLSearchParams(window.location.search);

function getZodiacSign() {
  const chosenDate = new Date(params.get("birthDate"));
  const zodiacSignName = getZodiacSignName(
    chosenDate.getDate(),
    chosenDate.getMonth() + 1
  );
  console.log(zodiacSignName);
  return zodiacSignName;
}

async function showHoroscopeInfo() {
  const horoscopeSign = getZodiacSign();
  const horoscopeResult = await getApi(horoscopeSign);
  const horoscopeHolder = document.getElementById("horoscope-description");
  horoscopeHolder.innerHTML = horoscopeResult.description;

  const luckyNumHolder = document.getElementsByClassName("luckynum-holder")[1];
  console.log(horoscopeResult);
  luckyNumHolder.innerHTML = horoscopeResult.luckyNumber;

  const colorHolder = document.getElementsByClassName("color-holder")[1];
  colorHolder.innerHTML = horoscopeResult.color;

  const compatibilityHolder = document.getElementsByClassName(
    "compatibility-holder"
  )[1];
  compatibilityHolder.innerHTML = horoscopeResult.compatibility;
}
showHoroscopeInfo();

function showZodiacSign() {
  const nameHolder = document.getElementsByClassName("name-holder")[1];
  nameHolder.innerHTML = params.get("name");

  const signHolder = document.getElementsByClassName("sign-holder")[1];
  signHolder.innerHTML = getZodiacSign();
}
showZodiacSign();
