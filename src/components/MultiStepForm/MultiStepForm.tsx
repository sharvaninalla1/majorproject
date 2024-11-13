import React from 'react';
import { FormProvider } from './FormContext';
import { useFormContext } from './FormContext';
import StepIndicator from './StepIndicator';
import PersonalDetails from './Steps/PersonalDetails';
import AcademicDetails from './Steps/AcademicDetails';
import TestScores from './Steps/TestScores';
import Preferences from './Steps/Preferences';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function FormContent() {
  const { currentStep, setCurrentStep, isLastStep, formData } = useFormContext();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLastStep) {
      console.log('Form submitted:', formData);
      // Handle form submission
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <AcademicDetails />;
      case 3:
        return <TestScores />;
      case 4:
        return <Preferences />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleNext} className="space-y-8">
      <StepIndicator />
      
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {renderStep()}
        
        <div className="mt-8 flex justify-between">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>
          )}
          <button
            type="submit"
            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ml-auto"
          >
            {isLastStep ? 'Submit' : 'Next'}
            {!isLastStep && <ArrowRight className="w-4 h-4 ml-2" />}
          </button>
        </div>
      </div>
    </form>
  );
}

export default function MultiStepForm() {
  return (
    <FormProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome to Edumatch</h1>
            <p className="text-lg text-gray-600">
              Let's find your perfect postgraduate program match
            </p>
          </div>
          <FormContent />
        </div>
      </div>
    </FormProvider>
  );
}