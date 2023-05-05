import { Link } from 'react-router-dom';
import './EventCard.css'

const EventCard = (props) => {
    console.log(props);
    return (
        <div className="main-wrapper1" >
            <Link to={props.redirectLink}>
                <div className="team-card" style={props.propStyle}>
                    <div className="bg-img1">
                        <img src={props.imgSrc} alt="'" />
                    </div>
                    <div className="info1">
                        <h2>{props.name}</h2>
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default EventCard;
