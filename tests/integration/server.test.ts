import { build } from "../../src/app";
import { test } from "tap";

test("Server integration tests", async () => {
  test("User registration test", async t => {
    const app = build();

    const res = await app.inject({
      method: "POST",
      url: "/api/users",
      payload: {
        name: "greg",
        email: "ar@a.com",
        age: 22,
        password: "12345",
      },
    });
    const parsedResponse = JSON.parse(res.payload);

    t.equal(res.statusCode, 201, "returns a status code of 201");
    t.hasStrict(parsedResponse, {
      name: "greg",
      email: "ar@a.com",
      age: 22,
    });
  });
});
