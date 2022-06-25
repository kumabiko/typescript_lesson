import React from "react";
import logo from "./logo.svg";
import "./App.css";

// 型を見るとそのまま、入っている　リテラル型と言い、文字列の場合は文字列リテラルという
// const name: "hello"
const name = "hello";

// let name2: string
let name2 = "hello";

let array1 = [true, false];
let array2 = [0, 1, "hello"];

// Objectの型定義
interface NAME {
  first: string;
  middle?: string; //?をつけると必須ではなくなる
  last: string | null; // stringかnullを許容する
}

let nameObj: NAME = {
  first: "Yamada",
  last: "Taro",
};

// 関数の型定義
const func1 = (x: number, y: number): number => {
  return x + y;
};

// Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyyy",
};

// Union Types
let value: boolean | number;
value = true;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "Hello"];

// Literal Types

// 文字列リテラル
let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";

// 数字リテラル
let memory: 256 | 512;
memory = 512;

// typeof
// JSONのデータ型が複雑な構造を持っていた時に、typeofで継承する事が出来るので、開発者が楽に設定する事が出来る
let msg: string = "Hi";
let msg2: typeof msg;

msg2 = "hello";

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

// keyof
// Union Typeで型付けする
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};
// keySportsは"Soccer"と"Baseball"しか受け付けなくなる
let keySports: keyof typeof SPORTS;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
