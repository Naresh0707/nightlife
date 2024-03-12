// pages/_document.js

// import Document, { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/script";

// class MyDocument extends Document {
//   render() {
//     return (
//       <Html>
//         <Head>
//         <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
          
//           <ins
//             class="adsbygoogle"
//             style="display:block"
//             data-ad-client="ca-pub-9910230582193405"
//             data-ad-slot="5928912620"
//             data-ad-format="auto"
//             data-full-width-responsive="true"
//           ></ins>
//           <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
//           <script
//             async
//             src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-your_publisher_id"
//             crossorigin="anonymous"
//           ></script>
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9910230582193405"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}