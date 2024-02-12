import React from 'react'

const MonthlyBudget = ({ onBudgetSelect }) => {
    const handleBudgetSelect = (budget) =>{
        onBudgetSelect(budget);
      };
    
    return (
        <div>

            <div className="bg-gray-50" >
                <div>
                    <h1 className="text-center text-4xl font-montserrat w-480 h-39 leading-39">Step # 1</h1>
                </div>
                <br />
                <div className="text-center text-3xl w-480 h-78 font-montserrat leading-39">
                    <h2>What is your monthly digital <br />
                        marketing bugdet? </h2>
                </div>
                <br />
                <div>
                    <section className="text-center">
                        <div>
                            <button className="text-center text-gray-600 font-lato bg-white
              font-medium bg-#6B7280 border border-gray-300 w-80 h-12" onClick={() => handleBudgetSelect("<$1,000/mo")}
              >{"<$1,000/mo"}</button>
                        </div>
                        <br />
                        <div>
                            <button className="text-center text-gray-600 font-lato bg-white
              font-medium bg-#6B7280 border border-gray-300 w-80 h-12" onClick={() => handleBudgetSelect("$1,000 - $2000")}
              >{"$1,000 - $2000"}</button>
                        </div>
                        <br />

                        <div>
                            <button className="text-center text-gray-600 font-lato bg-white 
              font-medium bg-#6B7280 border border-gray-300 w-80 h-12" onClick={() => handleBudgetSelect("$2,000 - $5000")}
              >{"$2,000 - $5000"}</button>
                        </div>
                        <br />

                        <div>
                            <button className="text-center text-gray-600 font-lato bg-white 
              font-medium bg-#6B7280 border border-gray-300 w-80 h-12" onClick={() => handleBudgetSelect("$5,000 - $10,000")}
              >{"$5,000 - $10,000"}</button>
                        </div>
                        <br />

                        <div>
                            <button className="text-center text-gray-600 font-lato bg-white 
              font-medium bg-#6B7280 border border-gray-300 w-80 h-12" onClick={() => handleBudgetSelect("$10,000 - $25,000")}
              >{"$10,000 - $25,000"}</button>
                        </div>

                        <br />
                        <div>
                            <button className="text-center text-gray-600 font-lato bg-white 
              font-medium bg-#6B7280 border border-gray-300 w-80 h-12" onClick={() => handleBudgetSelect("$25,000 +")}
              >{"$25,000 +"}</button>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default MonthlyBudget