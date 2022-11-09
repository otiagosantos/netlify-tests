import { useEffect, useState } from 'react';
import { api } from './lib/axios';

function App() {

  const [text, setText] = useState('teste');

  useEffect(() => {
    async function getResponse() {
      const response = await api.get('/');
  
      console.log(process.env.SERVER_PORT);
  
      setText(response.data.message);
    }

    getResponse();
  }, []);

  return (
    <h1>{text}</h1>
  );
}

export default App;
