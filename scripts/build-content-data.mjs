import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const locales = ["ua", "en", "bg", "ru"];

const content = Object.fromEntries(
  locales.map((locale) => [
    locale,
    readFileSync(resolve(root, "public", "content", `${locale}.md`), "utf8"),
  ]),
);

const output = `export const INSURANCE_CONTENT = ${JSON.stringify(content, null, 2)};\n`;
writeFileSync(resolve(root, "public", "assets", "content-data.js"), output);
