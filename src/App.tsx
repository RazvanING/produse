import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div
        className="h-screen w-screen"
        style={{ backgroundImage: "linear-gradient(95deg, blue, yellow, red)" }}
      >
        {" "}
        <nav className="flex justify-center gap-4 p-4 border-b border-gray-600">
          <Link
            to="/"
            className="bg-white border-2 border-gray-600 p-2 rounded hover:bg-gray-600 hover:text-white"
          >
            Acasa
          </Link>
          <Link
            to="/produse"
            className="bg-white border-2 border-gray-600 p-2 rounded hover:bg-gray-600 hover:text-white"
          >
            Produse
          </Link>
          <Link
            to="/cum-comand"
            className="bg-white border-2 border-gray-600 p-2 rounded hover:bg-gray-600 hover:text-white"
          >
            Cum comand
          </Link>
          <Link
            to="/contact"
            className="bg-white border-2 border-gray-600 p-2 rounded hover:bg-gray-600 hover:text-white"
          >
            Contact
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Acasa />} />
          <Route path="/produse" element={<Produse />} />
          <Route path="/cum-comand" element={<CumComand />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Acasa() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">Bine ati venit la magazinul nostru</h1>
    </div>
  );
}

function Produse() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <div className="border p-4 rounded">
        <h2 className="text-xl font-bold">Produs 1</h2>
        <img src="../img/1.jpeg" alt="Produs 1" />
        <p className="text-lg font-bold">Pret: 100 lei</p>
      </div>
      <div className="border p-4 rounded">
        <h2 className="text-xl font-bold">Produs 2</h2>
        <img src="img/2.jpeg" alt="Produs 2" />
        <p className="text-lg font-bold">Pret: 200 lei</p>
      </div>
      <div className="border p-4 rounded">
        <h2 className="text-xl font-bold">Produs 3</h2>
        <img src="img/3.jpeg" alt="Produs 3" />
        <p className="text-lg font-bold">Pret: 300 lei</p>
      </div>
      <div className="border p-4 rounded">
        <h2 className="text-xl font-bold">Produs 4</h2>
        <img src="./img/4.jpeg" alt="Produs 4" />
        <p className="text-lg font-bold">Pret: 400 lei</p>
      </div>
    </div>
  );
}

function CumComand() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">
        Pentru comanda, contactati-ne telefonic sau prin email
      </h1>
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <a
        href="tel:+40720123123"
        className="bg-white border-2 border-gray-600 p-2 rounded hover:bg-gray-600 hover:text-white"
      >
        Contactati-ne prin telefon
      </a>
      <a
        href="https://wa.me/+40720123123"
        className="bg-white border-2 border-gray-600 p-2 rounded hover:bg-gray-600 hover:text-white"
      >
        Contactati-ne prin WhatsApp
      </a>
      <a
        href="mailto:office@produse.ro"
        className="bg-white border-2 border-gray-600 p-2 rounded hover:bg-gray-600 hover:text-white"
      >
        Trimite-ne un email
      </a>
    </div>
  );
}

export default App;
