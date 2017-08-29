import AjaxMethods from './xhr/ajaxMethods'
import AjaxRequest from './xhr/ajaxRequest'

import logger from './logger'

class SubmissionService {
    add(body) {
        logger.log('SubmissionService', 'Creating a new submission with API request.')
        logger.log('SubmissionService', body)

        const request = new AjaxRequest(AjaxMethods.POST, '/api/submissions')
        request.setBody(body)
        return request.call();
    }

    update(id, body) {
        logger.log('SubmissionService', 'Updating a submission with API request.')
        logger.log('SubmissionService', body)

        const request = new AjaxRequest(AjaxMethods.PUT, '/api/submissions/'+ id)
        request.setBody(body)
        return request.call();
    }
}

const service = new SubmissionService()

export default service