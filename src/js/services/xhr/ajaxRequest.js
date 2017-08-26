class AjaxRequest {
    constructor(method, url) {
        this.method = method
        this.url = url
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        this.body = ''
    }

    async call() {
        const response = await fetch(this.url, {
            method: this.method,
            headers: this.headers
        })
            
        return response.json()
    }

    setBody(object) {
        this.body = JSON.stringify(object)
    }
}

export default AjaxRequest