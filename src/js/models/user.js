class User {
    constructor() {
        this.church = ''
        this.emailAddress = ''
        this.firstName = ''
        this.lastName = ''
    }

    setChurch(church) {
        this.church = church
    }

    setEmailAddress(email) {
        this.emailAddress = email
    }

    setFirstName(firstName) {
        this.firstName = firstName
    }

    setLastName(lastName) {
        this.lastName = lastName
    }
}

export default User