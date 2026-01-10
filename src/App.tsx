import React from 'react';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import ProductTabs from './components/ProductTabs';
import ReviewSection from './components/ReviewSection';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <ProductSection />
      <ProductTabs />
      <ReviewSection />
    </div>
  );
};

export default App;