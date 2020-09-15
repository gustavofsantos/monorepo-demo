import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("index", () => {
  test("should render the hello message", () => {
    const { getByText } = render(<App />);
    expect(getByText(/hello/i)).toBeInTheDocument();
  });
});
