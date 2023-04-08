import { Link } from 'react-router-dom';
import './EventCard.css'

const EventCard = (props) => {
    console.log(props);
    return (
        <div className="card">
            <div className="imgBox">
                <img className="img" src={props.imgSrc} alt="cultural event" />
            </div>
            <div className="textBox">
                <h3 className="heading">{props.heading}</h3>
                <Link className="btn_1" to={props.redirectLink}>
                    View More
                </Link>
            </div>
        </div>
    );
};

export default EventCard;
