import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/TestTypes';

interface WriteTestForm {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<WriteTestForm>();
  const [createTestMutation] = useMutation(CREATE_TEST, {
    onCompleted: (data) => {
      if (data.createTest) {
        // Update the tests list
        void GET_TESTS.refetch();
        reset();
      }
    },
    onError: (error) => setError(error.message),
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      await createTestMutation({
        variables: { input: data },
      });
    } catch (err) {
      setError('Failed to create test. Please try again later.');
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Write a New Test</h2>
      <form onSubmit={onSubmit} aria-label="write-test-form" role="form">
        <input
          type="text"
          placeholder="Title"
          {...register('title', { required: true })}
          className="block w-full p-3 mb-4 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          aria-label="test-title-input"
        />
        <textarea
          rows={10}
          placeholder="Description"
          {...register('description', { required: true })}
          className="block w-full p-3 mb-4 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          aria-label="test-description-input"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 mt-4 text-white bg-blue-600 rounded-md ${
            loading ? 'cursor-not-allowed opacity-70' : ''
          }`}
          aria-label="create-test-button"
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/TestTypes';

interface WriteTestForm {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<WriteTestForm>();
  const [createTestMutation] = useMutation(CREATE_TEST, {
    onCompleted: (data) => {
      if (data.createTest) {
        // Update the tests list
        void GET_TESTS.refetch();
        reset();
      }
    },
    onError: (error) => setError(error.message),
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      await createTestMutation({
        variables: { input: data },
      });
    } catch (err) {
      setError('Failed to create test. Please try again later.');
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Write a New Test</h2>
      <form onSubmit={onSubmit} aria-label="write-test-form" role="form">
        <input
          type="text"
          placeholder="Title"
          {...register('title', { required: true })}
          className="block w-full p-3 mb-4 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          aria-label="test-title-input"
        />
        <textarea
          rows={10}
          placeholder="Description"
          {...register('description', { required: true })}
          className="block w-full p-3 mb-4 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          aria-label="test-description-input"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 mt-4 text-white bg-blue-600 rounded-md ${
            loading ? 'cursor-not-allowed opacity-70' : ''
          }`}
          aria-label="create-test-button"
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;