import React, { useState } from 'react';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, name: "Wireless Headphones", price: "$99.99", category: "Audio" },
    { id: 2, name: "Smart Fitness Watch", price: "$149.99", category: "Wearables" },
    { id: 3, name: "Portable Bluetooth Speaker", price: "$59.99", category: "Audio" },
    { id: 4, name: "Ergonomic Mouse", price: "$39.99", category: "Accessories" }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #eaeaea', paddingBottom: '15px', marginBottom: '30px' }}>
        <h1 style={{ color: '#333', margin: 0 }}>🛍️ ShopSphere</h1>
        <div style={{ background: '#007bff', color: 'white', padding: '8px 15px', borderRadius: '20px', fontWeight: 'bold' }}>
          Cart: {cartCount} items
        </div>
      </header>

      {/* Product Grid */}
      <h2 style={{ color: '#555', marginBottom: '20px' }}>Featured Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', background: '#fafafa', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <span style={{ fontSize: '12px', color: '#007bff', fontWeight: 'bold', textTransform: 'uppercase' }}>{product.category}</span>
            <h3 style={{ margin: '10px 0 5px 0', color: '#222' }}>{product.name}</h3>
            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#28a745', margin: '0 0 15px 0' }}>{product.price}</p>
            <button 
              onClick={() => setCartCount(cartCount + 1)}
              style={{ width: '100%', background: '#007bff', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}