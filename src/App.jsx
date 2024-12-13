import React, { useState } from 'react';
import CategoryFilter from './components/ProductCard/CategoryFilter/CategoryFilter';
import ProductList from './components/ProductList';
import BrandCheckbox from './components/BrandCheckbox/BrandCheckbox';
import RangeSlider from './components/RangeSlider/RangeSlider';


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <h1>Product Store</h1>
  <div className="flex">
  <div className="sidebar">
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <RangeSlider></RangeSlider>
      <BrandCheckbox></BrandCheckbox>
      </div>
      <div className="product-container">
      <ProductList selectedCategory={selectedCategory} />
      </div>
  </div>
    </div>
  );
};

export default App;

