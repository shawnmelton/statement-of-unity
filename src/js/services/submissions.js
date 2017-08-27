import AjaxMethods from './xhr/AjaxMethods'
import AjaxRequest from './xhr/AjaxRequest'

import logger from './logger'

class SubmissionsService {
    async getApproved() {
        logger.log('SubmissionsService', 'Fetching approved submissions')
        const request = new AjaxRequest(AjaxMethods.GET, '/api/submissions')
        return await request.call()
    }
}

const service = new SubmissionsService()

export default service