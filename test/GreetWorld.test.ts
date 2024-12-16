import { greetWorld } from "../src/functions";

describe("greetWorld", () => {
    it("should return 'Hello world!'!", () => {
        expect(greetWorld()).toEqual("Hello world!");
    });
});
