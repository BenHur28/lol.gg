import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import ChampionsPage from "@/app/champions/page";

describe("Home", () => {
	it("renders Home", () => {
		render(<Home />);

		const div = screen.getByTestId("main-div");

		expect(div).toBeInTheDocument();
	});
});

describe("Champions Page", () => {
	it("renders the champion page", () => {
		render(<ChampionsPage />);

		const div = screen.getByTestId("championspage-div");

		expect(div).toBeInTheDocument();
	});
});
