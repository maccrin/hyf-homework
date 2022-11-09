const inputOutput = [];
inputOutput.push({ input: /what is my name?/i, output: "askName" }, { input: /My name is [a-z]*./i, output: "tellName" },
    { input: /Add [\w\s]+ to my todo/i, output: "addToDo" }, { input: /Remove [\w\s]+ from my todo list/i, output: "removeToDo" },
    { input: /what[\w,\s]*todo?/i, output: "checkToDolist" }, { input: /Set a [\d+] minutes timer/i, output: "timmer" },
    { input: /what[\w,\s]*today?/i, output: "date" }, { input: /what is [0-9]*\s[+|-|*|/]\s[0-9]*/i, output: "maths" },
);
let respond = '';
const data = {};

function getReply(command) {
    if (command === ' ' || command === undefined) {
        return "sorry didn't get you!!";
    }
    else {
        for (let element of inputOutput) {
            if (element.input.test(command)) {
                switch (element.output) {
                    case "askName": {
                        if (data["name"] === undefined) {
                            respond = "You didn't share your name with me yet."
                        }
                        else {
                            respond = `your name is ${data["name"]}`;
                        }
                        break;
                    }
                    case "tellName": {

                        const myname = getName(command);
                        if (data["name"] === undefined) {
                            saveName(myname);
                            respond = `Nice to meet you ${data["name"]}`;
                        }
                        else {
                            if (data["name"] === myname) {
                                respond = `you already shared your name `;
                            }
                            else {
                                respond = `Will save your new name ${myname}`;
                                saveName(myname);
                            }

                        }
                        break;
                    }
                    case "addToDo": {
                        const toDo = addToDo(command);
                        respond = `${toDo} has been  added to your todo`;
                        break;
                    }
                    case "removeToDo": {
                        const itemremoved = removeFromToDo(command);
                        respond = `${itemremoved} has been removed from your todo`;
                        data["toDo"].splice(data["toDo"].indexOf(itemremoved), 1);
                        break;
                    }
                    case "checkToDolist": {
                        if (data["toDo"] === ' ' || data["toDo"] === undefined) {
                            respond = `Your Todo list is empty`;
                        }
                        else {
                            respond = `Your updated todo list is ${data["toDo"]}`;
                        }
                        break;
                    }
                    case "date": {
                        respond = todayDate();
                        break;
                    }
                    case "timmer": {
                        const mins = timer(command);
                        const timerMin = parseInt(mins, 10) * 60 * 1000;
                        setTimeout(() => {
                            const msg = "SetTimeout executes after 3mins";
                            console.log(msg);
                        }, timerMin);
                        respond = `Timer staretd for ${timerMin} milsecs`;
                        break;
                    }
                    case "maths": {
                        respond = maths(command);
                        break;
                    }

                    default:
                        break;
                }

            }
        }
    }
    return respond;
}
function getName(command) {
    const name = command.split(' ').pop();
    return name;
}
function saveName(username) {
    if (username !== undefined || username !== ' ') {
        data["name"] = username;
    }
}
function addToDo(command) {
    const toDoWords = command.split(' ');
    const userToDo = toDoWords.slice(1, toDoWords.length - 3).join(' ');
    if (data["toDo"] === undefined) {
        data["toDo"] = [userToDo];
    }
    else {
        data["toDo"].push(userToDo);
    }
    return `${userToDo}`;
}
function removeFromToDo(command) {
    const rmvtoDoWords = command.split(' ');
    const rmvuserToDo = rmvtoDoWords.slice(1, rmvtoDoWords.length - 4).join(' ');
    return `${rmvuserToDo}`;
}
function maths(command) {
    const mathcommand = command.split(" ");
    let respond = '';
    let operator = '';
    mathcommand.includes('+') ? operator = '+' : mathcommand.includes('-') ? operator = '-' : mathcommand.includes('*') ? operator = '*' :
        mathcommand.includes('/') ? operator = '/' : 0;

    const opindex = mathcommand.indexOf(operator);
    const num1 = parseInt(mathcommand[opindex - 1], 10);
    const num2 = parseInt(mathcommand[opindex + 1], 10);
    switch (operator) {
        case '+': {
            respond = `output is ${num1 + num2} `;
            break;
        }
        case '-': {
            respond = `output is ${num1 - num2} `;
            break;
        }
        case '*': {
            respond = `output is ${num1 * num2} `;
            break;

        }
        case '/': {
            respond = `output is ${num1 / num2} `;
            break;
        }
        default:
            break
    }
    return respond;
}

function timer(command) {
    const timer = command.split(' ');
    const minutes = timer.slice(2, 3);
    return minutes;
}

function todayDate() {
    const today = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    return `Today is ${today.getDate()} of ${months[today.getMonth()]} in ${today.getFullYear()} `
}
const result = getReply("What is my name?");
console.log(result);
const result1 = getReply("My name is Benjamin.");
console.log(result1);
console.log(getReply("My name is Sara."));
const result2 = getReply("What is my name?");
console.log(result2);
console.log(getReply("Add shopping with friends to my todo"));
console.log(getReply("Add dancing to my todo"));
console.log(getReply("Add biking in copenhagen and then dinner outside to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove shopping with friends from my todo list"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Add Sunday Class to my todo"));
console.log(getReply("Remove dancing from my todo list"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("Set a 3 minutes timer"));
console.log(getReply("what is 30 + 9"));
console.log(getReply("what is 300 * 33"));
console.log(getReply("what is 190 - 110"));
console.log(getReply("what is 200 / 20"));