const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

export const readPdfFile = (pathPdf: string) => {
    return new Promise((res, rej) => {
        const pathToPdf = path.resolve(pathPdf);
        let dataBuffer = fs.readFileSync(pathToPdf);
        pdf(dataBuffer)
            .then(({ text }) => {
                res(text);
            })
            .catch((err) => rej(err));
    });
}