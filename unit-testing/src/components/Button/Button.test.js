import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import logsMessage from "../../utils/logsMessage";
jest.mock("../../utils/logsMessage");

test("Should Be Clicked", async () => {
  render(
    <Button
      content="test"
      handleClick={() => logsMessage("Testing Button Clicks")}
    />
  );
  const btn = screen.getByText("test");
  await userEvent.click(btn);
  expect(logsMessage).toHaveBeenCalled();
});
