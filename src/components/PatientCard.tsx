import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const PatientCard = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Patient Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Name</p>
            <p>John Doe</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Date of Birth</p>
            <p>January 1, 1980</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Phone</p>
            <p>(123) 456-7890</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p>john.doe@example.com</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};