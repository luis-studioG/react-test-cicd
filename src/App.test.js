
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders the title with the business country", () => {
    process.env.REACT_APP_BUSINESS_COUNTRY = "PT";
    render(<App />);
    const h1 = screen.getByText(/Learning AWS CodeBuild and CodeDeploy - PT/i);
    expect(h1).toBeInTheDocument();
  });

  it("renders the 'Learn React' link", () => {
    render(<App />);
    const link = screen.getByText(/Learn React/i);
    expect(link).toBeInTheDocument();
  });
});

afterAll(() => {
  // Your exit condition or cleanup code here
  console.log("All tests have completed. This code will run after all tests.");
  // For example, you can close database connections or clean up resources.
});
