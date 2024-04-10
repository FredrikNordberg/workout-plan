
export interface Exercise {
    name: string;
    reps: number;
    sets: number;
  }
  
  export interface DailyWorkout {
    day: string;
    workout: {
      title: string;
      exercises: Exercise[];
    };
  }
  
  export const workoutPlans: DailyWorkout[] = [
    {
      day: 'Måndag',
      workout: {
        title: 'Chest/Triceps',
        exercises: [
          { name: 'Bench Press', reps: 8, sets: 3 },
          { name: 'Incline Bench Press', reps: 8, sets: 4 },
          { name: 'Push-ups', reps: 8, sets: 3 },
          { name: 'Bench Press', reps: 8, sets: 4 },
          { name: 'Push-ups', reps: 8, sets: 3 },
          { name: 'Bench Press', reps: 8, sets: 4 },
          { name: 'Push-ups', reps: 8, sets: 3 },
          { name: 'Bench Press', reps: 8, sets: 4 },
          
        ],
      },
    },
    {
        day: 'Tisdag',
        workout: {
          title: 'Restday',
          exercises: [
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            
          ],
        },
      },
      {
        day: 'Onsdag',
        workout: {
          title: 'Back/Biceps',
          exercises: [
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            
          ],
        },
      },
      {
        day: 'Torsdag',
        workout: {
          title: 'Shoulder/Abs',
          exercises: [
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            
          ],
        },
      },
      {
        day: 'Fredag',
        workout: {
          title: 'Legs',
          exercises: [
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            
          ],
        },
      },
      {
        day: 'Lördag',
        workout: {
          title: 'Restday',
          exercises: [
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            
          ],
        },
      },
      {
        day: 'Söndag',
        workout: {
          title: 'Restday',
          exercises: [
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            
          ],
        },
      },
      {
        day: 'Monday',
        workout: {
          title: 'Chest/Triceps',
          exercises: [
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            { name: 'Push-ups', reps: 15, sets: 3 },
            { name: 'Bench Press', reps: 12, sets: 4 },
            
          ],
        },
      },
    // Define plans for other days
  ];
  