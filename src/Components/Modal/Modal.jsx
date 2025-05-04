import React from 'react';

const Modal = () => {
    const handleSubmit = e =>{
        e.preventDefault()
        

    }
    return (
        <div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                
                <div className="modal-box">
                    <h1 className='text-2xl mb-6 text-center'>Fill Up Appointment Form</h1>
                    <form onSubmit={handleSubmit} className=' space-y-4  mx-auto' action="">
                        <div className='flex items-center'>

                            <input type="text"
                                placeholder="First Name"
                                name='firstName'
                                className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div>

                            <input type="text"
                                name='lastName'
                                placeholder="Last Name"
                                className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div>

                            <input type="text"
                                name='email'
                                placeholder="Email"
                                className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div>

                            <input type="text"
                                name='number'
                                placeholder="Phone Number"
                                className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div>

                            <input type="date"
                                name='date'
                                placeholder="Appointment date"
                                className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text"
                                name='address'
                                placeholder="Address"
                                className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;