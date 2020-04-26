#!/usr/bin/env node

/**
 * Creates entry points for sub modules defined in package.json#entries.
 *
 * Makes it possible to `import { divmod } from @nostd/lib/math/divmod`.
 */

import * as path from "path";
import * as fs from "fs";
import mkdirp from "mkdirp";

let pkgJsonPath = path.join(__dirname, "..", "package.json");
let { entries } = require(pkgJsonPath);

for (let entry of entries) {
  console.log("Creating an entry for submodule – " + entry);
  let pkgJson = createSubModlePkgJson(entry);
  let subModuleDirPath = path.join(__dirname, "..", ...entry.split("/"));
  mkdirp.sync(subModuleDirPath);
  fs.writeFileSync(
    path.join(subModuleDirPath, "package.json"),
    JSON.stringify(pkgJson, null, 2),
    "utf8"
  );
}

function createSubModlePkgJson(submodule: string) {
  return {
    name: "@nostd/lib/" + submodule,
    main: "../../lib/cjs/" + submodule + ".js",
    module: "../../lib/esm/" + submodule + ".js",
    types: "../../lib/cjs/" + submodule + ".d.js",
  };
}
