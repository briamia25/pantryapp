import React, { useState } from 'react';
import { createPantryItem } from '../graphql/mutations';
// REMOVE THIS LINE: import { StorageManager } from '@aws-amplify/ui-react-storage';
// REMOVE THIS LINE: import { GraphQLAPI, graphqlOperation } from '@aws-amplify/api-graphql';

// --- ADD THESE IMPORTS FOR AMPLIFY V6 API & STORAGE ---
import { generateClient } from 'aws-amplify/api';
import { uploadData, getUrl } from 'aws-amplify/storage'; // New Storage API for v6
// --- END ADDITIONS ---

const client = generateClient({ authMode: 'userPool' }); // <-- Specify authMode here

const AddItemForm = () => {
  const [formData, setFormData] = useState({ name: '', quantity: 1, category: '', image: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = null;

    console.log('Submitting AddItemForm with formData:', formData);
    // This is the OUTER try block for the entire submission process
    try {
      if (formData.image) {
        // This is the INNER try block for Storage upload specifically
        try {
          const fileName = `${Date.now()}-${formData.image.name}`;
          await uploadData({
            key: fileName,
            data: formData.image,
            options: {
              // Optional: Set access level for the file (e.g., 'public')
              // accessLevel: 'public'
            }
          }).result; // .result to wait for the upload to complete

          // Get the URL for the uploaded file
          const urlResult = await getUrl({ key: fileName });
          imageUrl = urlResult.url.toString();
          console.log("Image uploaded and URL generated:", imageUrl);

        } catch (storageError) { // This CATCH block belongs to the INNER try for Storage
          console.error("Error uploading image:", storageError);
          alert("Failed to upload image.");
          return; // Stop if image upload fails
        }
      }

      // This is the GraphQL Call, which is part of the OUTER try block
      await client.graphql({
        query: createPantryItem, // Your mutation string
        variables: { // Wrap your input in 'variables'
          input: {
            name: formData.name,
            quantity: parseInt(formData.quantity),
            category: formData.category,
            // Only include image if it was successfully uploaded
            image: imageUrl, // Add the image URL here
          },
        },
      });

      console.log("Pantry item created successfully!");
      setFormData({ name: '', quantity: 1, category: '', image: null });
      // You might want to refresh the list of items in the parent component here
      // if this form is part of a page that displays items.

    } catch (graphqlError) { // This CATCH block belongs to the OUTER try for the whole handleSubmit
       console.error("Error creating pantry item:", JSON.stringify(graphqlError, null, 2)); // Logging the full error object directly
      alert("Failed to add item. Check console for details.");
    }
  };
   
  // In src/forms/AddItemForm.js, replace your current 'return' block with this:

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Quantity" // Added placeholder for clarity
        value={formData.quantity}
        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })} // CORRECTED: ...formData, not ...formData.quantity
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })} // CORRECTED: ...formData, not ...formData.category
      />
      <input
        type="file"
        onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}; // Don't forget this closing brace for the component!

export default AddItemForm;