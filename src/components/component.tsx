import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpecification {
  name: string;
  description: string;
  features: Array<string>;
  pricingModel?: PricingModel;
}

interface PricingModel {
  type: 'freemium' | 'subscription' | 'pay_as_you_go';
  plans?: Array<Plan>;
}

interface Plan {
  name: string;
  price: number;
  featuresIncluded: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<BusinessSpecification>();

  const onSubmit: SubmitHandler<BusinessSpecification> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/business-specification', data);
      reset();
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className={clsx(
            "mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
            errors.name && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
          )}
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          rows={3}
          className={clsx(
            "mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
            errors.description && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features</label>
        <textarea
          id="features"
          {...register('features', { required: 'Features are required' })}
          rows={3}
          className={clsx(
            "mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
            errors.features && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
          )}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={clsx(
          "inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition ease-in-out duration-150",
          loading && "cursor-not-allowed"
        )}
      >
        {loading ? 'Creating...' : 'Create'}
      </button>
      
      {error && (
        <div className="mt-3 text-red-900" role="alert">
          {error}
        </div>
      )}
    </form>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpecification {
  name: string;
  description: string;
  features: Array<string>;
  pricingModel?: PricingModel;
}

interface PricingModel {
  type: 'freemium' | 'subscription' | 'pay_as_you_go';
  plans?: Array<Plan>;
}

interface Plan {
  name: string;
  price: number;
  featuresIncluded: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<BusinessSpecification>();

  const onSubmit: SubmitHandler<BusinessSpecification> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/business-specification', data);
      reset();
    } catch (err) {
      setError('An error occurred while creating the business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className={clsx(
            "mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
            errors.name && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
          )}
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          rows={3}
          className={clsx(
            "mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
            errors.description && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features</label>
        <textarea
          id="features"
          {...register('features', { required: 'Features are required' })}
          rows={3}
          className={clsx(
            "mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
            errors.features && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
          )}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={clsx(
          "inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition ease-in-out duration-150",
          loading && "cursor-not-allowed"
        )}
      >
        {loading ? 'Creating...' : 'Create'}
      </button>
      
      {error && (
        <div className="mt-3 text-red-900" role="alert">
          {error}
        </div>
      )}
    </form>
  );
};

export default CreateBusinessSpecification;