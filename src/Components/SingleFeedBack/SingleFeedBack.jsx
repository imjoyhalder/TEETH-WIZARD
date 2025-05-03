import React from 'react';

const SingleFeedBack = ({ feedback }) => {
    const { reviewId, name, userImg, review } = feedback
    return (
        <div className="card bg-base-300  shadow-2xl">
            <div className="px-3 py-4">
                <div className='flex gap-3 justify-between items-center'>
                    <img className='w-12 h-12 rounded-full' src={userImg} alt={name} />
                    <h2 className="card-title">{name}</h2>
                    <p className=''>{new Date().toLocaleDateString()}</p>
                </div>
                <p>{review}</p>
                <div className="card-actions justify-between items-center ">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleFeedBack;