import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,Route,Link,NavLink,Switch, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Join from './Pages/Joinus';
import Cartoon from './Pages/life';
import Header from './Pages/life';
import App from './App';


const routing = (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<Home/>}>Home</Route>
                <Route path='/About' element={<About/>}>About</Route>
                <Route path='/Joinus' element={<Join/>}>Join Us</Route>
            </Routes>
        </div>
    </Router>
)

ReactDOM.render(<App />,document.getElementById("root"));
// ReactDOM.render(<Header favcol="Yellow" />,document.getElementById("root"));