#!/usr/bin/env node
const chalk = require("chalk");

function space() {
  console.log("\n");
}


function prompt() {
  const input = [];
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.setPrompt(
    chalk.blue.bgBlack.bold(`Enter the text to convert to slug:`)
  );
  readline.prompt();
  readline.on("line", function (slug) {
    input.push(slug);
    readline.close();
  });
  readline.on("close", function (slug) {
    const args = input.join("\n");
    if (args.length <= 0) {
      space();
      console.log(chalk.redBright.bold("No input found!"));
      space();
    } else {
      space();
      const slug = args
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
      console.log(chalk.magentaBright.bold(`Generated Slug: `) + slug);
      space();
      process.exit(0);
    }
  });
}

function main() {
  prompt();
}

if (require.main === module) {
  main();
}
