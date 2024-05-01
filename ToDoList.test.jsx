import React from "react";
import { render, screen } from "@testing-library/react"
import ToDoList from "./ToDoList"

it("renders without crashing", function () {
    render(<ToDoList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<ToDoList />)
    expect(asFragment()).toMatchSnapshot();
});

it("should add new chore", function () {
   const {queryByText} = render(<ToDoList />)
   expect(queryByText('Chore name: Make the bed')).not.toBeInTheDocument();
});