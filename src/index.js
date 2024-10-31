import React from 'react';
import ReactDom from 'react-dom/client';

function App() {
  return (
    <div>
      <h1
        style={{ color: 'red', fontSize: '50px', textTransform: 'uppercase' }}
      >
        Here we Go!
      </h1>
      <ShowNumber number={10} />
    </div>
  );
}

function ShowNumber({ number, test }) {
  console.log(test);
  return (
    <h2>
      10
    </h2>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
