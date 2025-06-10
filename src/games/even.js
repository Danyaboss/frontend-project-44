import readlineSync from 'readline-sync';

const playGame = () => {
    
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!\n`);

    let correctAnswersCount = 0;

    while (correctAnswersCount < 3) {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(`Question: ${randomNumber}`);

        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
        const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log('Correct!');
        correctAnswersCount += 1;
    }

    console.log(`Congratulations, ${name}!`);
};

export default playGame;