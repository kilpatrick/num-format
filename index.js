const TypeCheck = require('typecheck-extended');

const defaultLocale = 'en-US';
const defaultCurrency = 'USD';


function FormatCurrency(
  number,
  roundToInteger = true,
  locale = defaultLocale,
  currency = defaultCurrency,
) {
  TypeCheck(number, 'number');
  TypeCheck(roundToInteger, 'boolean', false);
  TypeCheck(locale, 'string', false);
  TypeCheck(currency, 'string', false);

  let precision = 0;
  if (!roundToInteger) {
    precision = 2;
  }
  const multiplier = 10 ** precision || 0;
  let newNumber = Math.round(number * multiplier) / multiplier;

  newNumber = newNumber.toLocaleString(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: precision,
  });

  return newNumber;
}


function FormatNumber(number, precision = 2, locale = defaultLocale) {
  TypeCheck(number, 'number');
  TypeCheck(precision, 'number', false);
  TypeCheck(locale, 'string', false);

  const multiplier = 10 ** precision || 0;
  const newNumber = Math.round(number * multiplier) / multiplier;

  return newNumber.toLocaleString(locale, { style: 'decimal' });
}


function FormatPercent(number, precision = 2, locale = defaultLocale) {
  TypeCheck(number, 'number');
  TypeCheck(precision, 'number', false);
  TypeCheck(locale, 'string', false);

  const percentage = (number).toLocaleString(locale, {
    style: 'percent',
    minimumFractionDigits: precision,
  });
  return percentage;
}

module.exports = {
  FormatCurrency,
  FormatNumber,
  FormatPercent,
};
