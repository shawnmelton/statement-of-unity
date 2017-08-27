class AjaxResponse {
    constructor(response) {
        this.response = response
    }

    getResult() {
        return this.response.result || []
    }

    hasError() {
        try {
            return (this.response.status.code !== 200)
        } catch (e) {
            return true
        }
    }

    isValid() {
        try {
            return (typeof this.response === 'object' && this.response.status && typeof this.response.status === 'object')
        } catch (e) {
            return false
        }
    }
}

export default AjaxResponse