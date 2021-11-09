import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props to the state", () => {
    const component = create(<ProfileStatus status="привет" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("привет");
  });
  test("checking span after mounting", () => {
    const component = create(<ProfileStatus status="привет" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });
  test("checking input after mounting", () => {
    const component = create(<ProfileStatus status="привет" />);
    const root = component.root;
    expect(() => {
      const input = root.findByType("input");
    }).toThrow();
  });
  test("checking span status after mounting", () => {
    const component = create(<ProfileStatus status="привет" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("привет");
  });
  test("after editMode input instead of span", () => {
    const component = create(<ProfileStatus status="привет" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onClick()
    let input = root.findByType("input");
    expect(input).not.toBeNull();
    expect(input.props.value).toBe('привет');
  });
  test("callBack should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="привет" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.unChangeMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
  
});
