import { useState } from 'react';

function App() {
  const [value, setValue] = useState('defaultValue');

  return (
    <div className="App container">
      <form onSubmit={e => e.preventDefault()}>
        <div className="form-group">
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            {...useAutoFocus(true)}>
          </input>
        </div>
      </form>
    </div>
  );
}

export default App;
