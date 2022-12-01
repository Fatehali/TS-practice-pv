import inquirer from 'inquirer';
// aus1st Github
let n = 3; // 3 tries
let isWrong = true;
// type inpType = { [x: string] : any };
const func1 = async (inputNum, guessedNum) => {
    setTimeout(() => {
        console.log("Computer Guessed...");
        setTimeout(() => {
            console.log(guessedNum);
            switch (inputNum) {
                case guessedNum:
                    console.log("Congratulations! You won!");
                    isWrong = false;
                    break;
                default:
                    console.log("Sorry, Try Again!");
            }
        }, 2000);
    }, 1000);
};
// computer guessed
const smartNum = Math.floor(Math.random() * 10);
do {
    // takes user input
    let num1 = await inquirer.prompt([{
            "name": "user_input",
            "type": "number",
            "message": "Guess the number between 0 and 9?"
        }]);
    await func1(num1, smartNum);
} while (isWrong);
// checks the value
// if (num1.user_input === smartNum) isRight = true; 
// console.log(`You Guessed... ${num1.user_input}`);
// let x = await func1();
//} while (n);
