import fs from "fs";

export function getSampleText(): string {
  const sampleText = fs.readFileSync("../Text/Sample.txt", "utf-8");
  return sampleText;
}

console.log(getSampleText());
