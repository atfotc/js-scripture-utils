# Scripture utils

A collection of utilities to organise Scripture books (for the [TS2009](https://isr-messianic.org/publications/the-scriptures.html) translation).

## Usage

```
npm install @atfotc/scripture-utils
```

Then:

```js
// "Genesis" -> "Berĕshith" (case sensitive)
replaceEnglishNamesWithTransliteratedNames(string): string

// "Berĕshith" -> "Genesis" (case sensitive)
replaceTransliteratedNamesWithEnglishNames(string): string

// all books by section
getSections(): array

// all books with embedded sections
getBooks(): array
```

## Roadmap

- Translations for different cases
- Hebrew data (`hebrewName` and `hebrewId`) for sections and books

## License

MIT
