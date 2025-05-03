import React from 'react';
import bannerImg from '../../assets/ahge_78be_220302.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200  py-6 px-4 rounded-2xl sm:px-6 lg:px-8 w-[80%] mx-auto mx-w-[1200px] ">
            <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-8">

                {/* Text Content */}
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl font-bold">Box Office News!</h1>
                    <p className="py-4 sm:py-6 max-w-xl mx-auto lg:mx-0">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Book Now</button>
                </div>

                {/* Image */}
                <img
                    src={bannerImg}
                    alt="Banner"
                    className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg shadow-2xl"
                />

            </div>
        </div>

    );
};

export default Banner;