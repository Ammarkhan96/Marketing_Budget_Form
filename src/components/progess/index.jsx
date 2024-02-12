import React from 'react';

const ProgressBar = ({ progress }) => {

    return (
        <div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${progress * 100}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;
