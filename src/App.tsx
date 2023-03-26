import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { CardPage, MainPage } from './pages';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<CardPage />} />
      </Routes>
    </div>
  );
};

export default App;
