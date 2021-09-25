const fs = require("fs"); // or import fs from "fs"; if you're working on modern JS

const timingFile = `.timing`;

if (fs.existsSync(timingFile)) {
    const end = Date.now();
    const start = fs.readFileSync(timingFile);
    fs.unlinkSync(timingFile);
    console.log(`Run time: ${(end - start) / 1000}s`);
} else {
    fs.writeFileSync(timingFile, `${Date.now()}`, `utf8`);
}