import React from 'react'

const template = (component) => {
    return (
        <div className="mt125 p20-25 txtDkGrey borderBox center">
            <h2 className="mb15">Unapproved Submissions</h2>
            <p className="mb25">The following submissions have yet to be approved (or rejected).  Please review them below and take the appropriate action.</p>
            <table className="fs80 borderCollapse widthFull">
                <tbody>
                <tr>
                    <th className="p5-10 borderBox txtLeft border borderGrey bgBlue txtWhite fw800">Name</th>
                    <th className="p5-10 borderBox txtLeft border borderGrey bgBlue txtWhite fw800">Church / Organization</th>
                    <th className="p5-10 borderBox txtLeft border borderGrey bgBlue txtWhite fw800">Email Address</th>
                    <th className="p5-10 borderBox txtLeft border borderGrey bgBlue txtWhite fw800">Date Submitted</th>
                    <th className="p5-10 borderBox txtLeft border borderGrey bgBlue txtWhite fw800">Actions</th>
                </tr>
            {
                component.props.unapprovedSubmissions.map(submission => {
                    return <tr key={submission.id}>
                            <td className="p5-10 borderBox txtLeft border borderGrey">{submission.firstName} {submission.lastName}</td>
                            <td className="p5-10 borderBox txtLeft border borderGrey">{submission.church}</td>
                            <td className="p5-10 borderBox txtLeft border borderGrey">{submission.emailAddress}</td>
                            <td className="p5-10 borderBox txtLeft border borderGrey">{submission.dateAdded}</td>
                            <td className="p5-10 borderBox txtLeft border borderGrey">
                                <div className="clearFix">
                                    <a className="block left fw800 txtGreen mr25 cursor" onClick={(e) => {
                                        component.approveSubmission(submission)
                                    }}>Approve</a>
                                    <a className="block left fw800 txtRed cursor" onClick={(e) => {
                                        component.rejectSubmission(submission)
                                    }}>Reject</a>
                                </div>
                            </td>
                        </tr>
                })
            }
                </tbody>
            </table>
        </div>
    )
}

export default template