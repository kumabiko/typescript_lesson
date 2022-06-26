import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Data from "./data.json";
import TestComponent from "./TestComponent";

// typeofの応用として、JSONの型推定が楽にできる
type USERS = typeof Data;

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

// enum（列挙型）
// 定数をひとまとめにしておくのに便利な機能
// 可視性をあげて、バグを防ぐ為
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};

const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

// 型の互換性
const comp1 = "test";
// 抽象的な文字列の型に、文字列リテラルを代入する
let comp2: string = comp1;

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};

// Generics ジェネリクス
// テンプレートを用意しておき、実際の使うタイミングで型を定義して使う
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: "Hello" };
// const gen1: GEN = { item: "Hello" };
const gen2: GEN<number> = { item: 12 };

// デフォルトを設定できる
interface GEN1<T = string> {
  item: T;
}
// 型を定義しなくても使える
const gen3: GEN1 = { item: "Hello" };

// stringかnumberしか指定出来なくなる　extends
interface GEN2<T extends string | number> {
  item: T;
}
const gen4s: GEN2<string> = { item: "hello" };

// 関数の引数
function funcGen<T>(props: T) {
  return { item: props };
}

const gen6 = funcGen<string>("test");
const gen7 = funcGen<string | null>(null);

// 関数のextendsの使い方
function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}

const gen8 = funcGen1("Hello");
// const gen9 = funcGen1(123); 数値エラー

// Prppsの使い方
interface Props {
  price: number;
}

function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}

const gen10 = funcGen3({ price: 10 });

// Arrow関数
const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="Hello from App" />
      </header>
    </div>
  );
};

export default App;
