import React, {useState, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/app.scss';
//components
import Navbar from './components/Navbar';
import SideBar from './components/Sidebar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';


const App = () => {
    const [sidebar, setSidebar] = useState(false)
    return(
        <Router>
            
                <ScrollToTop />
                <div className="app" >
                    <SideBar sidebar={sidebar} setSidebar={setSidebar}/>
                    <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
                    <Switch>
                        <Route path='/' exact>
                            <Home />
                        </Route>
                        <Route path='/about'>
                            <About />
                        </Route>   
                        <Route path='/contact'>
                            <Contact />
                        </Route>
                        <Route path='/products'>
                            <Products />
                        </Route>
                    </Switch>
                    <Footer year='2021'/>
                </div>
        </Router>
    )
}

export default App;