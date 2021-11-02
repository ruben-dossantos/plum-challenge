import GlobalStyle from './helpers/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './helpers/theme';
import LabelsContext from './context/labels';
import HeaderContext from './context/header';
import ContentContext from './context/content';
import TopNavigation from './layout/TopNavigation';
import Header from './layout/Header';
import Content from './layout/Content';
import initialState from './helpers/initialState';

/**
 * The way we are defining the context would allows us to pass a setter as the second parameter
 * This would allowed us to update the context state inside our components
 */

function App() {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <LabelsContext.Provider value={[initialState.labels]}>
                    <TopNavigation />
                    <HeaderContext.Provider value={[initialState.searchHeader]}>
                        <Header />
                    </HeaderContext.Provider>
                    <ContentContext.Provider value={[initialState.content]}>
                        <Content />
                    </ContentContext.Provider>
                </LabelsContext.Provider>
            </ThemeProvider>
        </>
    );
}

export default App;
