import { sections } from "./sections"

const replaceEnglishNamesWithTransliteratedNames = text => {
    for (const book of getBooks()) {
        text = text.replace(book.englishName, book.transliteratedName)
    }

    return text
}

const replaceTransliteratedNamesWithEnglishNames = text => {
    for (const book of getBooks()) {
        text = text.replace(book.transliteratedName, book.englishName)
    }

    return text
}

const getSections = () =>
    sections.map(section => ({
        ...section,
        books: [...section.books],
    }))

const getBooks = () => {
    let books = []

    for (const section of sections) {
        const {
            transliteratedId,
            transliteratedName,
            englishId,
            englishName,
            order,
        } = section

        for (const book of section.books) {
            books.push({
                ...book,
                section: {
                    transliteratedId,
                    transliteratedName,
                    englishId,
                    englishName,
                    order,
                },
            })
        }
    }

    return books
}

export {
    replaceEnglishNamesWithTransliteratedNames,
    replaceTransliteratedNamesWithEnglishNames,
    getSections,
    getBooks,
}
