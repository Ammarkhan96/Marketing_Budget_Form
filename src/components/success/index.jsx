import React, { useState } from 'react'
import MonthlyBudget from '../forms/monthlyBudget'

const SuccessForm = ({ resetUserData }) => {
    const [submitted, setSubmitted] = useState(false)

    const handleClick = () => {
        setSubmitted(true);
        resetUserData(null)
    }

    if (submitted) {
        return <MonthlyBudget />;
    }

    return (

        <div className="bg-gray-50">
            <div className="flex justify-center items-center pt-40" >
                <img src="/rectangleBar.png" alt="Reactangular Bar" />
            </div>
            <br />

            <div className='flex justify-center'>
                <h3 className='text-center text-2xl font-montserrat font-bold'>Your Request for a Proposal Has <br />
                    Been Submitted!
                </h3>
            </div>

            <div>
                <p className="text-center text-gray-500 text-sm font-normal font-lato"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum harum <br />
                    blanditiis vero aut quaerat distinctio, tenetur ut dignissimos sit consequatur sint <br />
                    at eaque, itaque accusamus porro. Nam, suscipit distinctio.</p>
            </div>
            <br />

            <div className='text-center'>
                <button className="px-5 py-3 text-base font-medium text-center text-white bg-green-700 
            rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 
            dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-lato
            rounded-none" onClick={handleClick}>Return Home</button>
            </div>

        </div>
    )
}

export default SuccessForm