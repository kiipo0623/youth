import React, {useState, useEffect} from 'react';
import styled, { css } from 'styled-components';
import { MdAdd, MdRemove } from 'react-icons/md';


const RoomItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #38d9a9;
  color: #38d9a9;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const RoomNumber = styled.div`
  flex: 1;
//   display:inline-block;
  font-size: 21px;
  color: #495057;
`;

const PeopleCount = styled.div`
  flex: 0.2;
  align-items: center;
  font-size: 21px;
  color: #495057;
`

function RoomItem({ id, HandleState }) {
  const [person, setPerson] = useState(0);
  
  const AddPerson = () => {
    if (id==201 || id==301) {
      if (person < 2) 
      setPerson(person + 1)
    }
    else if (id==202) {
      if (person < 4) setPerson(person + 1)
    }
    else if (id==203 || id==303) {
      if (person < 3) setPerson(person + 1)
    }
    else if (id==302) {
      if (person < 6) setPerson(person + 1)
    }
    
  }

  const RemovePerson = () => {
    if (person >= 1) {
      setPerson(person - 1)
    }
  }

  useEffect(() => {
    HandleState(id, person);

  }, [person]);

  return (
    <RoomItemBlock>
      <RoomNumber>{id}</RoomNumber>
      <CheckCircle onClick={RemovePerson}>{<MdRemove />}</CheckCircle>
      <PeopleCount>{person}명</PeopleCount>
      <CheckCircle onClick={AddPerson}>{<MdAdd />}</CheckCircle>
    </RoomItemBlock>
  );
}


export default RoomItem;