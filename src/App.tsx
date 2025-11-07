import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Onboarding } from './pages/Onboarding';
import { WorkoutDisplay } from './pages/WorkoutDisplay';
import { SavedWorkouts } from './pages/SavedWorkouts';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/workout" element={<WorkoutDisplay />} />
        <Route path="/workouts" element={<SavedWorkouts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
