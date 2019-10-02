import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header';
import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';

import { selectIsNightMode } from './redux/night-mode/night-mode.selectors';

const TodoPage = lazy(() => import('./pages/todopage/todopage'));

function App({ isNightMode }) {
  return (
    <div
      className='container'
      style={
        isNightMode
          ? { height: '100vh', background: 'black' }
          : { height: '100vh' }
      }
    >
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route to='/' component={TodoPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isNightMode: selectIsNightMode,
});

export default connect(mapStateToProps)(App);
