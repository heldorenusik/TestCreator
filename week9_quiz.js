//My quiz: What creature are you today?

// Define answer structure
class Answer {
    constructor(text, score) {
        this.text = text;
        this.score = score;
    }
}
// Define question structure
class TestQuestion {
    constructor(question, answers) {
        this.question = question;
        this.answers = answers;
    }
}
// Define all questions and answers
const questions = [
    new TestQuestion("How did you feel this morning?", [
        new Answer("Good", 1),
        new Answer("Bad", 2),
        new Answer("Sleepy", 3),
        new Answer("Other", 4)
    ]),
    new TestQuestion("How are you feeling now?", [
        new Answer("Ok", 1),
        new Answer("Could be better", 2),
        new Answer("Sleepy", 3),
        new Answer("Other", 4)
    ]),
    new TestQuestion("What would you like to eat now?", [
        new Answer("Something tasty", 1),
        new Answer("Nothing", 2),
        new Answer("Sleep", 3),
        new Answer("Other", 4)
    ]),
    new TestQuestion("Do you like to sleep?", [
        new Answer("Yes, when I'm tired", 1),
        new Answer("No", 2),
        new Answer("Yeeeeees", 3),
        new Answer("Other", 4)
    ]),
    new TestQuestion("Your result is here! Are you ready?", [
        new Answer("Yes", 1),
        new Answer("No", 2),
        new Answer("I want to sleep", 3),
        new Answer("Other", 4)
    ])
];
// Function to get test result based on score
function getTestResult(score) {
    if (score >= 18) {
        const randomAnswer = [
            "Hmm, I think you're a happy pigeon 🐦",
            "Hmm, you act just like a suspicious hamster 🐹",
            "Hmm, It seems to me that you're determined ant 🐜"
        ];
        const randomIndex = Math.floor(Math.random() * randomAnswer.length);
        return randomAnswer[randomIndex]; // return random result for score > 17
    } else if (score >= 14) {
        return "You're a sleepy cat 🐱";
    } else if (score >= 9) {
        return "You're a grumpy moody potato 🥔";
    } else if (score >= 5) {
        return "You're a happy capibara 🦫";
    } else {
        return "Who are you, unknown creature? 👽";
    }
}
// Function to ask a question and get score
function askQuestion(questionIndex) {
    const currentQuestion = questions[questionIndex]; // get current question
    console.log(`\nQuestion ${questionIndex + 1}: ${currentQuestion.question}`);
    currentQuestion.answers.forEach((answer, index) => {
        console.log(`${index + 1}. ${answer.text}`);
    });
    const answer = prompt("\nEnter your answer:"); // get user answer
    // Find answer index
    let answerIndex = currentQuestion.answers.findIndex((a) => a.text.toLowerCase() === answer.toLowerCase());
    // Handle unknown answer - default to last option
    if (answerIndex === -1) {
        answerIndex = currentQuestion.answers.length - 1;
    }
    console.log(`\nYou selected: ${answerIndex + 1}. ${currentQuestion.answers[answerIndex].text}`);
    return currentQuestion.answers[answerIndex].score;
}

function runTest() {
    console.log("=== Who are you today? ===\n");
    // define total test result score points
    let score = 0;
    // loop through all questions
    for (let i = 0; i < questions.length; i++) {
        const questionScore = askQuestion(i);
        score += questionScore;
        console.log(`Current score: ${score}\n`);
    }
    let result = getTestResult(score);
    console.log("=== Test Complete ===");
    console.log(`Final Score: ${score}`);
    console.log(`Result: ${result}`);
}
// start the test
runTest();
