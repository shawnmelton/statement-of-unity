class AlphaFirstCharacterValidator {
    // Value starts with at least one character
    run(value) {
        return /^[a-z,A-Z]+/.test(value)
    }
}

const validator = new AlphaFirstCharacterValidator()

export default validator