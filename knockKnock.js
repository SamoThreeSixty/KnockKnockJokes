const knockKnockJoke = [
  [["Radio"],["Radio not, here I come!"]],
  [["Tank"],["You're Welcome!"]],
  [["Orange"], ["Orange you going to let me in?"]]
]

const randomNumber = Math.floor(Math.random()*(knockKnockJoke.length))
const first = knockKnockJoke[randomNumber][0].toString()
const second = knockKnockJoke[randomNumber][1].toString()

console.log(`Knock, knock.`)
console.log(`Who’s there?`)
console.log(first + ".")
console.log(first +  ` who?`)
console.log(second)