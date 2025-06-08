import { useState } from 'react';

export default function App() {
  const [appointments, setAppointments] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const addAppointment = (e) => {
    e.preventDefault();
    if (!title || !date) return;
    setAppointments([
      ...appointments,
      { id: Date.now(), title, date },
    ]);
    setTitle('');
    setDate('');
  };

  const removeAppointment = (id) => {
    setAppointments(appointments.filter((appt) => appt.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Appointment Scheduler</h1>
      <form onSubmit={addAppointment} className="space-y-2 mb-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="datetime-local"
          className="w-full border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Appointment
        </button>
      </form>
      <ul className="space-y-2">
        {appointments.map((appt) => (
          <li key={appt.id} className="border p-2 rounded flex justify-between">
            <div>
              <div className="font-semibold">{appt.title}</div>
              <div className="text-sm text-gray-500">{new Date(appt.date).toLocaleString()}</div>
            </div>
            <button
              className="text-red-500 hover:underline"
              onClick={() => removeAppointment(appt.id)}
            >
              Delete
            </button>
          </li>
        ))}
        {appointments.length === 0 && (
          <li className="text-gray-500">No appointments yet.</li>
        )}
      </ul>
    </div>
  );
}
