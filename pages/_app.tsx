import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          height: 100%;
          width: 100%;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          min-height: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }

        #__next {
          min-height: 100%;
        }
      `}</style>

      {process.env.NODE_ENV && process.env.NODE_ENV !== 'development' && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=6154FGNHYC`}
          strategy="afterInteractive"
        />
      )}
      {process.env.NODE_ENV && process.env.NODE_ENV !== 'development' && (
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '6154FGNHYC');
            `}
        </Script>
      )}

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
