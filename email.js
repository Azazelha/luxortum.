import { useState } from 'react';

export default function AdminEmail() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    template: 'investor',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    const res = await fetch('/api/email/send-template', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) setSent(true);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Send Intro Email</h1>
      <input name="name" placeholder="Name" onChange={handleChange} className="block mb-2 p-2 w-full bg-black text-white border" />
      <input name="email" placeholder="Email" onChange={handleChange} className="block mb-2 p-2 w-full bg-black text-white border" />
      <select name="template" onChange={handleChange} className="block mb-2 p-2 w-full bg-black text-white border">
        <option value="investor">Investor</option>
        <option value="curator">Curator</option>
        <option value="artist">Artist</option>
      </select>
      <textarea name="message" placeholder="Additional Message" onChange={handleChange} rows="4" className="block mb-4 p-2 w-full bg-black text-white border" />
      <button onClick={sendEmail} className="bg-white text-black px-6 py-2">Send</button>
      {sent && <p className="text-green-400 mt-4">Email Sent!</p>}
    </div>
  );
}