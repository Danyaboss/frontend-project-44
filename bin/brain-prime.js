#!/usr/bin/env node

import playGame from '../src/index.js';

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const gameLogic = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return { question: String(number), correctAnswer };
};

const playPrimeGame = () => {
    const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    playGame(gameDescription, gameLogic);
};

playPrimeGame();