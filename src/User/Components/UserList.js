import React from 'react';
import "./UserList.css"
import Card from '../../Shared/Components/UIElements/Card';
import UserItems from './UserItems';

function UserList(props) {
    if (props.items.length === 0) {
        return (
            <Card>
                <div className='center'>
                    <h2>No User Found</h2>
                </div>
            </Card>
        );

    };
    return (
        <ul className='user-list'>
            {props.items.map(user => (
                <UserItems
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    img={user.img}
                    placeCount={user.places}
                />
            ))}
        </ul>
    );

}

export default UserList;
