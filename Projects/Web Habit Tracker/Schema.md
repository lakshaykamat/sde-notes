# Schema
## User
name
email
avatar
password?
googleid?
achivements[]
habits[]

## Habits
name
description
startDate
endDate
category
streak
user_id
frequency
question


## Sample Schema
### Gym
```js
{
  id: "gym-attendance-456",
  userId: "user123",
  title: "Going to the Gym",
  description: "Attend gym sessions",
  frequency: {
    type: "weekly",
    goal: 3, // 3 times a week
    progress: 2 // Current progress towards the goal
  },
  startDate: new Date('2023-01-01'),
  reminders: [
    {
      time: "Varies", // User's preferred gym session times
      days: [true, false, true, false, true, false, false] // Days user plans to go to the gym
    }
  ],
  archived: false,
  progressHistory: [
    { date: new Date('2023-01-01'), progress: true }, // Attended gym session
    { date: new Date('2023-01-03'), progress: true },
    // ... additional entries for other dates and progress
    { date: new Date('2023-01-06'), progress: false } // Skipped gym on this day
  ]
}

```
### Deep work
```js
{
  id: "deep-work-sessions-789",
  userId: "user123",
  title: "Deep Work",
  description: "Focused work sessions",
  frequency: {
    type: "daily",
    goal: 5, // 5 days a week
    progress: 3 // Current progress towards the goal
  },
  startDate: new Date('2023-01-01'),
  reminders: [
    {
      time: "Varies", // User's preferred deep work hours
      days: [true, true, true, true, true, false, false] // Mon-Fri
    }
  ],
  archived: false,
  progressHistory: [
    { date: new Date('2023-01-01'), progress: 2 }, // Worked on deep tasks for 2 hours
    { date: new Date('2023-01-02'), progress: 1.5 },
    // ... additional entries for other dates and progress
    { date: new Date('2023-01-05'), progress: 0 } // Couldn't focus on deep work this day
  ]
}
```