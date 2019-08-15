const { assert } = require("chai")

const {
    replaceEnglishNamesWithTransliteratedNames,
    replaceTransliteratedNamesWithEnglishNames,
    getSections,
    getBooks,
} = require("../build")

const byEnglishId = id => object => object.englishId === id

describe("scripture utils", () => {
    it("should translate from english to transliterated", function() {
        const translated = replaceEnglishNamesWithTransliteratedNames(
            "Genesis Exodus Leviticus",
        )

        assert.equal("Berĕshith Shemoth Wayyiqra", translated)
    })

    it("should translate from transliterated to english", function() {
        const translated = replaceTransliteratedNamesWithEnglishNames(
            "Berĕshith Shemoth Wayyiqra",
        )

        assert.equal("Genesis Exodus Leviticus", translated)
    })

    it("should return all sections", function() {
        const sections = getSections()
        assert.equal(sections.length, 4)

        sections.forEach(section => {
            assert.isOk(section.transliteratedId)
            assert.isOk(section.transliteratedName)
            assert.isOk(section.englishId)
            assert.isOk(section.englishName)
            assert.isOk(section.books)
            assert.isOk(section.order)
        })
    })

    it("should return all torah books", function() {
        const section = getSections().find(byEnglishId("torah"))
        assert.equal(section.books.length, 5)

        const first = section.books.shift()
        const last = section.books.pop()
        assert.equal(first.englishId, "genesis")
        assert.equal(last.englishId, "deuteronomy")
    })

    it("should return all prophets books", function() {
        const section = getSections().find(byEnglishId("prophets"))
        assert.equal(section.books.length, 22)

        const first = section.books.shift()
        const last = section.books.pop()
        assert.equal(first.englishId, "joshua")
        assert.equal(last.englishId, "malachi")
    })

    it("should return all first writing books", function() {
        const section = getSections().find(byEnglishId("first-writings"))
        assert.equal(section.books.length, 12)

        const first = section.books.shift()
        const last = section.books.pop()
        assert.equal(first.englishId, "psalms")
        assert.equal(last.englishId, "2-chronicles")
    })

    it("should return all second writing books", function() {
        const section = getSections().find(byEnglishId("second-writings"))
        assert.equal(section.books.length, 27)

        const first = section.books.shift()
        const last = section.books.pop()
        assert.equal(first.englishId, "matthew")
        assert.equal(last.englishId, "revelation")
    })

    it("should return all books", function() {
        const books = getBooks()
        assert.equal(books.length, 66)

        books.forEach(book => {
            assert.isOk(book.youversionCode)
            assert.isOk(book.transliteratedId)
            assert.isOk(book.transliteratedName)
            assert.isOk(book.englishId)
            assert.isOk(book.englishName)
            assert.isOk(book.chapters)
            assert.isOk(book.order)
        })

        const first = books.shift()
        const last = books.pop()
        assert.equal(first.englishId, "genesis")
        assert.equal(last.englishId, "revelation")
    })
})
