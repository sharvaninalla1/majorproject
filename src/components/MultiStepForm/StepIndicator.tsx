import React from 'react';
import { CheckCircle2, Circle, GraduationCap, User, Award, MapPin } from 'lucide-react';
import { useFormContext } from './FormContext';

const steps = [
  { title: 'Personal', icon: User },
  { title: 'Academic', icon: GraduationCap },
  { title: 'Test Scores', icon: Award },
  { title: 'Preferences', icon: MapPin },
];

export default function StepIndicator() {
  const { currentStep } = useFormContext();

  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-center space-x-4">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const Icon = step.icon;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <React.Fragment key={step.title}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isActive
                      ? 'bg-purple-600 text-white'
                      : isCompleted
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                </div>
                <span
                  className={`mt-2 text-sm font-medium ${
                    isActive ? 'text-purple-600' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-1 w-16 ${
                    stepNumber < currentStep ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}