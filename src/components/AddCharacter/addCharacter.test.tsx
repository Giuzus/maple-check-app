import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import AddCharacter from "./addCharacter.component";
import userEvent from "@testing-library/user-event";

describe("Add character", () => {
  test("should match snapshot", () => {
    //Arrange
    const component = render(<AddCharacter />);

    //Assert
    expect(component.baseElement).toMatchSnapshot();
  });

  // test("should add characters", async () => {
  //   //Arrange
  //   const user = userEvent.setup();
  //   render(<AddCharacter />);

  //   //Act
  //   await user.type(screen.getByRole("textbox"), "mock_character");
  //   await user.click(screen.getByText("Add"));

  //   await waitFor(() =>
  //     expect(screen.getByText("mock_character")).toBeTruthy()
  //   );

  //   //Assert
  //   expect(JSON.parse(localStorage.getItem("characters")!)).toEqual([
  //     { name: "mock_character" },
  //   ]);
  // });

  test("should do nothing if input is empty", async () => {
    //Arrange
    const user = userEvent.setup();
    render(<AddCharacter />);

    //Act
    await user.click(screen.getByText("Add"));

    //Assert
    expect(localStorage.getItem("characters")).toBe(null);
  });
});
