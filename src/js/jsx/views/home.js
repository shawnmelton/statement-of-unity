import React from 'react'

import Button from '../../components/partials/button'
import SubmissionForm from '../../components/partials/submissionForm'

const template = (component) => {
    return (
        <div className="mt125 p20-25 txtDkGrey borderBox maxWidth1000 center">
            <p className="mb15 txtCenter">August 24, 2017</p>

            <p className="mb25 txtCenter">
                <strong>PREAMBLE</strong> As pastors and ministry leaders in Richmond, Virginia, we desire to express, with a unified voice, our sorrow over last weekend’s tragic events in Charlottesville. These events underscore the broken state of our commonwealth, our country, and our world. Richmond, Virginia has long been a significant location in the dark history of racism and violence in America.  As Christian leaders in this city, we declare, with a unified voice, that the gospel of Jesus Christ speaks clearly and relevantly in this particular moment. In this light, the undersigned pastors and ministry leaders of Metro Richmond unite to announce what follows.
            </p>

            <p className="mb25 txtCenter">
                <strong>WE AFFIRM</strong> that every human being is created in the image of God, and therefore carries the inherent value and dignity of God’s design. We affirm that the variety of human cultures on earth is a beautiful expression of God's love for diversity. We affirm that Jesus Christ was crucified and resurrected not only to offer humankind the gift of eternal life, but also to shatter every division—social, political, economic, or racial—which would separate us. We affirm that God’s consummated Kingdom will be a place of rich diversity and cultural expression.  We affirm that the church is called to be a community that reflects that present and future Kingdom.
            </p>

            <p className="mb25 txtCenter">
                <strong>WE REJECT</strong> the ideology of white supremacy, including antisemitism, as an unqualified evil, a denunciation of the gospel, and a heresy which wars against God’s design for human culture and creation. We reject the notion that white people, or any collection of humans of any culture, are superior to any other. We reject any ideology that seeks to erect or maintain divisions that God has torn down through Jesus Christ. We reject the efforts to place the good of one race or one nation above the good of all, for God desires all people to be saved and come to a knowledge of the truth.
            </p>

            <p className="mb25 txtCenter">
                <strong>WE REPENT</strong> because the church has been complicit in the sins of racism, either through the defense of slavery, segregation, and discrimination, or through passive silence and inactivity. We repent because Christians have played a major role in helping create the segregation and racial injustice that we see in our city and nation today.  We repent of our own racism, fear, and hatred, both conscious and unconscious. We repent of our reluctance to be agents of healing and reconciliation in our churches, in our city and in our nation.
            </p>

            <p className="mb25 txtCenter">
                <strong>WE RESOLVE</strong> to preach, teach, and advocate against the sins of racism. We resolve to lead in the way of love, and to seek ways to heal the divisions that separate races and cultures in our city. We resolve to listen to those who have been wounded and dehumanized by racism. We resolve to pray fervently for God’s healing and reconciliation. We resolve to help our churches become more hospitable and welcoming communities to diverse people.
            </p>

            <p className="mb25 txtCenter">Finally, we resolve to pursue Jesus Christ’s perfect standard of equality, justice, and love in our churches, city, and country.</p>

            
            <p className="clearFix mb50" id="joinTheListContainer">
                <Button text="Join the List" color="Green" href="#form" />
            </p>

            <ul>
            {
                component.props.submissions.map(submission => {
                    return <li key={submission.id}>{submission.firstName} {submission.lastName} - {submission.church}</li>
                })
            }
            </ul>

            <a name="form"></a>
            <p className="mb75"></p>
            <hr className="mb75" />
            
            <h2>Join the List</h2>
            <p className="mb25">Copy will go here explaining what will happen when people fill out this form ...</p>
            <SubmissionForm />
        </div>
    )
}

export default template