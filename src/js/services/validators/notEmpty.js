class NotEmptyValidator {
    // Value is not empty
    run(value) {
        return value !== null && typeof value !== 'undefined' && value !== 0 && value !== ''
    }
}

const validator = new NotEmptyValidator()

export default validator