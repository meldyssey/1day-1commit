import * as fs from "fs";
import * as path from "path";

const currentDir: string = path.basename(__dirname);
const filePath: string =
  process.platform === `linux` ? `dev/stdin` : `${currentDir}/input.txt`;
const [n, ...input]: string[] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(input: string[]): void {
  let answer: Set<number> = new Set<number>();

  for (let i: number = 0; i < +n; i++) {
    const [command, numStr]: string[] = input[i].split(" ");
    const num: number = +numStr;

    switch (command) {
      case "add":
        answer.add(num);
        break;
      case "remove":
        answer.delete(num);
        break;
      case "check":
        console.log(answer.has(num) ? 1 : 0);
        break;
      case "toggle":
        if (answer.has(num)) {
          answer.delete(num);
        } else {
          answer.add(num);
        }
        break;
      case "all":
        answer = new Set<number>([
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ]);
        break;
      case "empty":
        answer.clear();
        break;
    }
  }
}

solution(input);
