import { navigateToPDFFilesPage } from "cypress/commands/navigate.commands";
import PdfDownloadPage from "cypress/pages/pdf-download-page/pdf-download.page";

describe('Download and compare different PDF files', () => {
    const pdfDownloadPage: PdfDownloadPage = new PdfDownloadPage();

    beforeEach(() => {
        navigateToPDFFilesPage();
    });

    for (let pdfFileForTest of ['pass', 'fail']) {
        it(`test to ${pdfFileForTest} pdf files comparison`, () => {
            const shouldCompare = pdfFileForTest === 'pass' ? 'contain' : 'not.contain';

            pdfDownloadPage.clickDownloadForFile(pdfFileForTest);
            cy.task('readPdfFile', `cypress\\downloads\\lorem-${pdfFileForTest}.pdf`)
                .then((passPdfFileContent) => {
                    cy.task('readPdfFile', 'cypress\\fixtures\\lorem-compare.pdf')
                        .should(shouldCompare, passPdfFileContent);
                });
        });
    }
});