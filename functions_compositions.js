const R = require('ramda');

const isNumeric = (char) => !isNaN(parseFloat(char)) && isFinite(char);

const extractChars = R.split('');

const countNumericChars = (chars) => R.length(R.filter(isNumeric, chars));

const countNumbersInSentence = R.pipe(
    extractChars,
    R.filter(isNumeric),
    countNumericChars
);

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

console.log('Number of numeric characters:', countNumbersInSentence(sentence));
