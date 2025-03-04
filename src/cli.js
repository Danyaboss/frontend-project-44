import readlineSync from 'readline-sync';

const greetUser  = () => {
    console.log('Welcome to the Brain game!');
    const name = readlineSync.question('May I have your name? ');
    return name; 
};

export default greetUser ;