import { Link } from 'react-router-dom';
import './EventCard.css'

const EventCard = (props) => {
    console.log(props);
    return (
        <div className="card col-3">
            <img className="img" src={props.imgSrc} alt="cultural event" />
            <div className="textBox">
                <h3 className="head">{props.heading}</h3>
                <Link className="btn_1 btn btn-primary" to={props.redirectLink}>
                    View More
                </Link>
            </div>
        </div>
    );
};

export default EventCard;
