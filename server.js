const express = require('express'); // 서버기능구현을 위한 core 모듈 express 호출 
const path = require('path'); // 경로기능제어하기 위해서 모듈 호출
const cors = require('cors'); // 다른 서버와 연동호출
const app = express(); // 실행해라 -> 구동은 여기서 일어남

app.use(cors()); // cors 미들웨어를 삽입합니다. 다른 도메인에서 너한테 요청오면 응답해줘

app.get('/', (req,res) => { // 요청패스에 대한 콜백함수를 넣어줍니다. get, post, use
  res.send({message:'hello'}); // http://localhost:8080/ 주소치면 나옴
});

app.listen(8080, ()=>{
  console.log('server is running on 8080') //사람들이 대체적으로 8080 서버를 씀
})