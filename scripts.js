const answer = prompt('')

const isPalindrome = (answer) => {
  const rExp = /[\W_]/g
  const lowerCase = answer.toLowerCase().replace(rExp, '')
  const reverseStr = lowerCase.split('').reverse().join('')
  return lowerCase === reverseStr
}

alert(isPalindrome(answer))
