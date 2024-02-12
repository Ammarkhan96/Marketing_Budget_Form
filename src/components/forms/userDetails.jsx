import React, { useState } from 'react'
import Success from '../success'

const UserDetails = ({ setUserInfo }) => {

    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e)
      
        if (!formData.name || !formData.email || !formData.phoneNumber || !formData.additionalInfo) {
            alert('Please fill in all fields');
            return;
        }
        setSubmitted(true);

        console.log("Form Data:", formData);

        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            additionalInfo: ''
        });

        setUserInfo(formData);
    };

    return (
        <div>
            {!submitted ? (
            <form className="bg-gray-50" onSubmit={handleClick}>
                <div>
                    <h1 className="text-center font-montserrat text-4xl font-montserrat w-480 h-39 leading-39">Step # 2</h1>

                    <div className="text-center text-2xl font-montserrat w-480 h-39 leading-39" >
                        <h2 className="font-bold">Details</h2>
                    </div>
                    <div>
                        <p className="text-center font-lato text-gray-500 text-sm font-normal">
                            We're thrilled at the opportunity to help you grow your business online. <br />
                            Please let me know the best way to reach  you.
                        </p>
                    </div>
                    <br />

                    <div className='text-center justify-center'>
                        <label className="text-left pr-64">Name</label>
                        <br />
                        <input className=" font-montserrat font-medium border 
                        border-gray-300 w-80 h-9" type="text" name='name' value={formData.name} onChange={handleChange} required  />
                    </div>
                    <br />
                    <div className="flex justify-center">
                        <div className='text-center'>
                            <label className="pr-48 ">Email</label>
                            <br />
                            <input className="font-montserrat font-medium border 
                            border-gray-300 w-60 h-9" type="email" name='email' value={formData.email} onChange={handleChange} required />

                        </div>

                        <div className='ml-4'>
                            <label className="text-left">Phone Number</label>
                            <br />
                            <input className="font-montserrat font-medium border 
                            border-gray-300 w-60 h-9" type="number" name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} required/>
                        </div>
                    </div>
                    <br />

                    <div className='text-center'>
                        <label className="text-left pr-72">Anything else you'd like to share?</label>
                        <br />
                        <input style={{ width: '520px', height: '112px' }} className="
                    font-montserrat font-medium border border-gray-300" type="text" name='additionalInfo' value={formData.additionalInfo} onChange={handleChange} required />

                    </div>
                    <br />
                </div>

                <div className='text-center'>
                    <button className="px-5 py-3 text-base font-medium text-center text-white bg-green-700 
            rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 
            dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-lato
            rounded-none" type="submit" >Send Request</button>
                </div>
                <br />

                <div className="flex justify-center">
                    <span className="flex">
                        <img className="h-4 w-10 pl-6" src='/lockMark.png' alt="Lock Mark" />
                        <p className="text-gray-500 font-lato text-sm font-normal pl-4">
                            We promise never to share your information or spam your inbox.
                        </p>
                    </span>
                </div>

            </form>
              ) : (
                <Success />
            )}
        </div>
    )
}

export default UserDetails;