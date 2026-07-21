import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const locales = ["ua", "en", "bg", "ru"];
const contentDir = resolve(root, "public", "content");
const contentBundle = resolve(root, "public", "assets", "content-data.js");
const sourceMd = resolve(root, "public", "source", "insurance-knowledge-base-ua.md");
const sourcePdf = resolve(root, "public", "source", "medical-insurance-infographic.pdf");
const preview = resolve(root, "public", "assets", "coverage-overview.png");

const factTokens = [
  "150 €",
  "2 600 €",
  "11 000 €",
  "231 € + 231 €",
  "205 €",
  "770 €",
  "256 €",
  "15",
  "500 €",
  "25,57 €",
  "512 €",
  "461 €",
  "2 500 €",
  "103 €",
  "0886 68 02 82",
  "ma.georgieva@mussalains.com",
  "health@mussalains.com",
  "app.mussalains.com",
  "0700 111 50",
  "+359 8850 111 50",
];

const requiredAssets = [sourceMd, sourcePdf, preview, contentBundle];
const failures = [];

for (const asset of requiredAssets) {
  if (!existsSync(asset)) {
    failures.push(`Missing required asset: ${asset}`);
  }
}

const source = readFileSync(sourceMd, "utf8");
const ua = readFileSync(resolve(contentDir, "ua.md"), "utf8");
if (source !== ua) {
  failures.push("UA content is not an exact copy of the supplied source Markdown.");
}

const uaHeadingCount = (ua.match(/^##\s+/gm) || []).length;
const bundleText = readFileSync(contentBundle, "utf8");

for (const locale of locales) {
  const file = resolve(contentDir, `${locale}.md`);
  if (!existsSync(file)) {
    failures.push(`Missing locale content: ${locale}`);
    continue;
  }

  const content = readFileSync(file, "utf8");
  const headingCount = (content.match(/^##\s+/gm) || []).length;
  const missingFacts = factTokens.filter((token) => !content.includes(token));
  const todoMarkers = content.match(/\b(TODO|TBD|FIXME)\b/gi) || [];

  if (headingCount !== uaHeadingCount) {
    failures.push(`${locale}: expected ${uaHeadingCount} level-2 sections, found ${headingCount}.`);
  }
  if (missingFacts.length) {
    failures.push(`${locale}: missing fact tokens: ${missingFacts.join(", ")}`);
  }
  if (todoMarkers.length) {
    failures.push(`${locale}: unresolved markers found: ${[...new Set(todoMarkers)].join(", ")}`);
  }
  if (!bundleText.includes(JSON.stringify(content).slice(1, 120))) {
    failures.push(`${locale}: generated content bundle does not match current Markdown content.`);
  }

  console.log(
    `${locale.toUpperCase()}: ${headingCount} sections, ${factTokens.length - missingFacts.length}/${factTokens.length} fact tokens`,
  );
}

if (failures.length) {
  console.error("\nVerification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("\nVerification passed: source files, locale structure, and critical facts are present.");
