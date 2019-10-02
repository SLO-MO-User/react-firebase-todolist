import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import TodoPage from './pages/todopage/todopage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route to='/' component={TodoPage} />
      </Switch>
    </>
  );
}

export default App;
