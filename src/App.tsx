import { Component } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { HomePage } from './pages/HomePage';
import { CutPage } from './pages/CutPage';

/**
 * Main App Component with Routing
 * Uses HashRouter for GitHub Pages compatibility
 */
class App extends Component {
  render() {
    return (
      <Provider theme={defaultTheme} colorScheme="dark">
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cut" element={<CutPage />} />
            {/* Add more routes here as tools are developed */}
          </Routes>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;

