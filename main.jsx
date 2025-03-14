import React, { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await fetch('http://127.0.0.1:8000/api/chat', {  // Use your production backend URL here
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input_text: userInput
      }),
    });

    const data = await result.json();
    setResponse(data.response);
  };

  return (
    <div>
      <h1>Medical Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={userInput} 
          onChange={(e) => setUserInput(e.target.value)} 
          placeholder="Enter your symptoms or questions" 
        />
        <button type="submit">Send</button>
      </form>
      <div>
        <p><strong>Response:</strong></p>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
