import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let postData = [
  { id: 1, message: 'Hello, my name is Eliza.And you?', image: 'https://sun9-34.userapi.com/impf/c854416/v854416044/c61ae/7G4AJo-AM5s.jpg?size=960x1200&quality=96&sign=f7064faaa607729de77ec3aef7383dc5&type=album', likesCount: 0 },
  { id: 2, message: 'Hi, i am  Rachel .Nice to meet you! Where are you from?', image: 'https://art-assorty.ru/wp-content/uploads/2018/11/23256354753-1.jpg', likesCount: 25 },
];
let dialogsData = [
  { id: 1, name: "Eliza" },
  { id: 2, name: "Monica" },
  { id: 3, name: "Ross" },
  { id: 4, name: "Chandler" },
  { id: 5, name: "Phoebe" },
  { id: 6, name: "Rachel" },
  { id: 7, name: "Joey" },
];
  
let messagesData = [
  { id: 1, message: "Кстати, в качестве благодарности я хочу тебя куда-нибудь сводить." },
  { id: 2, message: "Серьезно?" },
  { id: 3, message: "Да. Мы с Джо как раз сегодня идем в кино. Пойдешь с нами? " },
  { id: 4, message: "Не могу, потому что... я их видела." },
  { id: 5, message: "Ты видела все фильмы?" },
  { id: 6, message: "Да! Я большая поклонница... фильмов... кинематографа... кино. " },
  { id: 7, message: "Может, сходим куда-нибудь еще?" },
  { id: 8, message: "В зависимости от того, куда. Я почти везде была. " },
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
