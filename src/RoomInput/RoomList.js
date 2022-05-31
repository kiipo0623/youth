import React from 'react';
import styled from 'styled-components';
import RoomItem from './RoomItem.js';

const RoomListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;


function RoomList({HandleState}) {
    return (
        <RoomListBlock>
            <RoomItem id="201" HandleState={HandleState}/>
            <RoomItem id="202" HandleState={HandleState}/>
            <RoomItem id="203" HandleState={HandleState}/>
            <RoomItem id="301" HandleState={HandleState}/>
            <RoomItem id="302" HandleState={HandleState}/>
            <RoomItem id="303" HandleState={HandleState}/>
        </RoomListBlock>
    )
}

export default RoomList;