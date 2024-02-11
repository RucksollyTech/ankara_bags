import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Home";
import NavBar from "./Components/NavBar";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import BagDetails from "./BagDetails";
import Cart from "./Cart";


function App() {
    return (
        <div className="App">
            <Router>
				<ScrollToTop />
				<NavBar />
				<Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/details" element={<BagDetails />} />
                    <Route path="/products/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
