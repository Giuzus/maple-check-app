import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CharacterInfo from "./characterInfo.component";

describe("Character info", () => {
  test("should match snapshot", () => {
    //Arrange
    const page = render(<CharacterInfo character={{ name: "test" }} />);

    //Assert
    expect(page.baseElement).toMatchSnapshot();
  });
});
