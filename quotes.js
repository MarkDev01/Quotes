import quotes from "./baseQuotes.js"

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
