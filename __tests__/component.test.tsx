import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles user input and updates state correctly', async () => {
    const { getByPlaceholderText, getByRole } = render(<CoreFunctionalityComponent />);

    fireEvent.change(getByPlaceholderText(/enter value here/i), { target: { value: 'testValue' } });
    fireEvent.click(getByRole('button', { name: /submit/i }));

    await waitFor(() => expect(screen.getByText(/submitted successfully/i)).toBeInTheDocument());
  });

  test('displays error message when input is invalid', async () => {
    const { getByPlaceholderText, getByRole } = render(<CoreFunctionalityComponent />);

    fireEvent.change(getByPlaceholderText(/enter value here/i), { target: { value: '' } });
    fireEvent.click(getByRole('button', { name: /submit/i }));

    await waitFor(() => expect(screen.getByText(/please enter a valid input/i)).toBeInTheDocument());
  });

  test('displays loading state while fetching data from external service', async () => {
    const useExternalService = jest.fn().mockReturnValueOnce({ isLoading: true, data: null });
    (useExternalService as any)();

    render(<CoreFunctionalityComponent />);

    await waitFor(() => expect(screen.getByText(/loading.../i)).toBeInTheDocument());
  });

  test('displays error message when external service fails', async () => {
    const useExternalService = jest.fn().mockReturnValueOnce({ isLoading: false, isError: true });
    (useExternalService as any)();

    render(<CoreFunctionalityComponent />);

    await waitFor(() => expect(screen.getByText(/an error occurred/i)).toBeInTheDocument());
  });

  test('component is accessible', async () => {
    const { getByRole } = render(<CoreFunctioninalityComponent />);
    
    fireEvent.click(getByRole('button', { name: /submit/i }));
    expect(document.body).toHaveFocus(); // Ensure focus returns to body after interaction
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles user input and updates state correctly', async () => {
    const { getByPlaceholderText, getByRole } = render(<CoreFunctionalityComponent />);

    fireEvent.change(getByPlaceholderText(/enter value here/i), { target: { value: 'testValue' } });
    fireEvent.click(getByRole('button', { name: /submit/i }));

    await waitFor(() => expect(screen.getByText(/submitted successfully/i)).toBeInTheDocument());
  });

  test('displays error message when input is invalid', async () => {
    const { getByPlaceholderText, getByRole } = render(<CoreFunctionalityComponent />);

    fireEvent.change(getByPlaceholderText(/enter value here/i), { target: { value: '' } });
    fireEvent.click(getByRole('button', { name: /submit/i }));

    await waitFor(() => expect(screen.getByText(/please enter a valid input/i)).toBeInTheDocument());
  });

  test('displays loading state while fetching data from external service', async () => {
    const useExternalService = jest.fn().mockReturnValueOnce({ isLoading: true, data: null });
    (useExternalService as any)();

    render(<CoreFunctionalityComponent />);

    await waitFor(() => expect(screen.getByText(/loading.../i)).toBeInTheDocument());
  });

  test('displays error message when external service fails', async () => {
    const useExternalService = jest.fn().mockReturnValueOnce({ isLoading: false, isError: true });
    (useExternalService as any)();

    render(<CoreFunctionalityComponent />);

    await waitFor(() => expect(screen.getByText(/an error occurred/i)).toBeInTheDocument());
  });

  test('component is accessible', async () => {
    const { getByRole } = render(<CoreFunctioninalityComponent />);
    
    fireEvent.click(getByRole('button', { name: /submit/i }));
    expect(document.body).toHaveFocus(); // Ensure focus returns to body after interaction
  });
});