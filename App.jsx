import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);

  const addItem = () => {
    if (!name) return alert('Name is required');
    const newItem = { id: Date.now(), name, description };
    setItems([...items, newItem]);
    setName('');
    setDescription('');
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
    if (editId === id) cancelEdit();
  };

  const startEdit = (item) => {
    setEditId(item.id);
    setName(item.name);
    setDescription(item.description);
  };

  const updateItem = () => {
    setItems(items.map(item => (item.id === editId ? { ...item, name, description } : item)));
    cancelEdit();
  };

  const cancelEdit = () => {
    setEditId(null);
    setName('');
    setDescription('');
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>CRUD App </h1>

      <input
        style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {editId ? (
        <>
          <button onClick={updateItem} style={{ padding: '0.5rem 1rem', marginRight: '0.5rem' }}>
            Update
          </button>
          <button onClick={cancelEdit} style={{ padding: '0.5rem 1rem' }}>
            Cancel
          </button>
        </>
      ) : (
        <button onClick={addItem} style={{ padding: '0.5rem 1rem' }}>
          Add
        </button>
      )}

      <ul style={{ marginTop: '2rem', listStyleType: 'none', padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              padding: '1rem',
              border: '1px solid #ccc',
              marginBottom: '0.5rem',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <strong>{item.name}</strong>
              <p style={{ margin: 0 }}>{item.description}</p>
            </div>
            <div>
              <button onClick={() => startEdit(item)} style={{ marginRight: '0.5rem' }}>
                Edit
              </button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}