import { Link } from 'react-router-dom';
import './EventCard.css'

const EventCard = (props) => {
    console.log(props);
    return (
        <div className="main-wrapper2">
            <Link to={props.redirectLink}>
                <div className="team-card2">
                    <div className="bg-img2">
                        <img src={props.imgSrc} alt="'" />
                    </div>
                    <div className="info2">
                        <h2>{props.name}</h2>
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default EventCard;
