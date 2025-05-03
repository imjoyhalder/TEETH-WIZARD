import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllTreatments = () => {
    const services = useLoaderData()
    return (
        <div>
            <h1 className='text-center text-xl md:text-4xl mt-6'>Our All Treatments</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6 w-[80%] mx-auto mx-w-[1200px] mt-6'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>

    );
};

export default AllTreatments;