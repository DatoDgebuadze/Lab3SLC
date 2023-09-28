import './Listing.css';

export default function Listing(props) {
    const { pic, country, location, rating, price } = props;

    // Define a style object to set the image size
    const imgStyle = {
        width: '200px', // You can adjust the width as needed
        height: '70%', // You can adjust the height as needed
    };

    // Function to create star icons based on the rating
    const renderStars = (rating) => {
        const starIcons = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starIcons.push(<span key={i}>&#9733;</span>); // Full star
            } else {
                starIcons.push(<span key={i}>&#9734;</span>); // Empty star
            }
        }
        return starIcons;
    };

    return (
        <div className="Listing">
            <img src={pic} alt={`${country} - ${location}`} style={imgStyle} />
            <h2>{country}</h2>
            <p className='placename'>{location}</p>
            <div className={`Rating ${rating >= 4.0 ? 'green' : 'red'}`}>
                Rating: {renderStars(rating)}
            </div>
            <p>${price}/night</p> {/* Removed "Price:" label as requested from you ziad*/}
        </div>
    );
}
