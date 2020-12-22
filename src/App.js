import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoute from './layouts/AppRoute';
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
import Test from './views/test/TestView/Test';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute path='/test' component={Test} layout={DashboardLayout} />
        <AppRoute path='/test-2' component={Test} layout={MainLayout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
