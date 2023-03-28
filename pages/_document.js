import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='zxx'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap'
            rel='stylesheet'
          />
          <link rel='icon' type='image/png' href='/favicon.png'></link>

          {/* <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-6N4MN32WCB'
          ></script>
          <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-6N4MN32WCB');
          </script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
