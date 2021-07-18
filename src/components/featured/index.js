import Caraousel from './Caraousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return (
        <div className='featured_container'>
            <Caraousel />
            <div className='artist_name'>
                <div className='wrapper'>Ariana Grande</div>
            </div>
            <TimeUntil />
        </div>
    );
};

export default Featured;
