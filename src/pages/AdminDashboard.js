import React, { useEffect, useState } from 'react';
import AddItemForm from '../forms/AddItemForm';
import PublicPantryView from './PublicPantryView';
import { generateClient } from 'aws-amplify/api';
import {
  listRestockRequests,
  listPantryItems,
} from '../graphql/queries';
import {
  updateRestockRequest,
  createConsumptionLog,
  updatePantryItem,
} from '../graphql/mutations';

const client = generateClient();

const AdminDashboard = ({ user, signOut }) => {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const result = await client.graphql({ query: listRestockRequests });
      console.log("Fetched restock requests:", result);
      setRequests(result.data.listRestockRequests.items);
    } catch (err) {
      console.error("Error fetching restock requests", err);
    }
  };


  useEffect(() => {
    fetchRequests();
  }, []);

  const handleMarkFilled = async (req) => {
    try {
      const pantryItems = await client.graphql({ query: listPantryItems });
      const matchedItem = pantryItems.data.listPantryItems.items.find(
        (p) => p.name === req.itemName
      );

      if (!matchedItem) {
        alert('Matching pantry item not found.');
        return;
      }

      // Step 1: Mark restock request as filled
      await client.graphql({
        query: updateRestockRequest, 
        variables: {
          input: {
            id: req.id,
            filled: true,
          },
        },
      });

      // Step 2: Log as consumption
      await client.graphql({
        query: createConsumptionLog, 
        variables: {  
          input: {
            itemID: matchedItem.id,
            consumedBy: req.requestedBy || 'System',
            amount: 1,
            date: new Date().toISOString(),
          },
        },
      });

      // Step 3: Update pantry quantity
      const updatedQty = (matchedItem.quantity || 0) + 1;
      await client.graphql({
        query: updatePantryItem, 
        variables: {
          input: {
            id: matchedItem.id,
            quantity: updatedQty,
          },
        },
      });

      alert('Marked as filled and logged.');
      fetchRequests();
    } catch (err) {
      console.error('Error filling request:', err);
      alert('Failed to mark as filled.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2>Welcome, {user?.username || 'Admin'} 👋</h2>
      <button onClick={signOut} style={{ marginBottom: '1rem' }}>
        Sign Out
      </button>

      <h3>Admin Pantry Dashboard</h3>
      <AddItemForm />

      <h3 style={{ marginTop: '2rem' }}>Restock Requests</h3>
      {requests.length === 0 ? (
        <p>No restock requests yet.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {requests.map((req) => (
            <li
              key={req.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                marginBottom: '10px',
              }}
            >
              <strong>Item:</strong> {req.itemName} <br />
              <strong>Reason:</strong> {req.reason || 'N/A'} <br />
              <strong>Requested by:</strong> {req.requestedBy || 'Unknown'} <br />
              <strong>Status:</strong>{' '}
              {req.filled ? (
                <span style={{ color: 'green' }}>Filled ✅</span>
              ) : (
                <label style={{ display: 'inline-block', marginTop: '8px' }}>
                  <input
                    type="checkbox"
                    onChange={() => handleMarkFilled(req)}
                    style={{ marginRight: '6px' }}
                  />
                  Mark as Filled
                </label>
              )}
            </li>
          ))}
        </ul>
      )}

      <h3 style={{ marginTop: '2rem' }}>Current Pantry Items</h3>
      <PublicPantryView />
    </div>
  );
};

export default AdminDashboard;
