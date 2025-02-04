const quotes = [
  "Будьте тем изменением, которое вы хотите видеть в мире. — Махатма Ганди",
  "Жизнь — это то, что происходит, пока вы строите другие планы. — Джон Леннон",
  "Сложно быть человеком, но легко быть человеком. — Фридрих Ницше",
  "Ваша жизнь — это ваше сообщение миру. — Махатма Ганди",
  "Не бойтесь делать ошибки. Учитесь на них. — Ричард Брэнсон",
]

// const numbers = [1, 2, 3, 4, 5, "text", false, true]

const btn = document.getElementById("generate-button")
const text = document.getElementById("quote")
console.log(btn)

// let quote = quotes[0]
// console.log(quote)

// quote = quotes[1]
// console.log(quote)

// quote = quotes[2]
// console.log(quote)

// quote = quotes[3]
// console.log(quote)

// quote = quotes[4]
// console.log(quote)

let length = quotes.length
console.log(length)

function showQuote() {
  const randomIndex = Math.floor(Math.random() * length)
  console.log(randomIndex)
  text.innerText = quotes[randomIndex]
}

btn.addEventListener("click", showQuote)
