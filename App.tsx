import React from 'react';
import { Header } from './components/layout/Header';
import { Interview } from './pages/Interview';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Interview />
      </main>
    </div>
  );
}

export default App;