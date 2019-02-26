import React from "react";
import { render } from "react-testing-library";

import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  it("should render without crashing", () => {
    render(<MyComponent />);
  });

  it("should match the snapshot", () => {
    const { container } = render(<MyComponent />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
