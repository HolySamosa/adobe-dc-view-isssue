import React from 'react';
import styles from '../styles/Home.module.css';
import EmbededPdf from '../components/EmbededPdf';

const EXAMPLE_PDF_URL = 'https://prismic-io.s3.amazonaws.com/mycep-content/350ce3d3-fd5d-45fd-94c9-57a6f510f68c_LW+-+The+Journey+of+Acceptance+-+7.2023.pdf';
const PdfView = () => (
    <div className={styles.container}>
        <EmbededPdf url={EXAMPLE_PDF_URL} fileName={'example.pdf'} />
    </div>
);
export default PdfView;
