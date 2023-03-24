import './App.css';
import React, { useState } from 'react';

function App() {

  // in format [text, user] where user can be true or false
  const [chatText, setChatText] = useState([]);
  const [port, setPort] = useState(3000);

  // three modes to determine which API route to call
  // r for repeat, s for single, a for all
  const [mode, setMode] = useState("r");

  // adds the current input to setChatText and makes a request to the API
  const submitText = currText => {
    setChatText([...chatText, [currText, true]]);
  };

  return (
    <div className='chat-container'>
      <div className='settings'>
        <input type="number" onChange={(e) => setPort(e.target.value)} value={port} />
        <div className='modes'>
          <input type="radio" id="repeat" name='modes' value="r" />
          <label htmlFor='repeat'>Repeat back input.</label>
          <input type="radio" id="single" name='modes' value="s" />
          <label htmlFor='single'>Generate on single input.</label>
          <input type='radio' id="all" name='modes' value="a" />
          <label htmlFor='all'>Generate on all input.</label>
        </div>
      </div>
      <div className='chat-window'>
        { chatText.map((curr, index) => (<div className='text'>{curr[1] ? (<div key={index} className='user'>{curr[0]}</div>) : (<div key={index} className='not-user'>{curr[0]}</div>)}</div>)) }
      </div>
      <div className='input-window'>
        <input type="text" onKeyDown={(e) => {if (e.key === "Enter" && e.target.value !== "") {submitText(e.target.value);e.target.value = "";}}} />
      </div>
    </div>
  );
}

export default App;
