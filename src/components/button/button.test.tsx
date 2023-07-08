// import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button, { ButtonProps } from "./button";
const defaultProps = {
  onClick: jest.fn(),
};
const testProps: ButtonProps = {
  type: "primary",
  size: "lg",
  className: "cc",
};
describe("bb", () => {
  it("aa", () => {
    const wrapper = render(<Button {...defaultProps}>hhhh</Button>);
    const el = wrapper.getByText("hhhh");
    expect(el).toBeInTheDocument();
    // 测试点击事件
    fireEvent.click(el);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("link", () => {
    const wraper = render(
      <Button type="link" href="sdfsdf">
        link
      </Button>
    );
    const el = wraper.getByText("link");
    expect(el).toBeInTheDocument();
    expect(el.tagName).toEqual("A");
    expect(el).toHaveClass("btn btn-link");
  });
  it("should render the correct component based on different props", () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-primary btn-lg cc");
  });
});
