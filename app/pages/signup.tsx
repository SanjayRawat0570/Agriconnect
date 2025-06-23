'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '', fullName: '', role: 'farmer' });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    if (res.ok) router.push('/login');
    else alert(result.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Full Name" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} required />
      <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
      <input type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} required />
      <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option value="farmer">Farmer</option>
        <option value="buyer">Buyer</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
}
