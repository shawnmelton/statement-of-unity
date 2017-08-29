import AjaxMethods from './xhr/AjaxMethods'
import AjaxRequest from './xhr/AjaxRequest'

import logger from './logger'

class SubmissionsService {
    async getApproved() {
        logger.log('SubmissionsService', 'Fetching approved submissions')
        const request = new AjaxRequest(AjaxMethods.GET, '/api/submissions?approved=1')
        return await request.call()
    }

    async getUnapproved() {
        logger.log('SubmissionsService', 'Fetching unapproved submissions')
        const request = new AjaxRequest(AjaxMethods.GET, '/api/submissions?unapproved=1')
        return await request.call()
    }
}

const service = new SubmissionsService()

export default service