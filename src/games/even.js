import playGame from "../index.js";

const gameLogic = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const question = String(randomNumber);
    const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    return { question, correctAnswer };
};

const playEvenGame = () => {
    const gameDescription = "Answer 'yes' if the number is even, otherwise answer 'no'.";
    playGame(gameDescription, gameLogic);
};

export default playEvenGame;
