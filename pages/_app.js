import SEO from 'components/SEO'
import Header from 'components/Header'
import Footer from 'components/Footer'
import 'styles/globals.css'

export default function FullGlass({ Component, pageProps }) {
    return (
        <>
            <SEO />

            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}
