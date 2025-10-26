class Answer {
    constructor(text, weight) {
        this.text = text;
        this.weight = weight;
    }
}

class TestQuestion {
    constructor(question, answers) {
        this.question = question;
        this.answers = answers;
    }
}

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

function getTestResult(score) {
    if (score >= 18) {
        return "What are you?";
    } else if (score >= 14) {
        return "You're a sleepy cat";
    } else if (score >= 9) {
        return "You're a grumpy moody potato";
    } else if (score >= 5) {
        return "You're a happy capibara";
    } else {
        return "You're unknown potato";
    }
}

function askQuestion(questionIndex) {
    const testStep = questions[questionIndex];
    console.log(`Question ${questionIndex + 1}: ${testStep.question}`);
    testStep.answers.forEach((answer, index) => {
        console.log(`${index + 1}. ${answer.text}`);
    });
    // simulate answer selection
    const simulatedAnswerIndex = Math.floor(Math.random() * testStep.answers.length);
    console.log(`\nYou selected: ${simulatedAnswerIndex + 1}. ${testStep.answers[simulatedAnswerIndex].text}`);
    summaryScore += testStep.answers[simulatedAnswerIndex].weight;
    console.log(`Current score: ${summaryScore}\n`);
}

function runTest() {
    console.log("=== Who are you today? ===\n");
    // define total test result score points
    let score = 0;
    // loop through all questions
    for (let i = 0; i < questions.length; i++) {
        askQuestion(i);
    }
    let result = getTestResult(score);

    console.log("=== Test Complete ===");
    console.log(`Final Score: ${score}`);
    console.log(`Result: ${result}`);
}

runTest();
