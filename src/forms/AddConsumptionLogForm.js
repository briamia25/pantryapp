import React, { useState } from 'react';

const AddConsumptionLogForm = ({ onAdd }) => {
  const [log, setLog] = useState({ item: '', quantity: 1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(log);
    setLog({ item: '', quantity: 1 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={log.item} placeholder="Item Consumed" onChange={(e) => setLog({ ...log, item: e.target.value })} required />
      <input type="number" value={log.quantity} onChange={(e) => setLog({ ...log, quantity: parseInt(e.target.value) })} required />
      <button type="submit">Log Consumption</button>
    </form>
  );
};

export default AddConsumptionLogForm;
