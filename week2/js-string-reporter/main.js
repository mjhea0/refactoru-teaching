var telephone = prompt('Please enter your phone number (XXX-XXX-XXXX).');

if (telephone.length === 12 && telephone.charAt(3) === '-' && telephone.charAt(7) === '-') {
    console.log('Valid')
} else {
    console.log('Invalid!')
};


var birthday = prompt('Please enter your birthday (MM/DD/YY).');

if (birthday.length === 8 && birthday.charAt(2) === '/' && birthday.charAt(5) === '/') {
    console.log('Valid')
} else {
    console.log('Invalid!')
};


var postalCode = prompt('Please enter your postal code (XXXXX or XXXXX-XXXX).');

if (postalCode.length === 5 || postalCode.length === 10 && postalCode.charAt(5) === '-') {
    console.log('Valid')
} else {
    console.log('Invalid!')
};


var state = prompt('Please enter your state (i.e., CA).');

if (state.length === 2 && state === state.toUpperCase()) {
    console.log('Valid')
} else {
    console.log('Invalid!')
};


var married = prompt('Are you married?');

if (married.toUpperCase() === 'YES' || married.toUpperCase() == 'NO') {
    console.log('Valid')
} else {
    console.log('Invalid!')
};
