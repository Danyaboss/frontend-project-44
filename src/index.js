// src/index.js
import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (gameLogic, QuestionAndResult) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(gameLogic);

    for (let i = 0; i < roundsCount; i += 1) {
        const { question, correctAnswer } = QuestionAndResult();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};

export default playGame;