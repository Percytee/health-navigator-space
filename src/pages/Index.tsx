import React from 'react';
import { Layout } from '../components/Layout';
import { PatientCard } from '../components/PatientCard';
import { AppointmentList } from '../components/AppointmentList';
import { Button } from '../components/ui/button';
import { PlusCircle } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome, John Doe</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <PatientCard />
            <AppointmentList />
          </div>
          <div>
            <Button className="w-full mb-4">
              <PlusCircle className="mr-2 h-4 w-4" /> Book Appointment
            </Button>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <ul className="space-y-2">
                <li><Button variant="ghost" className="w-full justify-start">View Medical Records</Button></li>
                <li><Button variant="ghost" className="w-full justify-start">Message Your Doctor</Button></li>
                <li><Button variant="ghost" className="w-full justify-start">Prescription Refills</Button></li>
                <li><Button variant="ghost" className="w-full justify-start">Update Profile</Button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;