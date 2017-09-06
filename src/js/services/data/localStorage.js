class LocalStorage {
    constructor() {
        this.hasSupport = this._detectSupport()

        // Falls back to memory if needed.
        this.memoryStorage = {}
    }

    _detectSupport() {
        try {
            if (!window.localStorage) {
                throw 'Local Storage is not supported in this browser.'
            }

            // Test webstorage accessibility - Needed for Safari private browsing.
            window.localStorage.setItem('storage_test', '1')
            window.localStorage.removeItem('storage_test')
            return true
        } catch (e) {
            return false
        }
    }

    getItem(key) {
        if (this.hasSupport) {
            return window.localStorage.getItem(key)
        } else if (key in this.memoryStorage) {
            return this.memoryStorage.key
        }

        return null;
    }

    removeItem(key) {
        if (this.hasSupport) {
            window.localStorage.removeItem(key)
        } else {
            this.memoryStorage.key = null
        }
    }

    setItem(key, value) {
        if (this.hasSupport) {
            window.localStorage.setItem(key, value)
        } else {
            this.memoryStorage.key = value
        }
    }
}

const storage = new LocalStorage()
export default storage