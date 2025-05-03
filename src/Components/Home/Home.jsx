import React from 'react';
import Banner from '../Banner/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import FeedBack from '../FeedBack/FeedBack';

const Home = () => {

    const {servicesData, feedBackData} = useLoaderData()

    return (
        <div className='relative top-6 w-[80%] mx-auto mx-w-[1200px] mt-6'>
            <Banner></Banner>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 my-6 '>
                {
                    servicesData.slice(0,4).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <button className='btn btn-primary rounded-xl my-6 block mx-auto'>
                <NavLink to='/allTreatments' >Show more</NavLink>
            </button>
            <FeedBack feedBackData={feedBackData}></FeedBack>
        </div>
    );
};

export default Home;