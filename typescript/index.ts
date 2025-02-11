// type : number, string, boolean, null, undefined, any

let a: number = 3;
a = 4;

let b: string = "string";

b = "true";

let c: any = 3;
c = "spring";

let d: number | string = 3; // 타입 2개 지정 가능
d = "summer";

let e: string[] = ["apple", "mongo"];

e.push("pineapple");

function addNumber(a: number, b: number): number {
    return a + b;
}
addNumber(3, 7);
