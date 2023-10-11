import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <main>
                <p className={styles.description}>
                    Open the link below. <br/>
                    Return to this page and open the link again. <br/>
                    The PDF does not render. <br/>
                    Reload and the PDF will render.
                </p>
                <p className={styles.description}>
                    <Link href="/PdfView">View PDF</Link>
                </p>

            </main>

            <style jsx>{`
              main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
            `}</style>

            <style jsx global>{`
              html,
              body {
                padding: 0;
                margin: 0;
                font-family: -apple-system,
                BlinkMacSystemFont,
                Segoe UI,
                Roboto,
                Oxygen,
                Ubuntu,
                Cantarell,
                Fira Sans,
                Droid Sans,
                Helvetica Neue,
                sans-serif;
              }

              * {
                box-sizing: border-box;
              }
            `}</style>
        </div>
    );
}
