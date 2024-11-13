import React from 'react';
import { useFormContext } from '../FormContext';

const countries = ['USA', 'Canada', 'UK', 'Germany', 'Australia', 'Netherlands'];
const terms = ['Fall 2024', 'Spring 2025', 'Fall 2025'];
const majors = [
  'Computer Science',
  'Data Science',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Chemical Engineering',
];

export default function Preferences() {
  const { formData, setFormData } = useFormContext();

  const handleCountryChange = (country: string) => {
    const updatedCountries = formData.preferredCountries.includes(country)
      ? formData.preferredCountries.filter((c) => c !== country)
      : [...formData.preferredCountries, country];
    setFormData({ ...formData, preferredCountries: updatedCountries });
  };

  const handleTermChange = (term: string) => {
    const updatedTerms = formData.preferredTerms.includes(term)
      ? formData.preferredTerms.filter((t) => t !== term)
      : [...formData.preferredTerms, term];
    setFormData({ ...formData, preferredTerms: updatedTerms });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Countries
        </label>
        <div className="grid grid-cols-3 gap-3">
          {countries.map((country) => (
            <button
              key={country}
              type="button"
              onClick={() => handleCountryChange(country)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                formData.preferredCountries.includes(country)
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {country}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="maxBudget" className="block text-sm font-medium text-gray-700">
          Maximum Budget (USD/Year)
        </label>
        <input
          type="number"
          id="maxBudget"
          name="maxBudget"
          value={formData.maxBudget}
          onChange={(e) => setFormData({ ...formData, maxBudget: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Terms
        </label>
        <div className="grid grid-cols-3 gap-3">
          {terms.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => handleTermChange(term)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                formData.preferredTerms.includes(term)
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="intendedMajor" className="block text-sm font-medium text-gray-700">
          Intended Major
        </label>
        <select
          id="intendedMajor"
          name="intendedMajor"
          value={formData.intendedMajor}
          onChange={(e) => setFormData({ ...formData, intendedMajor: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        >
          <option value="">Select a major</option>
          {majors.map((major) => (
            <option key={major} value={major}>
              {major}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}