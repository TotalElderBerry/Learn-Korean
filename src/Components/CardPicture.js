import MyImage from '../utils/images/Flag-South-Korea.webp'
import Card from 'react-bootstrap/Card';

const CardPicture = () => {
    const cardstyle = {
    };
    const container = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
    }
    return(
        <div style={container}>
            <div style={cardstyle}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={MyImage}/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default CardPicture