import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import ChampionsPage from "@/app/champions/page";
import ChampionPage from "@/app/champions/[championName]/page";

jest.mock("next/navigation", () => ({
	useRouter() {
		return {
			prefetch: () => null,
		};
	},
}));

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

describe("Single Champion info page", () => {
	it("renders single champion page", () => {
		render(
			<ChampionPage
				params={{
					championName: "",
				}}
			/>
		);

		const div = screen.getByTestId("single-champ-page");

		expect(div).toBeInTheDocument();
	});
});
