import './App.css';
import React, { useState } from 'react';

function App() {

  // in format [text, user] where user can be true or false
  const [chatText, setChatText] = useState([]);
  const [port, setPort] = useState(3000);

  // three modes to determine which API route to call
  // r for repeat, s for single, a for all
  const [mode, setMode] = useState("Repeat");

  const [openSettings, setOpenSettings] = useState(false);

  // adds the current input to setChatText and makes a request to the API
  const submitText = currText => {
    setChatText([...chatText, [currText, true]]);
  };

  return (
    <div className='chat-container'>
      <h1>Simple Chatbot: Generated text on the left, user input on the right.</h1>
      <div className='min-settings'>
        <p>Port: {port}</p>
        <p>Mode: {mode}</p>
        <button onClick={() => setOpenSettings(true)}>Edit</button>
      </div>
      { openSettings ? 
        <div className='settings'>
          <h1>Settings</h1>
          <label htmlFor='port'>Port</label>
          <input type="number" id="port" onChange={(e) => setPort(e.target.value)} value={port} /><br />
          <div className='modes'>
            <p>Generation Mode</p>
            <input type="radio" id="repeat" name='modes' value="Repeat" checked={mode === "Repeat"} onChange={(e) => setMode(e.target.value)} />
            <label htmlFor='repeat'>Repeat: Repeat back user input.</label><br />
            <input type="radio" id="single" name='modes' value="Single" checked={mode === "Single"} onChange={(e) => setMode(e.target.value)} />
            <label htmlFor='single'>Single: Generate on single line of user input.</label><br />
            <input type='radio' id="all" name='modes' value="All" checked={mode === "All"} onChange={(e) => setMode(e.target.value)} />
            <label htmlFor='all'>All: Generate on all lines of user input.</label><br />
          </div>
          <button onClick={() => setOpenSettings(false)}>Submit</button>
        </div> : <></>}
      <div className='chat-window'>
        { chatText.map((curr, index) => (<div key={index} className='text'>{curr[1] ? (<div className='user'>{curr[0]}</div>) : (<div className='not-user'>{curr[0]}</div>)}</div>)) }
      </div>
      <h3>User Input (Press Enter to submit input):</h3>
      <div className='input-window'>
        <input type="text" onKeyDown={(e) => {if (e.key === "Enter" && e.target.value !== "") {submitText(e.target.value);e.target.value = "";}}} />
      </div>
    </div>
  );
}

export default App;
