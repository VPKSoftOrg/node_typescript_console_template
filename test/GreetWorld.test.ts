import { greetWorld } from "../src/index";

describe("greetWorld", () => {
    it("should return 'Hello world!'!", () => {
        expect(greetWorld()).toEqual("Hello world!");
    });
});
