const fs = require("fs");
const path = require("path");

const top = "node_modules/@ethersproject";
const folders = fs.readdirSync(top);
for (const folder of folders) {
    try {
        const pkgPath = path.join(top, folder, "package.json");
        console.log(`${pkgPath}...`);
        const pkg = JSON.parse(fs.readFileSync(pkgPath));
        const browserModulePath = pkg["browser.esm"];
        if (typeof browserModulePath === "string") {
            pkg.module = browserModulePath;
        } else if (typeof browserModulePath === "object") {
            pkg.browser = browserModulePath;
        }
        console.log({module: pkg.module, browser: pkg.browser});
        fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, "  "));
    } catch(e) {}

}