const eng = {
  plaincodeRegex: '0\\d{4}|[1-5]|(90[0-9]{1})|(6[0-9]{1})|(7[0-9]{1})|(8[0-9]{1})|(9[1-9]{1})',
  textRegex: '[a-z0-9\\s]|[*@#+\\-/.:\\\\!\\(\\=?)]',
  table: [
    { unicode: 'a', plaincode: '1' },
    { unicode: 'e', plaincode: '2' },
    { unicode: 'i', plaincode: '3' },
    { unicode: 'n', plaincode: '4' },
    { unicode: 'o', plaincode: '5' },
    { unicode: 't', plaincode: '60' },
    { unicode: 'b', plaincode: '61' },
    { unicode: 'c', plaincode: '62' },
    { unicode: 'd', plaincode: '63' },
    { unicode: 'f', plaincode: '64' },
    { unicode: 'g', plaincode: '65' },
    { unicode: 'h', plaincode: '66' },
    { unicode: 'j', plaincode: '67' },
    { unicode: 'k', plaincode: '68' },
    { unicode: 'l', plaincode: '69' },
    { unicode: 'm', plaincode: '70' },
    { unicode: 'p', plaincode: '71' },
    { unicode: 'q', plaincode: '72' },
    { unicode: 'r', plaincode: '73' },
    { unicode: 's', plaincode: '74' },
    { unicode: 'u', plaincode: '75' },
    { unicode: 'v', plaincode: '76' },
    { unicode: 'w', plaincode: '77' },
    { unicode: 'x', plaincode: '78' },
    { unicode: 'y', plaincode: '79' },
    { unicode: 'z', plaincode: '80' },
    { unicode: '*', plaincode: '84' },
    { unicode: '@', plaincode: '85' },
    { unicode: '#', plaincode: '86' },
    { unicode: '+', plaincode: '87' },
    { unicode: '-', plaincode: '88' },
    { unicode: '/', plaincode: '89' },
    { unicode: '0', plaincode: '900' },
    { unicode: '1', plaincode: '901' },
    { unicode: '2', plaincode: '902' },
    { unicode: '3', plaincode: '903' },
    { unicode: '4', plaincode: '904' },
    { unicode: '5', plaincode: '905' },
    { unicode: '6', plaincode: '906' },
    { unicode: '7', plaincode: '907' },
    { unicode: '8', plaincode: '908' },
    { unicode: '9', plaincode: '909' },
    { unicode: '.', plaincode: '91' },
    { unicode: ':', plaincode: '92' },
    { unicode: '\'', plaincode: '93' },
    { unicode: '!', plaincode: '94' },
    { unicode: '(', plaincode: '95' },
    { unicode: ')', plaincode: '96' },
    { unicode: '=', plaincode: '97' },
    { unicode: '?', plaincode: '98' },
    { unicode: ' ', plaincode: '99' }
  ]
}

export { eng }
