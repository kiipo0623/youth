import React from 'react';
import styled from 'styled-components';

const RoomResultBlock = styled.div`
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

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
`;

const FontBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
//   border-bottom: 1px solid #e9ecef;
  h1 {
    margin-top: 50px;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    margin-left: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

function RoomResult({fixitems, envelops, covers}) {
    console.log(envelops.white);
  return (
    <RoomResultBlock>
        <FontBlock>
            <h1>[1층]</h1>
            <div className="tasks-left">봉지</div>
            <div className="day">검은봉지 : {envelops.black}</div>
            <div className="day">흰봉지 : {envelops.white}</div>
            <h1>[4층]</h1>
            <div className="tasks-left">이불커버</div>
            <div className="day">203호(빨간커버/노란커버) : {covers.red}</div>
            <div className="day">파란커버 : {covers.blue}</div>
            <div className="day">흰커버 : {covers.default}</div>
            <div className="tasks-left">베개 : {fixitems}</div>
            <div className="tasks-left">수건 : {fixitems*2}</div>

        </FontBlock>
    </RoomResultBlock>
  );
}

export default RoomResult;
