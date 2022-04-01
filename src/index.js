const eng = {
  // regex: /0\d{5}|[1-5]|([6-9]{1}[0-9]{1})/g
  // test: '66269695990000019977573696394' -> 'hello 😀 world!'
  regex: '0\\d{5}|[1-5]|[60-89]{2}',
  table: [
    { txt: 'a', plaincode: '1' },
    { txt: 'e', plaincode: '2' },
    { txt: 'i', plaincode: '3' },
    { txt: 'n', plaincode: '4' },
    { txt: 'o', plaincode: '5' },
    { txt: 't', plaincode: '60' },
    { txt: 'b', plaincode: '61' },
    { txt: 'c', plaincode: '62' },
    { txt: 'd', plaincode: '63' },
    { txt: 'f', plaincode: '64' },
    { txt: 'g', plaincode: '65' },
    { txt: 'h', plaincode: '66' },
    { txt: 'j', plaincode: '67' },
    { txt: 'k', plaincode: '68' },
    { txt: 'l', plaincode: '69' },
    { txt: 'm', plaincode: '70' },
    { txt: 'p', plaincode: '71' },
    { txt: 'q', plaincode: '72' },
    { txt: 'r', plaincode: '73' },
    { txt: 's', plaincode: '74' },
    { txt: 'u', plaincode: '75' },
    { txt: 'v', plaincode: '76' },
    { txt: 'w', plaincode: '77' },
    { txt: 'x', plaincode: '78' },
    { txt: 'y', plaincode: '79' },
    { txt: 'z', plaincode: '80' },
    { txt: '*', plaincode: '84' },
    { txt: '@', plaincode: '85' },
    { txt: '#', plaincode: '86' },
    { txt: '+', plaincode: '87' },
    { txt: '-', plaincode: '88' },
    { txt: '/', plaincode: '89' },
    { txt: '0', plaincode: '900' },
    { txt: '1', plaincode: '901' },
    { txt: '2', plaincode: '902' },
    { txt: '3', plaincode: '903' },
    { txt: '4', plaincode: '904' },
    { txt: '5', plaincode: '905' },
    { txt: '6', plaincode: '906' },
    { txt: '7', plaincode: '907' },
    { txt: '8', plaincode: '908' },
    { txt: '9', plaincode: '909' },
    { txt: '.', plaincode: '91' },
    { txt: ':', plaincode: '92' },
    { txt: '\'', plaincode: '93' },
    { txt: '!', plaincode: '94' },
    { txt: '(', plaincode: '95' },
    { txt: ')', plaincode: '96' },
    { txt: '=', plaincode: '97' },
    { txt: '?', plaincode: '98' },
    { txt: ' ', plaincode: '99' }
  ]
}

// function textToPlaincode (text, conversionTable) {
//   console.log(text, conversionTable)
// }

function plaincodeToText (plaincode, conversion) {
  // finding via regex: plaincode enteties in plaincode string
  const re = new RegExp(conversion.regex, 'giu')
  const plaincodeArr = plaincode.match(re)

  // replace plaincode with txt
  const text = plaincodeArr.map((plaincode) => {
    const letterObj = conversion.table.find(obj => obj.plaincode === plaincode)
    return letterObj.txt
  })
  return text.join('')
}

const plaincode = '662696959977573696394'
const text = plaincodeToText(plaincode, eng)
console.log('converting plaincode: \'' + plaincode + '\' to text: \'' + text + '\'')

// const txt = 'hello 😀 world!'
// textToPlaincode('some text', conversionTableEnglish)