import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        if (!tabs[0].url) return;

        const url = tabs[0].url;
        setUrl(url);
      });
  }, []);

  return <div className="App">
    {url}
  </div>;
}

export default App;
