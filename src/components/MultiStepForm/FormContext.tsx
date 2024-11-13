import React, { createContext, useContext, useState } from 'react';

interface FormData {
  // Personal Details
  fullName: string;
  email: string;
  phone: string;
  // Academic Details
  university: string;
  major: string;
  cgpa: string;
  graduationYear: string;
  // Test Scores
  greScore: string;
  greVerbal: string;
  greQuant: string;
  greAwa: string;
  toeflScore: string;
  // Preferences
  preferredCountries: string[];
  maxBudget: string;
  preferredTerms: string[];
  intendedMajor: string;
}

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  isLastStep: boolean;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    major: '',
    cgpa: '',
    graduationYear: '',
    greScore: '',
    greVerbal: '',
    greQuant: '',
    greAwa: '',
    toeflScore: '',
    preferredCountries: [],
    maxBudget: '',
    preferredTerms: [],
    intendedMajor: '',
  });

  const isLastStep = currentStep === 4;

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        currentStep,
        setCurrentStep,
        isLastStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}