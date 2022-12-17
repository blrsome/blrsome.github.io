// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/api/r1.ts";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/third.tsx";
import * as $$0 from "./islands/Main.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/api/r1.ts": $2,
    "./routes/index.tsx": $3,
    "./routes/third.tsx": $4,
  },
  islands: {
    "./islands/Main.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
