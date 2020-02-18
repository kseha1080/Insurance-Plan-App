import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistedStore } from './redux/store';

import { routes } from './routes';

import { AppContainer } from './views/AppContainer';
import { ErrorBoundaries } from './components/molecules/ErrorBoundaries';
import { LoadComponent } from './components/atoms/LoadComponent';

const App = () => {
  const renderRoutes = routes.map((route) => {
    return (
      <Route
        key={route._id}
        path={route.path}
        component={route.component}
        exact={route.exactPath}
      />
    );
  });

  return (
    <StoreProvider store={store}>
      <PersistGate loading={<LoadComponent />} persistor={persistedStore}>
        <ErrorBoundaries>
          <AppContainer>
            <Router>
              <Switch>{renderRoutes}</Switch>
            </Router>
          </AppContainer>
        </ErrorBoundaries>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
