import { render, screen, } from "@testing-library/react";
import { test, expect, afterAll } from "@jest/globals";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the H1 title", () => {
  render(<App />);
  const h1 = screen.getByText(/Learning AWS CodeBuild and CodeDeploy/i);
  expect(h1).toBeInTheDocument();
});

// // Mock the import.meta.env object
// jest.mock('react', () => {
//   return {
//     ...jest.requireActual('react'),
//     import: {
//       meta: {
//         env: {
//           REACT_BUSINESS_COUNTRY: 'PT', // Set the desired value for testing
//         },
//       },
//     },
//   };
// });

// Add an exit condition using afterAll
afterAll(() => {
  // Your exit condition or cleanup code here
  console.log("All tests have completed. This code will run after all tests.");
  // For example, you can close database connections or clean up resources.
});