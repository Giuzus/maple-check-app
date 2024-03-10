import { render, screen, within } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CharacterList from "./characterList.component";
import { charactersAtom } from "../../store/character.store";
import { HydrateAtoms } from "../../test/utils";
import userEvent from "@testing-library/user-event";
import { Provider } from "jotai";

const MOCK_CHARACTERS = [{ name: "char 1" }, { name: "char 2" }];

describe("Character list", () => {
  test("should match snapshot", () => {
    //Arrange
    const component = render(
      <Provider>
        <HydrateAtoms initialValues={[[charactersAtom, MOCK_CHARACTERS]]}>
          <CharacterList />
        </HydrateAtoms>
      </Provider>
    );

    //Assert
    expect(component.baseElement).toMatchSnapshot();
  });

  test("should remove characters", async () => {
    //Arrange
    const user = userEvent.setup();
    render(
      <Provider>
        <HydrateAtoms initialValues={[[charactersAtom, MOCK_CHARACTERS]]}>
          <CharacterList />
        </HydrateAtoms>
      </Provider>
    );
    const char1Del = within(
      screen.getByText("char 1").closest("li")!
    ).getByText("X");

    //Act
    await user.click(char1Del);

    //Assert
    expect(screen.queryByText("char 1")).toBeNull();
  });
});
