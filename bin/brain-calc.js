#!/usr/bin/env node

import playGame from '../src/index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    const randomIndex = getRandomInt(0, operators.length - 1);
    return operators[randomIndex];
};

const calculate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            throw new Error(`Unknown operator: ${operator}`);
    }
};

const gameLogic = () => {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const operator = getRandomOperator();
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = String(calculate(num1, num2, operator));

    return { question, correctAnswer };
};

const playCalcGame = () => {
    const gameDescription = 'What is the result of the expression?';
    playGame(gameDescription, gameLogic);
};

playCalcGame();
