import RoomList from './RoomList.js';
import RoomHead from './RoomHead.js';
import styled from 'styled-components';

const RoomTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  margin-left: 32px;
  margin-right: 32px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background = #38d9a9;
  border-radius: 16px;
  border: 1px solid #38d9a9;
  height: 76px;
  font-size: 21px;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #63e6be;
  }
`

function RoomTemplate({HandleState, UpdateResult}) {
  return (
    <RoomTemplateBlock>
        <RoomHead />
        <RoomList HandleState={HandleState}/>
        <Button onClick={UpdateResult}>확인</Button>
    </RoomTemplateBlock>
  );
}

export default RoomTemplate;
