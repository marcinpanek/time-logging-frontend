import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TimeLoggingPage from './pages/TimeLoggingPage';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/time-logging" component={TimeLoggingPage} />
                <Route path="/" render={() => <div>404</div>} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
