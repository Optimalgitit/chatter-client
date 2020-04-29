import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
  waitForDomChange,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

afterEach(cleanup);

test("Logging In", async () => {
  const { getByPlaceholderText, getAllByTestId } = render(<App />);

  const nameInput = getByPlaceholderText("Name");
  const roomInput = getByPlaceholderText("Room");
  const submitButton = getAllByTestId("button-submit")[0];
  fireEvent.change(nameInput, { target: { value: "TestAccount" } });
  fireEvent.change(roomInput, { target: { value: "TestingRoom" } });
  fireEvent.click(submitButton);
});

test("Chatting", async () => {
  const { getByPlaceholderText, getAllByTestId } = render(<App />);

  const messageBox = getByPlaceholderText("Type a message...");
  const submitButton = getAllByTestId("send-message")[0];
  fireEvent.change(messageBox, { target: { value: "Test Message" } });
  fireEvent.click(submitButton);
});
