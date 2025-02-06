// const quotes = [
//   "Будьте тем изменением, которое вы хотите видеть в мире. — Махатма Ганди",
//   "Жизнь — это то, что происходит, пока вы строите другие планы. — Джон Леннон",
//   "Сложно быть человеком, но легко быть человеком. — Фридрих Ницше",
//   "Ваша жизнь — это ваше сообщение миру. — Махатма Ганди",
//   "Не бойтесь делать ошибки. Учитесь на них. — Ричард Брэнсон",
// ]

const quotes = [
  {
    quote: "Будьте тем изменением, которое вы хотите видеть в мире.",
    author: "Махатма Ганди",
    isFavorite: false,
  },
  {
    quote: "Жизнь — это то, что происходит, пока вы строите другие планы.",
    author: "Джон Леннон",
    isFavorite: false,
  },
  {
    quote: "Сложно быть человеком, но легко быть человеком.",
    author: "Фридрих Ницше",
    isFavorite: false,
  },
  {
    quote: "Ваша жизнь — это ваше сообщение миру.",
    author: "Махатма Ганди",
    isFavorite: false,
  },
  {
    quote: "Не бойтесь делать ошибки. Учитесь на них.",
    author: "Ричард Брэнсон",
    isFavorite: false,
  },
  {
    quote:
      "Секрет изменения заключается в том, чтобы сосредоточить всю свою энергию не на борьбе со старым, а на строительстве нового.",
    author: "Сократ",
    isFavorite: false,
  },
  {
    quote:
      "Успех — это не конечная точка, неудача — это не фатально: важно мужество продолжать.",
    author: "Уинстон Черчилль",
    isFavorite: false,
  },
  {
    quote:
      "Счастье не является чем-то готовым. Оно приходит от ваших собственных действий.",
    author: "Далай-лама",
    isFavorite: false,
  },
  {
    quote:
      "Мы не можем решить наши проблемы с тем же мышлением, которое мы использовали, когда их создавали.",
    author: "Альберт Эйнштейн",
    isFavorite: false,
  },
  {
    quote:
      "Самое большое приключение, которое вы можете совершить, — это жить жизнью своей мечты.",
    author: "Опра Уинфри",
    isFavorite: false,
  },
]

export default quotes

const cars = {
  name: "porshe",
  year: 2018,
  electric: false,
  color: "red",
}

const lebron = {
  name: "LeBron",
  age: 40,
  team: "LAL",
}

const comon = [
  {
    name: "LeBron",
    age: 40,
    team: "LAL",
  },
  {
    name: "porshe",
    year: 2018,
    electric: false,
    color: "red",
  },
]

const comon2 = [lebron, cars]

console.log(lebron.team)

console.log(comon[1].electric)

console.log(comon[1].color)

console.log(comon[0].team)

console.log(comon[1].name)

console.log(quotes[9].author)

console.log(quotes[9].quote)

let numbersEx = [100, 200, 300]

let stringEx = ["яблоки", "персики", "апельсины"]

let boolen = [false, true, false, false, true]

let markEx = { name: "Mark", age: "15", eyes: "green" }

console.log("глаза Марка:", markEx.eyes)
