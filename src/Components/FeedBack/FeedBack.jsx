import React from 'react';
import SingleFeedBack from '../SingleFeedBack/SingleFeedBack';

const FeedBack = ({feedBackData}) => {
    // const {reviewId,name,userImg,review} = feedBackData

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap gap-8 justify-center'>
            {
                feedBackData.map(feedback=> <SingleFeedBack key={feedback.reviewId} feedback={feedback}></SingleFeedBack>)
            }
        </div>
    );
};

export default FeedBack;