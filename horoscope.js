const params = new URLSearchParams(window.location.search);

function getZodiacSign() {
  const chosenDate = new Date(params.get("birthDate"));
  const zodiacSignName = getZodiacSignName(
    chosenDate.getDate(),
    chosenDate.getMonth() + 1
  );
  return zodiacSignName;
}

const zodiacSign = getZodiacSign();

async function displayHoroscopeInfo() {
  const horoscopeResult = await getHoroscope(zodiacSign);

  const horoscopeDescription = document.getElementById("horoscope-description");
  horoscopeDescription.innerHTML = horoscopeResult.description;

  const luckyNumValue = document.getElementById("luckynum-value");
  luckyNumValue.innerHTML = horoscopeResult.luckyNumber;

  const colorValue = document.getElementById("color-value");
  colorValue.innerHTML = horoscopeResult.color;

  const compatibilityValue = document.getElementById("compatibility-value");
  compatibilityValue.innerHTML = horoscopeResult.compatibility;
}
displayHoroscopeInfo();

function displayNameAndZodiacSign() {
  const nameValue = document.getElementById("name-value");
  nameValue.innerHTML = params.get("name");

  const signValue = document.getElementById("sign-value");
  signValue.innerHTML = zodiacSign;
}
displayNameAndZodiacSign();

function displaySignPic() {
  const signPicture = document.getElementById("sign-pic");
  signPicture.src = `symbols/${zodiacSign}.png`;
}

displaySignPic();
