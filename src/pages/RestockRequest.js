import React, { useState } from "react";
import { generateClient } from "aws-amplify/api";

// SAFE mutation without unauthorized fields
const createPantryItemSafe = /* GraphQL */ `
  mutation CreatePantryItem($input: CreatePantryItemInput!) {
    createPantryItem(input: $input) {
      id
      name
      category
      quantity
      createdAt
      updatedAt
    }
  }
`;

const createRestockRequest = /* GraphQL */ `
  mutation CreateRestockRequest($input: CreateRestockRequestInput!) {
    createRestockRequest(input: $input) {
      id
      itemID
      itemName
      reason
      date
      filled
      requestedBy
      createdAt
      updatedAt
    }
  }
`;

const createConsumptionLog = /* GraphQL */ `
  mutation CreateConsumptionLog($input: CreateConsumptionLogInput!) {
    createConsumptionLog(input: $input) {
      id
      itemID
      consumedBy
      amount
      date
      createdAt
      updatedAt
    }
  }
`;

const client = generateClient();

const RestockRequest = ({ user }) => {
    const [itemName, setItemName] = useState("");
    const [reason, setReason] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Step 1: Create a pantry item safely (no unauthorized nested fields)
            const pantryResponse = await client.graphql({
                query: createPantryItemSafe,
                variables: {
                    input: {
                        name: itemName,
                        category: "Uncategorized",
                        quantity: 0,
                    },
                },
            });

            const newItem = pantryResponse?.data?.createPantryItem;
            if (!newItem?.id) throw new Error("Failed to create pantry item.");

            // Step 2: Create a restock request
            await client.graphql({
                query: createRestockRequest,
                variables: {
                    input: {
                        itemID: newItem.id,
                        itemName: newItem.name,
                        reason,
                        date: new Date().toISOString(),
                        filled: false,
                        requestedBy: user?.username || "Anonymous",
                    },
                },
            });

            // Step 3: Log the event as a consumption log (optional)
            await client.graphql({
                query: createConsumptionLog,
                variables: {
                    input: {
                        itemID: newItem.id,
                        consumedBy: user?.username || "Anonymous",
                        amount: 1,
                        date: new Date().toISOString(),
                    },
                },
            });

            alert("✅ Restock request submitted successfully!");
            setItemName("");
            setReason("");
        } catch (err) {
            console.error("❌ Error submitting restock request:", err);
            alert(`Error: ${JSON.stringify(err.errors || err)}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: 20 }}>
            <h2>Request Pantry Restock</h2>

            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Item name"
                required
                style={{ width: "100%", marginBottom: 10 }}
            />

            <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Why do you need it?"
                rows={4}
                style={{ width: "100%", marginBottom: 10 }}
            />

            <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
};

export default RestockRequest;
