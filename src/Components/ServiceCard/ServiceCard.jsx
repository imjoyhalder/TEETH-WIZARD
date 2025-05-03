import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { treatment, image, description, cost, id } = service
    return (
        <div className="card bg-base-300 rounded-2xl  shadow-xl">
            <figure>
                <img
                    className='md:w-96 md:h-[300px] w-full h-40'
                    src={image}
                    alt={treatment} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {treatment}
                    <div className="badge bg-green-700">${cost}</div>
                </h2>
                <p title={description}>{description.slice(0, 200)}</p>
                <div className="card-actions justify-end">
                    <NavLink to={`/details/${id}`}>
                        <button className=" btn px-1 rounded-xl bg-primary">Checkout More</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;