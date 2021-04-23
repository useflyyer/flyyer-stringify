import { STABLE_JSON_STRINGIFY } from "../src/stringify";

describe("STABLE_JSON_STRINGIFY", () => {
  it("is stable", () => {
    expect(
      STABLE_JSON_STRINGIFY({
        b: {
          99: "number",
          12: "number",
        },
        a: "hello",
      }),
    ).toEqual(`{"a":"hello","b":{"12":"number","99":"number"}}`);
  });
});
