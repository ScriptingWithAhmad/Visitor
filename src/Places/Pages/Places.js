import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import PlacesList from '../Components/PlacesList';

const Dummy = [

    {
        id: 'P-1',
        title: 'Fasil Mosque',
        description: 'Historical mosque of Pakistan And a Gift from KSA',
        imageUrl: 'https://mosqpedia.org/img/cache/largeimage/E7zPkew893EjHLpgd8S8lXYeLFWZprVakCqKBTFl',
        address: 'Shah Faisal Ave, E-8, Islamabad Capital Territory 44000, Pakistan',
        creator: 'u-1',
        location: {
            lat: 33.7295198,
            lng: 73.0371536
        }
    },
    {
        id: 'P-2',
        title: 'Fasil Mosque',
        description: 'Historical mosque of Pakistan And a Gift from KSA',
        imageUrl: 'https://mosqpedia.org/img/cache/largeimage/E7zPkew893EjHLpgd8S8lXYeLFWZprVakCqKBTFl',
        address: 'Shah Faisal Ave, E-8, Islamabad Capital Territory 44000, Pakistan',
        location: {
            lat: 33.7295198,
            lng: 73.0371536
        },
        creator: 'u-2',
    }
]
function UserPlaces() {
    const userId = useParams().userId;
    const loadedPlaces = Dummy.filter(place => place.creator=== userId);
    return (

        <PlacesList item={loadedPlaces} />
    )
}

export default UserPlaces;
