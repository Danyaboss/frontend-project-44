import readlineSync from 'readline-sync';

const greetUser  = () => {
    const name = readlineSync.question('May I have your name? ');
    return name;
};

export default greetUser ;