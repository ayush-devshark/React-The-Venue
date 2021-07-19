import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location/index.js';
import { Element } from 'react-scroll';
import { isElement } from 'react-dom/cjs/react-dom-test-utils.development';

function App() {
    return (
        <div className='app'>
            <Header />

            <Element name='featured'>
                <Featured />
            </Element>

            <Element name='venueinfo'>
                <VenueInfo />
            </Element>

            <Element name='highlights'>
                <Highlights />
            </Element>

            <Element name='pricing'>
                <Pricing />
            </Element>

            <Element name='location'>
                <Location />
            </Element>

            <Footer />
        </div>
    );
}

export default App;
