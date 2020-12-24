import Footer from './Footer';
import MainContent from './MainContent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Shop from './Shop';
import CurrDate from './Date';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/names' component={MainContent} />
                    <Route path='/shop' component={Shop} />
                    <Route path='/curr-date' render={(props) => (<CurrDate {...props} date={Date()} />)} />
                </Switch>
                <Footer />
            </div>
        </Router>

    )
}

export default App;