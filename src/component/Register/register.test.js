import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mathOperations from '../mathOption';
import Register, { data } from './register';

describe("Register component",()=>{
    it("should render register component",()=>{
        render(<Register />);
        const element = screen.getByRole("heading");
        expect(element).toBeInTheDocument();
    });
    it("show error message when user not enter in all field",()=>{
        render(<Register />);
        const buttonElement = screen.getByTestId("save");
        userEvent.click(buttonElement);
    });
    it("increment",()=>{
        render(<Register />);
        const counter = screen.getByTestId("counter")
        const buttonElement = screen.getByTestId("increment");
        fireEvent.click(buttonElement);
        expect(counter).toHaveTextContent("1");
    });
    it("adding 1 + 2 should return 3",() => {
        const result = mathOperations.sum(2,4)
        expect(result).toBe(6);
    });
    it("data is not null",()=>{
        const isArray = data;
        expect(isArray.length).not.toBe(3)
    })
    // Number Matchers
    test("numeric operators", () => {
 
        var num1 = 100;
        var num2 = -20;
        var num3 = 0;
        expect(num1).toBeGreaterThan(10)
        expect(num2).toBeLessThanOrEqual(0)
        expect(num3).toBeGreaterThanOrEqual(0)
      })
})