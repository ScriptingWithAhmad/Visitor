import React, { useState } from 'react'
import Card from '../../Shared/Components/UIElements/Card'
import Button from '../../Shared/Components/FormElements/Button'
import './PlaceItem.css'
import Modal from '../../Shared/Components/UIElements/Modal';
// import Map from '../../Shared/Components/UIElements/Map';

function PlacesItem(props) {
    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    return (
        <React.Fragment>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass='place-item__model-content'
                footerClass='place-item__model-actions'
                footer={<Button onClick={closeMapHandler}>Close</Button>}
            >
                <div className='map-container'>
                    <h2>The Map!</h2>

                    {/* <Map center={props.coordinates} zoom={16}/> */}
                </div>
            </Modal>

            <li className='place-item'>
                <Card className='place-item__content'>
                    <div className='place-item__image'>
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className='place-item__info'>
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className='place-item__actions'>
                        <Button inverse onClick={openMapHandler}>Show in Map</Button>
                        <Button to={`/places/${props.id}`}>Edit</Button>
                        <Button danger>Delete</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    )
}

export default PlacesItem;