const params = new URLSearchParams(window.location.search);

function getZodiacSign() {
  const chosenDate = new Date(params.get("birthDate"));
  const zodiacSignName = getZodiacSignName(
    chosenDate.getDate(),
    chosenDate.getMonth() + 1
  );
  return zodiacSignName;
}

async function displayHoroscopeInfo() {
  const horoscopeSign = getZodiacSign();
  const horoscopeResult = await getApi(horoscopeSign);

  const horoscopeDescription = document.getElementById("horoscope-description");
  horoscopeDescription.innerHTML = horoscopeResult.description;

  const luckyNumWidget = document.getElementById("luckynum-widget");
  luckyNumWidget.innerHTML = horoscopeResult.luckyNumber;

  const colorWidget = document.getElementById("color-widget");
  colorWidget.innerHTML = horoscopeResult.color;

  const compatibilityWidget = document.getElementById("compatibility-widget");
  compatibilityWidget.innerHTML = horoscopeResult.compatibility;
}
displayHoroscopeInfo();

function displayZodiacSign() {
  const nameWidget = document.getElementById("name-widget");
  nameWidget.innerHTML = params.get("name");

  const signWidget = document.getElementById("sign-widget");
  signWidget.innerHTML = getZodiacSign();
}
displayZodiacSign();

function displaySignPic() {
  const signPicture = document.getElementById("sign-pic");
  const sign = getZodiacSign();
  signPicture.src = `symbols/${sign}.png`;
}

displaySignPic();
