import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should match snapshot", () => {
    //Arrange
    const page = render(<App />);

    //Assert
    expect(page.baseElement).toMatchSnapshot();
  });
});
