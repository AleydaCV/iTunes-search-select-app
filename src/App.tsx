import { FC } from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './routes/routes';
const App: FC = () => {
  return (
    <Router>
      <RoutesComponent /> 
    </Router>
  );
};

export default App;
