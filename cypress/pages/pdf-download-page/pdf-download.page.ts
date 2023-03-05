export default class PdfDownloadPage {
    public clickDownloadForFile(file: string): void {
        cy
            .get(`a[href="./lorem-${file}.pdf"]`)
            .click()
            .wait(1500);
    }
}