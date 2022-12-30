async function getHoroscope(sign) {
  const response = await fetch(
    `https://aztro.sameerkumar.website/?sign=${sign}&day=today`,
    {
      method: "POST",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      "Currency API returned unsuccessful status code:" + response.status
    );
  }

  const horoscopeDetails = {
    description: data.description,
    compatibility: data.compatibility,
    mood: data.mood,
    color: data.color,
    luckyNumber: data.lucky_number,
  };
  return horoscopeDetails;
}
