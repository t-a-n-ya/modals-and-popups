import './App.css';
import { useState } from 'react';
import Popup1 from './components/Popup1';
import Popup2 from './components/Popup2';
import Popup3 from './components/Popup3';

function App() {
  const [popup1, setPopup1] = useState(false);
  const [popup2, setPopup2] = useState(false);
  const [popup3, setPopup3] = useState(false);
  return (
    <>
    <button
        onClick={() => {
          setPopup1(true);
          setPopup2(false);
          setPopup3(false);
        }}
      >
        popup1
      </button>
      {popup1 && <Popup1 setPopup1={setPopup1} />}
      <button
        onClick={() => {
          setPopup2(true);
          setPopup1(false);
          setPopup3(false);
        }}
      >
        popup2
      </button>
      {popup2 && <Popup2 setPopup2={setPopup2} />}
      <button
        onClick={() => {
          setPopup3(true);
          setPopup1(false);
          setPopup2(false);
        }}
      >
        popup3
      </button>
      {popup3 && <Popup3 setPopup3={setPopup3} />}
    </>
  );
}

export default App;
