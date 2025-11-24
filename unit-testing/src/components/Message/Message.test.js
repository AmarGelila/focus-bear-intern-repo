import { screen, render } from "@testing-library/react";
import Message from "./Message";

test("Message Component Should Render Correctly", () => {
  render(<Message />);
  const message = screen.getByText("Focus Bear");
  expect(message).toBeInTheDocument();
});
