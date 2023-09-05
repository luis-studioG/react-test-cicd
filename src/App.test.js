import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  expect().toBeInTheDocument();
});

test('renders the H1 title', () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/Learning AWS CodeBuild and CodeDeploy/i);
  expect(h1).toBeInTheDocument();
});

// Mock the import.meta.env object
jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    import: {
      meta: {
        env: {
          REACT_BUSINESS_COUNTRY: 'PT', // Set the desired value for testing
        },
      },
    },
  };
});