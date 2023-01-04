class zodiacSign {
  constructor(signName, startMonth, startDay, endMonth, endDay) {
    this.signName = signName;
    this.startDate = new Date(`2000-${startMonth}-${startDay}`);
    this.endDate = new Date(`2000-${endMonth}-${endDay}`);
  }
  isZodiacSign(day, month) {
    const date = new Date(`2000-${month}-${day}`);
    return date >= this.startDate && date <= this.endDate;
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
  if (Aquarius.isZodiacSign(day, month)) {
    return Aquarius.signName;
  } else if (Pisces.isZodiacSign(day, month)) {
    return Pisces.signName;
  } else if (Aries.isZodiacSign(day, month)) {
    return Aries.signName;
  } else if (Taurus.isZodiacSign(day, month)) {
    return Taurus.signName;
  } else if (Gemini.isZodiacSign(day, month)) {
    return Gemini.signName;
  } else if (Cancer.isZodiacSign(day, month)) {
    return Cancer.signName;
  } else if (Leo.isZodiacSign(day, month)) {
    return Leo.signName;
  } else if (Virgo.isZodiacSign(day, month)) {
    return Virgo.signName;
  } else if (Libra.isZodiacSign(day, month)) {
    return Libra.signName;
  } else if (Scorpius.isZodiacSign(day, month)) {
    return Scorpius.signName;
  } else if (Sagittarius.isZodiacSign(day, month)) {
    return Sagittarius.signName;
  } else if (Capricornus.isZodiacSign(day, month)) {
    return Capricornus.signName;
  } else {
    throw new Error("error");
  }
}
console.log(getZodiacSignName(28, 10));
