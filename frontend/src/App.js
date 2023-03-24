import './App.css';
import React, { useState } from 'react';

function App() {

  // in format [text, user] where user can be true or false
  const [chatText, setChatText] = useState([]);
  const [port, setPort] = useState(3000);

  // adds the current input to setChatText and makes a request to the API
  const submitText = currText => {
    setChatText([...chatText, [currText, true]]);
    console.log(chatText);
  };

  return (
    <div className='chat-container'>
      <div className='chat-window'>
        { chatText.map((curr, index) => (curr[1] ? <div key={index} className='user text'>{curr[0]}</div> : <div key={index} className='not-user text'>{curr[0]}</div>)) }
      </div>
      <div className='input-window'>
        <input type="text" onKeyDown={(e) => {if (e.key === "Enter") {submitText(e.target.value);e.target.value = "";}}} />
      </div>
    </div>
  );
}

export default App;
