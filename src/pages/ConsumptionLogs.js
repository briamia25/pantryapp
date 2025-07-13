import React, { useEffect, useState } from 'react';
// REMOVE THIS LINE: import { GraphQLAPI, graphqlOperation } from '@aws-amplify/api-graphql';
import { generateClient } from 'aws-amplify/api'; // <--- ADD THIS IMPORT
import { listConsumptionLogs } from '../graphql/queries';
// If you render AddConsumptionLogForm here, you'll need this:
// import AddConsumptionLogForm from '../components/AddConsumptionLogForm';
// import * as mutations from '../graphql/mutations'; // Only if you add a handler for a mutation here

const client = generateClient(); // <--- ADD THIS LINE

const ConsumptionLogs = () => {
    const [logs, setLogs] = useState([]);

    // This fetchLogs function is now correctly updated for v6
    useEffect(() => {
        const fetchLogs = async () => {
            try {
                // CHANGE THIS LINE: from GraphQLAPI.graphql(graphqlOperation(...))
                const result = await client.graphql({ query: listConsumptionLogs }); // <--- UPDATED SYNTAX
                setLogs(result.data.listConsumptionLogs.items);
            } catch (error) {
                console.error("Error fetching consumption logs:", error);
            }
        };

        fetchLogs();
    }, []);

    // --- You might have an onAdd handler for AddConsumptionLogForm here ---
    // Example (if you add logging functionality to this page):
    /*
    const handleAddLog = async (logData) => {
        try {
            await client.graphql({
                query: mutations.createConsumptionLog,
                variables: { input: logData }
            });
            console.log("Consumption log added!");
            fetchLogs(); // Re-fetch logs after adding
        } catch (error) {
            console.error("Error adding log:", error);
            alert("Failed to add consumption log.");
        }
    };
    */
    // --- End of potential onAdd handler ---

    return (
        <div style={{ padding: 20 }}>
            <h2>Consumption Logs</h2>
            {/* If you render the form here: */}
            {/* <AddConsumptionLogForm onAdd={handleAddLog} /> */}

            {logs.length === 0 ? (
                <p>No logs yet.</p>
            ) : (
                <ul>
                    {logs.map(log => (
                        <li key={log.id}>
                            ✅ {log.item?.name || "Unknown item"} — {log.amount ?? '1'} used by {log.consumedBy || 'Anonymous'} on {log.date ? new Date(log.date).toLocaleDateString() : 'Unknown date'}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ConsumptionLogs;
