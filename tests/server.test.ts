import { build } from "../src/app";
import { test } from "tap";

test('Requests the "/" route', async t => {
  const app = build();

  const res = await app.inject({
    method: "POST",
    url: "/api/users",
    payload: {
      name: "greg",
      email: "a@a.com",
      age: 22,
      password: "12345",
    },
  });
  t.equal(res.statusCode, 201, "returns a status code of 200");
});
