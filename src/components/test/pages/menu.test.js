import { render, screen } from "@testing-library/react";
import Instruments from '../../UI/Instruments';
import MainCarousel from '../../Styles/MainCarousel';
import Footer from "../../Styles/Footer";
import MenuContext from "../../Contexts/MenuContext";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

// Mock de toda la biblioteca "react-router-dom"
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: jest.fn(),
}));


describe("Menu", () => {
	let dispatch;
	let container;

	beforeEach(async () => {
		// jest.fn() crea un mock
		window.fetch = jest.fn();
		dispatch = jest.fn();

		window.fetch.mockResolvedValueOnce({
			json: async () => [
				{
					id: 1,
					name: "Pizza",
					price: 10,
					description: "Italian Pizza",
				},
			]
		});

		const rendered = await act(async () =>
			render(
				<MenuContext.Provider value={{ dispatch, state: {} }}>
					 <MainCarousel />
                     <Meals />
                    <Footer /> 
				</MenuContext.Provider>
			)
		);

		container = rendered.container;
	});

	it("should render", async () => {
		const menuContainer = container.querySelector("#menu");
		expect(menuContainer).toBeInTheDocument();
	});

    it("should display meals", async () => {
        const name = await screen.findByText("Pizza");
        const description = await screen.findByText("Italian pizza");
    
        expect(name).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    });

    it("should add meals to cart", async () => {
        const button = await screen.findByRole("button");
        expect(button).toBeInTheDocument();
    
        const input = container.querySelector('input[type="number"]');
        expect(input).toBeInTheDocument();
    
        userEvent.click(button);
    
        expect(dispatch).not.toHaveBeenCalled();
    
        input.value = "10";
    
        userEvent.click(button);
    
        expect(dispatch).toHaveBeenCalled();
    });
});





