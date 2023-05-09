import { Link } from 'react-router-dom';
import './EventCard.css'

const EventCard = (props) => {
    console.log(props);
    return (
        <div className="main-wrapper2">
            <Link to={props.redirectLink}>
                <div className="team-card2" style={props.propStyle}>
                    {/* <div className="bg-img2">
                        <img src={props.imgSrc} alt="'" />
                    </div> */}

                    <div className="info2">
                        <div className="card-serial">

                        <h3 className='card-serial-number'>{props.serial}</h3>
                        </div>
                        <h2>{props.name}</h2>
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default EventCard;
