#!/usr/bin/env node

import playGame from '../src/index.js';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getAnswer = () => {
    const operators = ['+', '-', '*'];
    const num1 = getRandom(1, 100);
    const num2 = getRandom(1, 100);
    const operator = operators[getRandom(0, operators.length)];

    const calculate = (op, n1, n2) => {
        if (op === '+') {
            return n1 + n2;
        }
        if (op === '-') {
             return n1 - n2;
        }
        if (op === '*') {return n1 * n2;
        }
    };

    const answer = calculate(operator, num1, num2);
    const expression = `${num1} ${operator} ${num2}`;

    return { expression, answer: String(answer) }; 
};

const gameLogic = () => {
    console.log('What is the result of the expression?');
    const { expression, answer } = getAnswer();
    return { question: expression, correctAnswer: answer };
};

playGame(gameLogic);


    
