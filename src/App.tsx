// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Navbar from './components/Navbar';
import WorkoutPlan from './components/WorkoutPlan';
import { workoutPlans } from './components/data'; // Assuming workoutPlans are exported from data file

const App: React.FC = () => {
  const daysOfWeek = workoutPlans.map((plan) => plan.day);

  return (
    <Router>
      <div>
        <Navbar days={daysOfWeek} />
        <Routes> {/* Wrap Routes around Route components */}
          {workoutPlans.map((plan, index) => (
            <Route key={index} path={`/${plan.day.toLowerCase()}`} element={<WorkoutPlan day={plan.day} workout={plan.workout} />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;


