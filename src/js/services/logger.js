class Logger {
    constructor() {
        this.output = false
    }

    log(location, message) {
        if (this.output) {
            console.log('%c'+ location +' %c-- ', 'color: rgb(58, 163, 227);', 'color: rgb(210, 210, 210);', message)
        }
    }

    setOutput(bool) {
        this.output = bool
    }
}

const logger = new Logger()

export default logger