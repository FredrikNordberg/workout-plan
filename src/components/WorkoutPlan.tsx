// WorkoutPlan.tsx

import React from 'react';
import { DailyWorkout } from './data';
import styles from './WorkoutPlan.module.css';

interface WorkoutPlanProps {
  day: string;
  workout: DailyWorkout['workout'];
}

const WorkoutPlan: React.FC<WorkoutPlanProps> = ({ day, workout }) => {
  return (
    <div className={styles.workoutPlan}>
      <h2 className={styles.day}>{day}</h2>
      <h3 className={styles.title}>{workout.title}</h3>
      <table className={styles.exerciseTable}>
        <thead>
          <tr>
            <th className={styles.exercise}>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          {workout.exercises.map((exercise, index) => (
            <tr key={index} className={styles.exercise}>
              <td className={styles.exerciseName}>{exercise.name}</td>
              <td>{exercise.sets}</td>
              <td>{exercise.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutPlan;


