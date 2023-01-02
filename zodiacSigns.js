class zodiacSign {
  constructor(signName, startMonth, startDay, endMonth, endDay) {
    this.signName = signName;
    this.startDate = new Date(`2000-${startMonth}-${startDay}`);
    this.endDate = new Date(`2000-${endMonth}-${endDay}`);
  }
}

const Aquarius = new zodiacSign("Aquarius", 01, 20, 02, 18);
const Pisces = new zodiacSign("Pisces", 02, 19, 03, 20);
const Aries = new zodiacSign("Aries", 03, 21, 04, 19);
const Taurus = new zodiacSign("Taurus", 04, 20, 05, 20);
const Gemini = new zodiacSign("Gemini", 05, 21, 06, 21);
const Cancer = new zodiacSign("Cancer", 06, 22, 07, 22);
const Leo = new zodiacSign("Leo", 07, 23, 08, 22);
const Virgo = new zodiacSign("Virgo", 08, 23, 09, 22);
const Libra = new zodiacSign("Libra", 09, 23, 10, 23);
const Scorpius = new zodiacSign("Scorpius", 10, 24, 11, 21);
const Sagittarius = new zodiacSign("Sagittarius", 11, 22, 12, 21);
const Capricornus = new zodiacSign("Capricornus", 12, 22, 01, 19);

function getZodiacSignName(day, month) {
  const date = new Date(`2000-${month}-${day}`);
  if (date >= Aquarius.startDate && date <= Aquarius.endDate) {
    return Aquarius.signName;
  } else if (date >= Pisces.startDate && date <= Pisces.endDate) {
    return Pisces.signName;
  } else if (date >= Aries.startDate && date <= Aries.endDate) {
    return Aries.signName;
  } else if (date >= Taurus.startDate && date <= Taurus.endDate) {
    return Taurus.signName;
  } else if (date >= Gemini.startDate && date <= Gemini.endDate) {
    return Gemini.signName;
  } else if (date >= Cancer.startDate && date <= Cancer.endDate) {
    return Cancer.signName;
  } else if (date >= Leo.startDate && date <= Leo.endDate) {
    return Leo.signName;
  } else if (date >= Virgo.startDate && date <= Virgo.endDate) {
    return Virgo.signName;
  } else if (date >= Libra.startDate && date <= Libra.endDate) {
    return Libra.signName;
  } else if (date >= Scorpius.startDate && date <= Scorpius.endDate) {
    return Scorpius.signName;
  } else if (date >= Sagittarius.startDate && date <= Sagittarius.endDate) {
    return Sagittarius.signName;
  } else if (date >= Capricornus.startDate && date <= Capricornus.endDate) {
    return Capricornus.signName;
  } else {
    throw new Error("error");
  }
}
console.log(getZodiacSignName(01, 09));
