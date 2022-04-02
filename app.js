const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function run() {
  for await (const line of rl) {
    handleLine(line);
  }
}

run();

// node app.js < invoer.txt
function handleLine(line) {
  console.log({ line });
}
