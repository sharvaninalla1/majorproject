import React from 'react';
import { useFormContext } from '../FormContext';

export default function AcademicDetails() {
  const { formData, setFormData } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="university" className="block text-sm font-medium text-gray-700">
          University Name
        </label>
        <input
          type="text"
          id="university"
          name="university"
          value={formData.university}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <div>
        <label htmlFor="major" className="block text-sm font-medium text-gray-700">
          Major/Specialization
        </label>
        <input
          type="text"
          id="major"
          name="major"
          value={formData.major}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="cgpa" className="block text-sm font-medium text-gray-700">
            CGPA
          </label>
          <input
            type="number"
            id="cgpa"
            name="cgpa"
            step="0.01"
            min="0"
            max="10"
            value={formData.cgpa}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700">
            Graduation Year
          </label>
          <input
            type="number"
            id="graduationYear"
            name="graduationYear"
            min="2000"
            max="2030"
            value={formData.graduationYear}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>
      </div>
    </div>
  );
}