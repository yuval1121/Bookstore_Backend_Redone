import { test } from "tap";
import { build } from "../../src/app";

test("Server integration tests", async () => {
  test("User registration test", async t => {
    const app = build();
    const res = await app.inject({
      method: "POST",
      url: "/api/users/register",
      payload: {
        name: "greg",
        email: "ar@a.com",
        age: 22,
        password: "12345",
      },
    });

    const parsedResponse = res.json();

    t.equal(res.statusCode, 201);
    t.hasStrict(parsedResponse, {
      name: "greg",
      email: "ar@a.com",
      age: 22,
    });
  });

  test("User signs in test", async t => {
    const app = build();

    const res = await app.inject({
      method: "POST",
      url: "/api/users/login",
      payload: {
        email: "ar@a.com",
        password: "12345",
      },
    });

    const parsedResponse = res.json();

    t.equal(res.statusCode, 200);
    t.ok(parsedResponse);
  });
});
