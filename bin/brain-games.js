#!/usr/bin/env node

import readlineSync from 'readline-sync';

const greetUser  = () => {
    const name = readlineSync.question('May I have your name? ');
    return name; 
};

const startGame = () => {
    console.log('Welcome to the Brain Games!'); 
    const name = greetUser ();
    console.log(`Hello, ${name}!`); 
    
};

startGame();