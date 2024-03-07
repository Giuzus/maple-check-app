import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import Home from "./home.page";
import { MemoryRouter } from "react-router-dom";

describe("Home page", () => {
  test("should match snapshot", () => {
    //Arrange
    const page = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    //Assert
    expect(page.baseElement).toMatchSnapshot();
  });
});
