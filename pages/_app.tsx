import React from 'react';
import { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux'
import { store } from '../redux/store';
import theme from '../theme';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App(props) {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);

    return (
        <Container>
            <Provider store={store}>
                <Head>
                    <title>Miguel Soares - Software Engineer</title>
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        </Container>
    );
}

export default App;