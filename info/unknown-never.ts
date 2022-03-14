// unknown

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput
}

// never

function generateError (message: string, code: number): never {
    throw { message, errorCode: code }
    // while (true)
}

generateError('An error occured', 500)