import React, { useEffect, useLayoutEffect, useState } from 'react';
import Script from 'next/script';

const ADOBE_API_CLIENT_ID= '8c0cd670273d451cbc9b351b11d22318';

const EmbedPdf = ({ url, fileName }) => {
    const [adobeDCView, setAdobeDCView] = useState(null);

    const onAdobeSdkReady = () => {
        console.log('in adobe_dc_view_sdk.ready callback');
        const view = new window.AdobeDC.View({clientId: ADOBE_API_CLIENT_ID, divId: 'adobe-dc-view'});
        setAdobeDCView(view);
        view.previewFile({
            content: {location: {url}},
            metaData: {fileName},
        }, {
            embedMode: 'IN_LINE',
            showDownloadPDF: true,
            showPrintPDF: true,
        });
    };

    useEffect(() => {
        console.log('addEventListener()');
        document.addEventListener('adobe_dc_view_sdk.ready', onAdobeSdkReady);
        return () => {
            console.log('removeEventListener()')
            document.removeEventListener('adobe_dc_view_sdk.ready', onAdobeSdkReady);
        };
    }, []);

    return (
        <>
            <Script src="https://documentservices.adobe.com/view-sdk/viewer.js" />
            <div id="adobe-dc-view">
            </div>
        </>
    );
};
export default EmbedPdf;
