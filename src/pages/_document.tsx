import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import favIcon from '../images/favicon.ico'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Encontre os melhores times ou crie você mesmo, veja as melhores builds, entenda o funcionamento dos elementos do jogo"
          />
          <meta
            name="google-site-verification"
            content="di60hBuq0xcfyJg6O2g9BvhbUXB-GMUrVGvFYt0DQb8"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />
          <meta
            name="keywords"
            content="genshin, impact, companion, help, helper, diluc, venti, xiao, paimon, game, mmorpg, mobile, ps4, switch, genshin impact, gems, free grems"
          />
          <meta name="description" content="" />
          <link rel="icon" href={favIcon} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
