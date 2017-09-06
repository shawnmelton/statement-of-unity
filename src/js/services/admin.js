import storage from './data/localStorage'

class AdminService {
    constructor() {
        this.token = '_admin_'
    }

    getLoggedIn() {
        const status = storage.getItem(this.token)
        return (status !== null && status !== 'false')
    }

    logIn() {
        storage.setItem(this.token, 'true')
    }

    logOut() {
        storage.setItem(this.token, 'true')
    }
}

const service = new AdminService()
export default service