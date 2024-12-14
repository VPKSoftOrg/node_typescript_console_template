import readline from "node:readline";
import { setTimeout } from "node:timers/promises";

export const greetWorld = () => {
    return "Hello world!";
};

console.log(greetWorld());
console.log(greetWorld());
console.log(greetWorld());

// Reading from stdin
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Loop until user types "quit"
let loopRunning = true;

// listen for user input
rl.on("line", (input) => {
    if (input === "quit") {
        loopRunning = false;
    }
});

// The main loop
while (loopRunning) {
    // your loop code here
    console.log("Loop running...");
    // simulate some work
    await setTimeout(1000);
}

// close the readline interface
rl.close();
