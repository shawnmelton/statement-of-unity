import AjaxMethods from './xhr/ajaxMethods'
import AjaxRequest from './xhr/ajaxRequest'

import logger from './logger'

class SubmissionService {
    send(body) {
        logger.log('SubmissionService', 'Making a submission request.')
        logger.log('SubmissionService', body)

        const request = new AjaxRequest(AjaxMethods.POST, '/api/submit')
        request.setBody(body)
        request.call().then(r => {
            logger.log('SubmissionService', r)
        })
    }
}

const service = new SubmissionService()

export default service