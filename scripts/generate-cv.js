import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import html_to_pdf from 'html-pdf-node';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
    try {
        // Read the HTML template
        const htmlPath = path.join(__dirname, '..', 'src', 'assets', 'cv-template.html');
        const html = fs.readFileSync(htmlPath, 'utf8');

        const options = {
            format: 'A4',
            margin: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            },
            printBackground: true
        };

        const file = { content: html };

        // Generate PDF
        const pdfBuffer = await html_to_pdf.generatePdf(file, options);
        
        // Save the PDF
        const pdfPath = path.join(__dirname, '..', 'public', 'cv.pdf');
        fs.writeFileSync(pdfPath, pdfBuffer);

        console.log('PDF generated successfully!');
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
}

generatePDF();
