import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import Biome from './components/Biome/Biome';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Biome />} />
      </Routes>
    </Router>
  );
}
