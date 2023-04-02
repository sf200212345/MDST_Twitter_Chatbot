import './App.css';
import React, { useState } from 'react';

function App() {

  // in format [text, user] where user can be true or false
  const [chatText, setChatText] = useState([]);
  const [port, setPort] = useState(3000);

  // three modes to determine which API route to call
  // r for repeat, s for single, a for all
  const [mode, setMode] = useState("repeat");

  const [openSettings, setOpenSettings] = useState(false);

  // makes a request to the API and adds the current input to setChatText 
  const submitText = currText => {
    let api_url = `//localhost:${port}/${mode}/`;
    let send_body = JSON.stringify({"text": currText});
    if (mode === "all") {
      send_body = JSON.stringify({"text": [...chatText.map(curr => curr[0]), currText]});
    }
    fetch(api_url, {
      method: "POST",
      body: send_body,
      headers: {"Content-Type": "application/json"}
    }).then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    }).then((data) => {
      setChatText([...chatText, [currText, true], [data["g_text"], false]]);
    }).catch((error) => console.log(error));
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
            <input type="radio" id="repeat" name='modes' value="repeat" checked={mode === "repeat"} onChange={(e) => setMode(e.target.value)} />
            <label htmlFor='repeat'>repeat: Repeat back user input.</label><br />
            <input type="radio" id="single" name='modes' value="single" checked={mode === "single"} onChange={(e) => setMode(e.target.value)} />
            <label htmlFor='single'>single: Generate on single line of user input.</label><br />
            <input type='radio' id="all" name='modes' value="all" checked={mode === "all"} onChange={(e) => setMode(e.target.value)} />
            <label htmlFor='all'>all: Generate on all lines of user input.</label><br />
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
