// Copy , Primitive Type
// 1 ---Start---

const a = 5;
let b = a;

console.log("Copy::", b);

b = 7;
console.log(b);

// ---End---

// Shallow Copy , Reference Type
// 2 ---Start---

const x = {
  en: "Hello",
  pt: "Olà",
};

let y = x;
y.pt = "Oi";

console.log("Shallow Copy::", y.pt);
console.log(x.pt);

// ---End---

// Deep Copy , Reference Type , Rest Operator
// 3 ---Start---

const m = {
  en: "Bye",
  de: "Tschüss",
};

let n = { ...m };
n.de = "Ciao";

console.log("Deep Copy::", m.de);
console.log(n.de);

// ---

const c = { ...m, ...n };

console.log("Combine two objects::", c);

// ---End---

// Deep Copy , Reference Type , Object.assign
// 4 ---Start---

const k = {
  en: "Bye",
  de: "Tschüss",
};

let l = Object.assign({}, k);
l.de = "Ciao";

console.log("Deep Copy::", k.de);
console.log(l.de);

// ---End---

// Shallow Copy , Reference Type , Object.assign
// 5 ---Start---

const f = {
  en: "Bye",
  de: "Tschüss",
};

let e = Object.assign(f, {});
e.de = "Ciao";

console.log("Shallow Copy::", f.de);
console.log(e.de);

// ---End---

// Shallow Copy , Reference Type , Object.assign
// 6 ---Start---

const v = {
  en: "Bye",
  de: "Tschüss",
};

let w = Object.assign(v);
w.de = "Ciao";

console.log("Shallow Copy::", v.de);
console.log(w.de);

// ---End---

// Shallow Copy , Reference Type , Rest Operator
// 7 ---Start---

const s = {
  foods: {
    dinner: "Pasta",
  },
};

let t = { ...s };
t.foods.dinner = "Soup";

console.log("Shallow Copy::", t.foods.dinner);
console.log(s.foods.dinner);

// ---End---

// Deep Copy , Reference Type , Rest Operator
// 8 ---Start---

const o = {
  foods: {
    dinner: "Pasta",
  },
};

let r = { foods: { ...o.foods } };
r.foods.dinner = "Soup";

console.log("Deep Copy::", o.foods.dinner);
console.log(r.foods.dinner);

// ---End---

// Deep Copy , Reference Type , JSON.parse, JSON.stringify
// 9 ---Start---
const i = {
  foods: {
    dinner: "Pasta",
  },
};

let j = JSON.parse(JSON.stringify(i));
j.foods.dinner = "Soup";

console.log("Deep Copy::", i.foods.dinner);
console.log(j.foods.dinner);

// ---End--

// Deep Copy , Reference Type
// 10 ---Start---
const h = [1, 2, 3];
let q = [...h];

q[1] = 4;
console.log("Deep Copy::", h[1]);
console.log(q[1]);

// ---  Array Methods, Deep Copy --> map; slice; ... + JSON.parse(JSON.stringify()).
// ---End--
