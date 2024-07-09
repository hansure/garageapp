import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';

const MySchedule = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Daily Program
      </Typography>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              6:00 AM - 7:00 AM: Morning Routine
            </Typography>
            <ul>
              <li>Wake up early for a refreshing start to the day</li>
              <li>Hydrate with water</li>
              <li>Engage in mindfulness or meditation for mental clarity.</li>
              <li>Exercise or go for a morning walk for physical well-being</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              7:00 AM - 8:00 AM: Breakfast and Planning
            </Typography>
            <ul>
              <li>Have a nutritious breakfast</li>
              <li>Review the schedule for the day and set priorities</li>
              <li>Check and respond to urgent emails</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              8:00 AM - 12:00 PM: Work/Productivity Block
            </Typography>
            <ul>
              <li>Focus on the most critical and challenging tasks during this time</li>
              <li>Break down work into smaller, manageable tasks</li>
              <li>Take short breaks for stretching or relaxation</li>
              <li>Take short breaks for relaxation</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              12:00 PM - 1:00 PM: Lunch Break
            </Typography>
            <ul>
              <li>Have a healthy lunch</li>
              <li>Take a break from work</li>
              <li>Consider a short walk or outdoor activity for a mental break</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              1:00 PM - 3:00 PM: Afternoon Work Block
            </Typography>
            <ul>
              <li>Continue with focused work on ongoing projects</li>
              <li>Attend meetings or collaborative sessions</li>
              <li>Address less challenging tasks during this time</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              3:00 PM - 5:00 PM: Skill Development or Personal Projects
            </Typography>
            <ul>
              <li>Allocate time for learning new skills</li>
              <li>Work on personal projects or hobbies</li>
              <li>Consider reading articles, books, or watching educational videos</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              5:00 PM - 6:00 PM: Exercise or Physical Activity
            </Typography>
            <ul>
              <li>Engage in a workout, yoga, or a sport</li>
              <li>Physical activity contributes to both physical and mental well-being</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              6:00 PM - 7:00 PM: Dinner and Family Time
            </Typography>
            <ul>
              <li>Have a balanced dinner</li>
              <li>Spend quality time with family or loved ones</li>
              <li>Engage in activities that foster connection</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              7:00 PM - 8:00 PM: Relaxation
            </Typography>
            <ul>
              <li>Unwind by watching a TV show, reading, or listening to music</li>
              <li>Avoid work-related activities during this time</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              8:00 PM - 9:00 PM: Reflection and Planning for Tomorrow
            </Typography>
            <ul>
              <li>Reflect on the day's achievements and challenges</li>
              <li>Set goals and priorities for the next day</li>
              <li>Avoid excessive screen time before bedtime</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              9:00 PM: Bedtime Routine
            </Typography>
            <ul>
              <li>Prepare for bed with a calming routine</li>
              <li>Ensure 7-8 hours of sleep for optimal health</li>
            </ul>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MySchedule;
