import { useState } from 'react';
import { Loading } from './Loading';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="user-list">
      <h2>Lista de Usuarios ({users.length})</h2>
    </div>
  );
}