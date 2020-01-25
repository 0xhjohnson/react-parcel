/** @jsx jsx */
import { ThemeProvider, jsx, Flex } from 'theme-ui';
import { Router, Link } from '@reach/router';
import theme from './theme';
import Home from './Home';
import Other from './Other';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div
          sx={{
            p: 3,
            width: '1/4',
          }}
        >
          <Flex as="nav">
            <Link sx={{ variant: 'styles.navLink' }} to="/">
              Home
            </Link>
            <Link sx={{ variant: 'styles.navLink' }} to="other">
              Other
            </Link>
          </Flex>
        </div>
        <Router>
          <Home path="/" />
          <Other path="other" />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
