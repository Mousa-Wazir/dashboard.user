
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/products/ProductCard';
import { Search, Filter } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: '1',
      name: 'Wireless Bluetooth Headphones',
      price: 79.99,
      image: '/placeholder.svg',
      rating: 4,
      reviewCount: 142,
      isWishlisted: true
    },
    {
      id: '2',
      name: 'Smart Phone Case with Stand',
      price: 24.99,
      image: '/placeholder.svg',
      rating: 5,
      reviewCount: 89,
      isWishlisted: false
    },
    {
      id: '3',
      name: 'Portable Laptop Stand',
      price: 45.50,
      image: '/placeholder.svg',
      rating: 4,
      reviewCount: 67,
      isWishlisted: false
    },
    {
      id: '4',
      name: 'USB-C Charging Cable Set',
      price: 19.99,
      image: '/placeholder.svg',
      rating: 3,
      reviewCount: 203,
      isWishlisted: true
    },
    {
      id: '5',
      name: 'Ergonomic Coffee Mug',
      price: 15.99,
      image: '/placeholder.svg',
      rating: 5,
      reviewCount: 156,
      isWishlisted: false
    },
    {
      id: '6',
      name: 'Premium Notebook Set',
      price: 29.99,
      image: '/placeholder.svg',
      rating: 4,
      reviewCount: 94,
      isWishlisted: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'home', label: 'Home & Office' }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Products</h1>
          <p className="text-muted-foreground mt-1">Discover our latest collection</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          
          <button className="flex items-center space-x-2 px-4 py-2 border border-input rounded-md hover:bg-accent transition-colors">
            <Filter className="h-4 w-4" />
            <span>More Filters</span>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
