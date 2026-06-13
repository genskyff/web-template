import { type FC, useState } from 'react';
import styles from './App.scss';
import reactLogo from './assets/react.svg';

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src={reactLogo} className={styles.logo} alt="logo" />
      <div>
        Edit <code>src/App.tsx</code> and save to reload.
      </div>
      <div>
        <button type="button" onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <div>Count: {count}</div>
      </div>
    </>
  );
};

export default App;
