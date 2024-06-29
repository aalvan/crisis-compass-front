import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./component/login";

it("submits username and password", () => {
  const email = "email";
  const password = "pass";
  const onSubmit = jest.fn();
  render(<Login onSubmit={onSubmit} />);

  userEvent.type(screen.getByLabelText(/email/i), email);

  userEvent.type(screen.getByLabelText(/password/i), password);

  userEvent.click(screen.getByText(/init/i));

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    email,
    password
  });
});