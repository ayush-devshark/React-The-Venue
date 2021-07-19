import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlights from './components/highlights';

function App() {
    return (
        <div className='app'>
            <Header />
            <Featured />
            <VenueInfo />
            <Highlights />

            <div style={{ backgroundColor: 'red', height: '800px' }}></div>
            <div style={{ backgroundColor: 'blue', height: '800px' }}></div>
            <div style={{ backgroundColor: 'green', height: '800px' }}></div>
            <div style={{ backgroundColor: 'yellow', height: '800px' }}></div>
            <Footer />
        </div>
    );
}

export default App;
