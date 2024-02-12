import React, { useState } from 'react';
import Headers from '../../components/header/header';
import MonthlyBudget from '../../components/forms/monthlyBudget';
import UserDetails from '../../components/forms/userDetails';
import Success from '../../components/success/index';
import ProgressBar from '../../components/progess';

const totalSteps = 3
const progessRatio = totalSteps / 9

const Index = () => {
  const [step, setStep] = useState(1);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [progress, setProgress] = useState(progessRatio)

  const onNextClick = () => {
    if (step < totalSteps) {
      setStep((prevIndex) => prevIndex + 1);
      setProgress(prevProgress => prevProgress + progessRatio)
    }
  };

  const goBackHandler = () => {
    if (step > 1) {
      setStep((prevIndex) => prevIndex - 1);
    }
  }

  const handleBudgetSelect = (budget) => {
    setSelectedBudget(budget);
    console.log("Selected budget:", budget);
    onNextClick();
  };

  const handleUserDetails = (formData) => {
    setUserInfo(formData)
    console.log("Selected FormData", formData);
    onNextClick();
  };

  const resetUserData = () => {
    setStep(1);
    setSelectedBudget(null);
    setUserInfo(null);
    setProgress(progessRatio);
    console.clear();
  };

  return (
    <div >
      <Headers goBackHandler={goBackHandler} />
      <ProgressBar progress={progress} />
      {
        step === 1 && <MonthlyBudget onBudgetSelect={handleBudgetSelect} />
      }

      {
        step === 2 && <UserDetails setUserInfo={handleUserDetails} />
      }

      {
        step === 3 &&
        <Success  resetUserData={resetUserData}/>
      }

    </div>
  );
};

export default Index;
