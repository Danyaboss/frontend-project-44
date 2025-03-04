#!/usr/bin/env node

import greetUser  from '../src/cli.js';

const startGame = () => {
    console.log('Welcome to the Brain Games!'); 
    const name = greetUser (); 
    
};

startGame();
