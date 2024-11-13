import React from 'react';
import { useFormContext } from '../FormContext';

export default function TestScores() {
  const { formData, setFormData } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="greScore" className="block text-sm font-medium text-gray-700">
            GRE Total Score
          </label>
          <input
            type="number"
            id="greScore"
            name="greScore"
            min="260"
            max="340"
            value={formData.greScore}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="toeflScore" className="block text-sm font-medium text-gray-700">
            TOEFL Score
          </label>
          <input
            type="number"
            id="toeflScore"
            name="toeflScore"
            min="0"
            max="120"
            value={formData.toeflScore}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="greVerbal" className="block text-sm font-medium text-gray-700">
            GRE Verbal
          </label>
          <input
            type="number"
            id="greVerbal"
            name="greVerbal"
            min="130"
            max="170"
            value={formData.greVerbal}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="greQuant" className="block text-sm font-medium text-gray-700">
            GRE Quant
          </label>
          <input
            type="number"
            id="greQuant"
            name="greQuant"
            min="130"
            max="170"
            value={formData.greQuant}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="greAwa" className="block text-sm font-medium text-gray-700">
            GRE AWA
          </label>
          <input
            type="number"
            id="greAwa"
            name="greAwa"
            step="0.5"
            min="0"
            max="6"
            value={formData.greAwa}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>
      </div>
    </div>
  );
}