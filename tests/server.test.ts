import { build } from "../src/app";
import { test } from "tap";

test('Requests the "/" route', async t => {
  const app = build();

  const res = await app.inject({
    method: "GET",
    url: "/",
  });

  t.equal(res.statusCode, 200, "returns a status code of 200");
});
