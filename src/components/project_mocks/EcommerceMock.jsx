import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const EcommerceMock = () => {
  const [cartCount, setCartCount] = useState(0);
  
  const products = [
    { id: 1, name: 'Neon Keyboard', price: 129.99, color: 'var(--accent-primary)' },
    { id: 2, draw: 'Gaming Mouse', price: 79.99, color: 'var(--accent-neon)' },
    { id: 3, name: 'Ultra Monitor', price: 349.99, color: 'var(--text-primary)' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem', background: 'var(--glass-bg, rgba(255,255,255,0.05))', borderRadius: '12px', minHeight: '350px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
        <h3 style={{ margin: 0 }}>TechStore Demo</h3>
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span style={{ position: 'absolute', top: '-10px', right: '-10px', background: 'red', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>
              {cartCount}
            </span>
          )}
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
        {products.map(product => (
          <div key={product.id} style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', background: product.color, borderRadius: '8px', marginBottom: '1rem', opacity: 0.8 }}></div>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>{product.name || product.draw}</h4>
            <p style={{ margin: '0 0 1rem 0', color: 'var(--text-secondary)' }}>${product.price}</p>
            <button 
              onClick={() => setCartCount(c => c + 1)}
              style={{ padding: '0.5rem 1rem', background: 'var(--accent-primary)', color: '#000', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', width: '100%', fontSize: '0.9rem' }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcommerceMock;
