import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../components/getPageContext';

type MyContext = any
const Ctx = React.createContext<MyContext>(getPageContext())

class MyApp extends App {
    static contextType = Ctx
    context!: React.ContextType<typeof Ctx>

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Head>
                    <title>My page</title>
                </Head>
                {/* Wrap every page in Jss and Theme providers */}
                <JssProvider
                    registry={this.context.sheetsRegistry}
                    generateClassName={this.context.generateClassName}
                >
                    <MuiThemeProvider
                        theme={this.context.theme}
                    >
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        {/* Pass context to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
                        <Component context={this.context} {...pageProps} />
                    </MuiThemeProvider>
                </JssProvider>
            </Container>
        );
    }
}

export default MyApp;