const prompt = require("prompt-sync")(); // <-- import prompt-sync


let score = 0;

// 🪄 Reusable function for asking a question
function askQuestion(questionText, answers) {
  const answer = prompt(questionText).toLowerCase().trim();

  if (answer === answers[0]) {
    return 1;
  } else if (answer === answers[1]) {
    return 2;
  } else if (answer === answers[2]) {
    return 3;
  } else {
    return 4;
  }
}

// --- Questions ---
score += askQuestion("How did you feel this morning? (good / bad / sleepy / other)", [
  "good",
  "bad",
  "sleepy",
  "other",
]);

score += askQuestion("How are you feeling now? (ok / could be better / sleepy / other)", [
  "ok",
  "could be better",
  "sleepy",
  "other",
]);

score += askQuestion("What would you like to eat now? (something tasty / nothing / soup / other)", [
  "something tasty",
  "nothing",
  "soup",
  "other",
]);

score += askQuestion("Do you like to sleep? (yes when I'm tired / no / yeeeeees / other)", [
  "yes when i'm tired",
  "no",
  "yeeeees",
  "other",
]);

score += askQuestion("Your result is here! Are you ready? (yes / no / i want to sleep / other)", [
  "yes",
  "no",
  "i want to sleep",
  "other",
]);
// random results for score > 17
const randomAnswer= [
    "Hmm, I think you're a happy pigeon",
    "Hmm, you act just like a suspicious hamster",
    "Hmm, It seems to me that you're determined ant"
    ]
    const randomIndex = Math.floor(Math.random() * randomAnswer.length);

// --- FINAL RESULT ---
let result;

if (score <= 8) {
  console.log("You're a happy capybara 🦫");
} else if (score >= 9 && score <= 13) {
  console.log("You're a grumpy moody potato 🥔");
} else if (score >= 14 && score <= 17) {
  console.log("You're a sleepy cat 😴");
} else {
  console.log(randomAnswer[randomIndex]);
}

console.log(`Your total score: ${score}\n${result}`);