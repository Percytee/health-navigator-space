import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const AppointmentList = () => {
  const appointments = [
    { date: '2023-05-15', time: '10:00 AM', doctor: 'Dr. Smith', type: 'Check-up' },
    { date: '2023-05-22', time: '2:30 PM', doctor: 'Dr. Johnson', type: 'Follow-up' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        {appointments.map((appointment, index) => (
          <div key={index} className="mb-4 last:mb-0 p-4 bg-gray-50 rounded-md">
            <p className="font-semibold">{appointment.date} at {appointment.time}</p>
            <p>{appointment.doctor} - {appointment.type}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};