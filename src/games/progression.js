import playGame from "../index.js";

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (length, start, step, hiddenIndex) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
        progression.push(start + i * step);
    }
    progression[hiddenIndex] = '..';
    return progression;
};

const QuestionAndResult = () => {
    const length = getRandomInt(5, 10);
    const start = getRandomInt(1, 20);
    const step = getRandomInt(1, 10);
    const hiddenIndex = getRandomInt(0, length - 1);

    const progression = generateProgression(length, start, step, hiddenIndex);
    const correctAnswer = String(start + hiddenIndex * step);
    const question = progression.join(' ');

    return { question, correctAnswer };
};
const playProgressionGame = () => {
    const gameLogic = 'What number is missing in the progression?'
    playGame(gameLogic, QuestionAndResult);
};

export default playProgressionGame;