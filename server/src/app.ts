import express from 'express';

const app  = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('build'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
});

app.listen(PORT, () => {
    console.log("Backend is running!");
});

//client build → build 폴더 → server/build → 서버 실행


//-----------------------
// client 폴더로 이동 
// npm ci 로 node_module 생성
// npm run build
// client/build → server/build 폴더로 이동
// 서버에서 npm ci 해서 node_module 생성
// tsc  타입스크립트 → 자바스크립트로 컴파일
// node app.js
//--------------------------

//↑ 이 과정을 스크립트로 짜기