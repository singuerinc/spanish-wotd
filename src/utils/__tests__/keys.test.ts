import { onSpacePress } from "../keys";

describe("onSpacePress", () => {
  describe("callback", () => {
    it("should call the callback when the space bar is pressed", () => {
      const callback = jest.fn();
      const event = new KeyboardEvent("keydown", {
        code: "Space"
      });

      onSpacePress(callback)(event);

      expect(callback).toBeCalled();
    });

    it("should not call the callback when any key pressed", () => {
      const callback = jest.fn();
      const event = new KeyboardEvent("keydown", {
        code: "noop"
      });

      onSpacePress(callback)(event);

      expect(callback).toBeCalledTimes(0);
    });
  });
});
