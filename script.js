const msg = {
    sign: [`Aries`, `Taurus`, `Gemini`, `Cancer`, `Leo`, `Virgo`, `Libra`, `Scorpio`, `Sagittarius`, `Capricorn`, `Aquarius`, `Pisces`],
    date: [`today`, `tomorrow`, `this week`, `this month`, `this year`, `next year`],
    fortune: [`is not looking to good for you!`, `you're desires will be fullfilled!`, `will be unfortunate for you!`, `is looking to be amazing for you!`, `you will find success!`, `you will suffer a massive lose!`, `you'll gain a fortune!`, `you'll find true love!`, `you'll have to make a very difficult choice!`, `someone close to you will betray you!`]
}

let { sign, date, fortune } = msg;

let randSign =  sign[Math.floor(Math.random() * sign.length)];
let randDate = date[Math.floor(Math.random() * date.length)];
let randFortune = fortune[Math.floor(Math.random() * fortune.length)];

console.log(`As a ${randSign} ${randDate} ${randFortune}`)