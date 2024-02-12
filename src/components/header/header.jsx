import React from 'react'


const header = ({ goBackHandler }) => {
    return (
        <div>
            <header className='h-20'>
                <nav className="flex justify-between">
                    <span className="flex items-center">
                        <img className="h-8 w-10 pl-6 pt-6" src='/backArrow.png' alt="Back Arrow" />
                        <button onClick={goBackHandler} className="font-semibold font-lato text-lg leading-6 border-none bg-white pl-4 pt-6">
                            Go Back</button>
                    </span>


                    <span className="flex items-center">
                        <button className="font-semibold font-lato text-lg leading-6 border-none bg-white pr-4 pt-6">
                            Exit
                        </button>
                        <img className="h-9 w-8 pr-6 pt-6" src="/cancelMark.png" alt="Cancel Mark" />
                    </span>
                </nav>

            </header>

        </div>
    )
}

export default header