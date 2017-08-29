import AjaxMethods from './xhr/AjaxMethods'
import AjaxRequest from './xhr/AjaxRequest'

import logger from './logger'

class AuthService {
    async send(body) {
        logger.log('AuthService', 'Validating admin credentials')
        const request = new AjaxRequest(AjaxMethods.POST, '/api/auth/validate')
        request.setBody(body)
        return await request.call()
    }
}

const service = new AuthService()

export default service