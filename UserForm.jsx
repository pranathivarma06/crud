import React, { useEffect, useState } from 'react';

const UserForm = ({ onAdd, onUpdate, editUser }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
    } else {
      setFormData({ name: '', email: '' });
    }
  }, [editUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    if (editUser) {
      onUpdate(formData);
    } else {
      onAdd(formData);
    }

    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button type="submit">{editUser ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;
