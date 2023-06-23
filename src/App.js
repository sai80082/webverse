import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Loading from './components/loading/Loading';
function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div >
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <Routes>
          <Route path="/" element={<Home></Home>} />
        </Routes>
      )}
    </div>
  );
}

export default App;
