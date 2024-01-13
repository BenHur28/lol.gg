import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
	it("renders Home", () => {
		render(<Home />);

		const div = screen.getByTestId("main-div");

		expect(div).toBeInTheDocument();
	});
});
