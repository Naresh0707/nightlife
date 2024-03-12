import { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9910230582193405"
     crossOrigin="anonymous"></script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;