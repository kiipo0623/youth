import React, {useState, useEffect} from 'react';
import RoomTemplate from './RoomInput/RoomTemplate.js';
import RoomResult from './RoomOutput/RoomResult.js';
import styled from 'styled-components';
import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;   
    display:flex;
  }
`;

const AppStyle = styled.div`
  display:flex;
`;

function App() {
  // 수건, 배게
  const [fixitems, setFixitems] = useState(0);

  // 봉지
  const [envelops, setEnvelop] = useState({
    white: 0,
    black: 0
  });

  // 이불
  const [covers, setCover] = useState({
    red: 0,
    blue: 0,
    yellow: 0,
    default: 0
  });

  const [state, setState] = useState([
    {
      roomid:201,
      people:0
    },
    {
      roomid:202,
      people:0
    },
    {
      roomid:203,
      people:0
    },
    {
      roomid:301,
      people:0
    },
    {
      roomid:302,
      people:0
    },
    {
      roomid:303,
      people:0
    },
 ]);

  const HandleState = (newid, newnum) => {
    setState(
      state.map((item) => {
        if (item.roomid == newid){
          return {...item, people:newnum};
        }
        return item;
       })
    )
  }
  //버튼 누르면 봉지 추가 : 각 방에 1명이라도 있으면 하면되는데 ..

  useEffect(() => {
    console.log("검은봉지", envelops.black);
    console.log("흰봉지", envelops.white);
    console.log("물건", fixitems);
  }, []);

  const UpdateResult = () => {
    // 업데이트하고
    let manFlag = false;
    let womanFlag = false;

    setFixitems(0);
    setCover({
      red: 0,
      blue: 0,
      yellow: 0,
      default: 0
    });
    setEnvelop({
      white: 0,
      black: 0
    });


    state.map((item) => {
      // 수건, 베개
      setFixitems((prev) => (prev+item.people));

      // 쓰레기봉지(방)
      if (item.people>0){
        setEnvelop((prev) => ({...prev, black:prev.black+1}))
      }

      // 쓰레기봉지(화장실)
      if (item.people && item.roomid < 204) womanFlag = true;
      if (item.people && item.roomid > 204) manFlag = true;

      if (item.roomid === 201 || item.roomid === 301) {setCover((prev) => ({...prev, blue:prev.blue+item.people}));}
      else if(item.roomid === 202 || item.roomid === 302 || item.roomid === "303") {setCover((prev) => ({...prev, default:prev.default+item.people}));}
      else if (item.roomid === 203) {setCover((prev) => ({...prev, red:prev.red+item.people}));}

      // 흰봉지
      if (fixitems > 4){
        setEnvelop((prev) => ({...prev, white:2}))
      }else{
        setEnvelop((prev) => ({...prev, white:1}))
      }

    })
    //출력
    if (manFlag) setEnvelop((prev) => ({...prev, black:prev.black+1}))
    if (womanFlag) setEnvelop((prev) => ({...prev, black:prev.black+2}))
  }

  return (
    <>
    <GlobalStyle />
      <AppStyle>
      <RoomTemplate HandleState={HandleState} UpdateResult={UpdateResult}/>
      <RoomResult fixitems={fixitems} envelops={envelops} covers={covers}/>
      </AppStyle>
    </>
  );
}

export default App;
