# Demo of Adobe PDF Embed API issue

## Problem
We have a low-traffic Next.JS site where the Adobe Embed API had been functioning without issue for quite
a long time. This issue was recently discovered, but it's possible that it may have been present and unreported.

The first view of a page with an embedded PDF functions as expected.  However, for subsequent views of any page
with an embedded PDF the PDF does not render.  The embedded PDF will render properly if the page is reloaded.

This is the same or similar behavior as discussed in this unresolved thread on the Adobe forum:
https://community.adobe.com/t5/acrobat-services-api-discussions/problem-pdf-embed-api-dc-core-loaded-twice/td-p/13938274

## Running the demo project locally
- Requirements:
  - Node.js 16.14 or later
- Install dependencies:
  ```
  npm install
  ```
- Start the development server
  ```
  npm run dev
  ```
- The local dev server should now be listening at [http://localhost:3000/PdfView](http://localhost:3000/PdfView).

