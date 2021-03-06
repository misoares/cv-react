import { SheetsRegistry } from 'jss';
import { createMuiTheme } from '@material-ui/core/styles';
import { createGenerateClassName } from '@material-ui/styles';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#F2F2F2'
    },
    primary: {
      main: '#F2F2F2'
    }
  },
}
)

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

let pageContext;

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  const isBrowser = typeof window !== 'undefined';
  if (!isBrowser) {
    console.log('No browser')
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!pageContext) {
    console.log('No Context')

    pageContext = createPageContext();
  }

  console.log('Return')
  return pageContext;
}