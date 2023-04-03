import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { Provider } from "react-redux";
import { store } from './store/index';
import { useSelector } from 'react-redux';


// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);
  // const authentication = useSelector((state) => state.authentication);

  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
      </Provider>
    </StyledEngineProvider>
  );
};

export default App;
