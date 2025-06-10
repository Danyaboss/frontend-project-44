import playGame from "../index.js";

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gcd = (a, b) => {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
};

const QuestionAndResult = () => {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const question = `${num1} ${num2}`;
    const correctAnswer = String(gcd(num1, num2));

    return { question, correctAnswer };
};
const playGcdGame = () => { 
    const gameLogic = 'Find the greatest common divisor of given numbers.' 
    playGame(gameLogic, QuestionAndResult);
};

export default playGcdGame