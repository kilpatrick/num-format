const {
  FormatCurrency,
  FormatNumber,
  FormatPercent,
} = require('.');


describe('Format Number', () => {
  /*
    Currency
  */
  it('Should Pretty Print: Currency (w/ Cents - Trailing 0s)', () => {
    expect(FormatCurrency(123456, false)).toEqual('$123,456.00');
  });

  it('Should Pretty Print: Currency (w/ Cents)', () => {
    expect(FormatCurrency(123456.78, false)).toEqual('$123,456.78');
  });

  it('Should Pretty Print: Currency (Integer - round down)', () => {
    expect(FormatCurrency(987654.32)).toEqual('$987,654');
  });

  it('Should Pretty Print: Currency (Integer - round up)', () => {
    expect(FormatCurrency(9876.54)).toEqual('$9,877');
  });

  /*
    Currency Failing Tests:
      JAPAN:    Expected: "¥ 123,456"     Received: "JP¥ 123,456"
      FRANCE:   Expected: "123 456,78 €"  Received: "€ 123,456.78"
      GERMANY:  Expected: "123.456,78 €"  Received: "€ 123,456.78"
    Local support in Node 8.x is limited. Support added in Node ver. 10.x for additional locales.
  */

  // it('Should Pretty Print: Currency (Locale Override - Japan - integer)', () => {
  //   expect(FormatCurrency(123456, true, 'ja-JP', 'JPY')).toEqual('¥ 123,456');
  // });

  // it('Should Pretty Print: Currency (Locale Override - France - integer)', () => {
  //   expect(FormatCurrency(123456, true, 'fr-FR', 'EUR')).toEqual('123 456 €');
  // });

  // it('Should Pretty Print: Currency (Locale Override - France - decimal)', () => {
  //   expect(FormatCurrency(123456.78, false, 'fr-FR', 'EUR')).toEqual('123 456,78 €');
  // });

  // it('Should Pretty Print: Currency (Locale Override - Germany - decimal)', () => {
  //   expect(FormatCurrency(123456.78, false, 'de-DE', 'EUR')).toEqual('123.456,78 €');
  // });

  it('Should Pretty Print: Currency (Locale Override - United Kingdom - integer)', () => {
    expect(FormatCurrency(123456.78, true, 'en-GB', 'GBP')).toEqual('£123,457');
  });

  it('Should Pretty Print: Currency (Locale Override - United Kingdom - decimal)', () => {
    expect(FormatCurrency(123456.78, false, 'en-GB', 'GBP')).toEqual('£123,456.78');
  });


  /*
    Number
  */
  it('Should Pretty Print: Number  (2 places)', () => {
    expect(FormatNumber(1000)).toEqual('1,000');
  });

  it('Should Pretty Print: Number  (1 place)', () => {
    expect(FormatNumber(1234567.89, 1)).toEqual('1,234,567.9');
  });

  it('Should Pretty Print: Number  (0 places - round up)', () => {
    expect(FormatNumber(98.765, 0)).toEqual('99');
  });

  it('Should Pretty Print: Number  (0 places - round down)', () => {
    expect(FormatNumber(22333.44, 0)).toEqual('22,333');
  });

  // it('Should Pretty Print: Number (0 places - round down - France)', () => {
  //   expect(FormatNumber(123456, 0, 'fr-FR')).toEqual('123 456');
  // });


  /*
    Percentage
  */
  it('Should Pretty Print: Percentage (2 places)', () => {
    expect(FormatPercent(0.8522)).toEqual('85.22%');
  });

  it('Should Pretty Print: Percentage (Trailing 0)', () => {
    expect(FormatPercent(0.135)).toEqual('13.50%');
  });

  it('Should Pretty Print: Percentage (1 place)', () => {
    expect(FormatPercent(0.7337, 1)).toEqual('73.4%');
  });

  it('Should Pretty Print: Percentage (0 places - round up)', () => {
    expect(FormatPercent(0.5567, 0)).toEqual('56%');
  });

  it('Should Pretty Print: Percentage (0 places - round down)', () => {
    expect(FormatPercent(0.3312, 0)).toEqual('33%');
  });
  //
});
