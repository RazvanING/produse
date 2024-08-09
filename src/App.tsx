import React, { useState } from 'react';

interface MenuItem {
  label: string;
  href: string;
}

interface Product {
  name: string;
  image: string;
}

const menuItems: MenuItem[] = [
  { label: 'Acasa', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Produse', href: '#' },
  { label: 'Cum comand', href: '#' },
];

const products: Product[] = [
  { name: 'Product 1', image: 'https://picsum.photos/200/300' },
  { name: 'Product 2', image: 'https://picsum.photos/200/301' },
  { name: 'Product 3', image: 'https://picsum.photos/200/302' },
];

const App = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(menuItems[0].label);

  const handleMenuItemClick = (label: string) => {
    setActiveMenuItem(label);
  };

  return (
    <div className="h-screen w-screen flex flex-row">
<div
  className="w-full h-screen"
  style={{
    background: 'linear-gradient(95deg, #002B7F 25%, #FCD116 45%, #CE1126 70%)',
  }}
/>
      <nav className="absolute top-0 left-0 w-full flex justify-center p-4 bg-gray-200"style={{
    background: 'linear-gradient(#002B7F, #FCD116, #CE1126)',
  }}>
        {menuItems.map((menuItem) => (
          <a
            key={menuItem.label}
            href={menuItem.href}
            className={`text-lg mx-4 ${activeMenuItem === menuItem.label ? 'text-blue-900' : 'text-gray-600'}`}
            onClick={() => handleMenuItemClick(menuItem.label)}
          >
            {menuItem.label}
          </a>
        ))}
      </nav>
      <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {activeMenuItem === 'Acasa' && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Bine ati venit pe site-ul produse-nationaliste.ro!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </div>
        )}
        {activeMenuItem === 'Contact' && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Contacteaza-ne</h1>
            <p>
            Telefon: <a href="tel:+47020123123" target="_blank" rel="noopener noreferrer">+47020123123</a>
      <br />
            Email: <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">contact@example.com</a>
      <br />
       <a href="https://wa.me/47020123123" target="_blank" rel="noopener noreferrer">Contactati-ne pe whatsapp</a>
    </p>
          </div>
        )}
        {activeMenuItem === 'Produse' && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Our products!</h1>
            <ul>
              {products.map((product) => (
                <li key={product.name}>
                  <img src={product.image} alt={product.name} className="w-20 h-20" />
                  <p>{product.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeMenuItem === 'Cum comand' && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Cum se plaseaza comanda?</h1>
            <p>
              Pentru a plasa o comanda, alegeti produsele pe care le doriti, cantitatea lor si trimiteti un email sau telefonic pentru a comanda.
            </p>
          </div>
        )}
      </main>
      <link rel="icon" type="image/png" href="https://picsum.photos/16/16" />
    </div>
  );
};

export default App;