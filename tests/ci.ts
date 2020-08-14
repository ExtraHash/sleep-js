import chalk from "chalk";
import crypto from "crypto";
import { sleep } from "../src/sleep";

const messageData = crypto.randomBytes(32);

async function main() {
  console.log("Testing sleep...");
  setTimeout(() => {
    console.log(chalk.green.bold("Sleep failed."));
    process.exit(1);
  }, 2000);
  await sleep(1000);
  console.log(chalk.green.bold("Sleep passed."));
  process.exit(0);
}

main();
