import {fireEvent, render, screen} from "@testing-library/react";
import Button from "ct.frontend/components/helpers/Button/Button";

describe("Button.test.ts", () => {
    it("should ensure a button is rendered", () => {
        render(<Button>Button</Button>);

        const buttonElement = screen.getByRole('button', { name: /Button/i });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.tagName).toBe('BUTTON');
    });

    it("should ensure a link is rendered", () => {
        render(<Button href="https://uk.renaissance.com/">Link</Button>);

        const linkElement = screen.getByRole('link', { name: /Link/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', 'https://uk.renaissance.com/');
    });

    it("should handle click events properly", () => {
        const clickHandler = jest.fn();
        render(<Button onClick={clickHandler}>Click</Button>);

        const buttonElement = screen.getByRole('button', { name: "Click" });
        fireEvent.click(buttonElement);
        expect(clickHandler).toHaveBeenCalledTimes(1);
    });
});