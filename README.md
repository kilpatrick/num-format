# Pretty Number

Number pretty printer for currency, percents, and adding thousands separators.

## PrettyCurrency

### Parameters

- `number`: **Number** - Value to convert
- `roundToInteger`: **Boolean** - Defaults to `true` *(Optional)*
- `locale`: **String** - Defaults to `'en-US'` *(Optional)*
- `currency`: **String** - Defaults to `'USD'` *(Optional)*


### Examples

```javascript
  // Pretty Print: Currency (w/ Cents - Trailing 0s)
>> PrettyCurrency(123456, false); // '$123,456.00'

  // Pretty Print: Currency (w/ Cents)
>> PrettyCurrency(123456.78, false); // '$123,456.78'


  // Pretty Print: Currency (Integer - round down)
>> PrettyCurrency(987654.32); // '$987,654'


  // Pretty Print: Currency (Integer - round up)
>> PrettyCurrency(9876.54); // '$9,877'


  // Pretty Print: Currency (Locale Override - United Kingdom - integer)
>> PrettyCurrency(123456.78, true, 'en-GB', 'GBP'); // '£123,457'


  // Pretty Print: Currency (Locale Override - United Kingdom - decimal)
>> PrettyCurrency(123456.78, false, 'en-GB', 'GBP'); // '£123,456.78'
```


## PrettyNumber

### Parameters

- `number`: **Number** - Value to convert
- `precision`: **Number** - Defaults to `2` *(Optional)*
- `locale`: **String** - Defaults to `'en-US'` *(Optional)*


### Examples

```javascript
   // Pretty Print: Number  (2 places)'
    PrettyNumber(1000); // '1,000'


   // Pretty Print: Number  (1 place)'
    PrettyNumber(1234567.89, 1); // '1,234,567.9'


   // Pretty Print: Number  (0 places - round up)'
    PrettyNumber(98.765, 0); // '99'


   // Pretty Print: Number  (0 places - round down)'
    PrettyNumber(22333.44, 0); // '22,333'
```



## PrettyPercent

### Parameters

- `number`: **Number** - Value to convert
- `precision`: **Number** - Defaults to `2` *(Optional)*
- `locale`: **String** - Defaults to 'en-US' *(Optional)*


### Examples

```javascript
   // Pretty Print: Percentage (2 places)'
    PrettyPercent(0.8522); // '85.22%'


   // Pretty Print: Percentage (Trailing 0)'
    PrettyPercent(0.135); // '13.50%'


   // Pretty Print: Percentage (1 place)'
    PrettyPercent(0.7337, 1); // '73.4%'


   // Pretty Print: Percentage (0 places - round up)'
    PrettyPercent(0.5567, 0); // '56%'


   // Pretty Print: Percentage (0 places - round down)
    PrettyPercent(0.3312, 0); // '33%'
```


## Known Issues:

In the current version of pretty-number it should be assumed that only
en-US formatting is supported.

All values sent to pretty-number functions are validated against the typecheck-extended package. If sent a value of a disallowed type, it will throw an uncaught error. This is currently the intended functionality, but is slated to be addressed in the future.

## Versioning:

Once released, pretty-number will use [Semantic Versioning](https://semver.org). At the moment it is possible for breaking changes to be pushed.

---
###### Copyright © 2018 Chris Kilpatrick. Released under [MIT License](https://opensource.org/licenses/MIT).