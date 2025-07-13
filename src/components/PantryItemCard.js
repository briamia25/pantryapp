const PantryItemCard = ({ item }) => (
    <div style={{ border: "1px solid gray", margin: 10, padding: 10, width: 200 }}>
        {item.image && <img src={item.image} alt={item.name} style={{ width: "100%" }} />}
        <h3>{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Category: {item.category}</p>
    </div>
);

export default PantryItemCard;
