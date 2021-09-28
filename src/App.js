import { useEffect, useRef, useState } from 'react';

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

const useAutoFocus = (isSelectText = false) => {
  // Use a ref so that the value doesn't change and useEffect doesn't need a dependency
  const selectValue = useRef(isSelectText);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      // This will highlight and select text if there is some. Useful for editing
      if (selectValue.current) {
        inputRef.current.select();
      }
    } else {
      console.error("Auto focus did not work");
    }
  }, []);

  // Return inside an object so we can easily deconstruct
  return { ref: inputRef }
}


export default App;
