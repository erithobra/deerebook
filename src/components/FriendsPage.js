import { render } from "@testing-library/react";

import React from 'react';

const FriendsPage = (props) => {
    return (
        <div>
            <p>{props.potentialFriends.name.first}</p>
        </div>
    )
}

export default FriendsPage;