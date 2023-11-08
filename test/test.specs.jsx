import React from "react";
import { render, screen } from "@testing-library/react";
import { Herobase } from "app/[locale]/components/Hero/Herobase";
import "@testing-library/jest-dom";

describe("Herobase", () => {
  it("renders a heading element with the expected text", () => {
    render(<Herobase t={() => {}} />); // Mock the t function

    const heading = screen.getByText("Hero Title"); // Replace with the actual text you expect

    expect(heading).toBeInTheDocument();
  });
});

// import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
// import Home from "../page";

// describe("MobileHeader", () => {
//   it("switches language when select is changed", () => {
//     render(<Home params={"fr"} />);

//     const select = screen.getByTestId("select-language"); // replace 'language-select' with your actual data-testid

//     fireEvent.change(select, { target: { value: "en" } });

//   });
// });
