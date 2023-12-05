import React from 'react';
import './PlaceList.css';

import Card from '../../Shared/Components/UIElements/Card'
import PlacesItems from './PlacesItem'

function PlacesList(props) {

    if (props.item.length === 0) {
        return (
            <div className='place-list center'>
                <Card>
                    <h2>No Places, Want to share one?
                    </h2>
                    <button>Share Place</button>
                </Card>
            </div>

        );
    }
    return (
        <ul className='place-list'>
            {props.item.map(place => (
                <PlacesItems
                    key={place.id}
                    id={place.id}
                    description={place.description}
                    image={place.imageUrl}
                    title={place.title}
                    address={place.address}
                    coordinates={place.location}
                    creatorId={place.creator}


                />
            ))}
        </ul>
    )



}

export default PlacesList
