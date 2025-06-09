
import React from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';

const PersonalizedRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      name: 'Premium Wireless Earbuds',
      price: 149.99,
      originalPrice: 199.99,
      rating: 5,
      reason: 'Based on your recent headphone purchase',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&auto=format',
      discount: 25
    },
    {
      id: 2,
      name: 'Smart Watch Series 8',
      price: 299.99,
      rating: 4,
      reason: 'Popular in your browsing category',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=200&fit=crop&auto=format'
    },
    {
      id: 3,
      name: 'Portable Phone Charger',
      price: 29.99,
      rating: 4,
      reason: 'Frequently bought together',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&auto=format'
    }
  ];

  const addToCart = (id: number) => {
    console.log('Adding to cart:', id);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground flex items-center">
          <Eye className="h-5 w-5 mr-2 text-primary" />
          Recommended for You
        </h3>
        <button className="text-sm text-primary hover:text-primary/80 transition-colors">
          See More
        </button>
      </div>

      <div className="space-y-4">
        {recommendations.map((product) => (
          <div
            key={product.id}
            className="group p-4 bg-accent/20 hover:bg-accent/40 rounded-lg transition-all duration-300 hover:shadow-md cursor-pointer"
          >
            <div className="flex items-start space-x-3">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discount && (
                  <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h4>
                
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-xs text-muted-foreground mt-2">{product.reason}</p>
                
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => addToCart(product.id)}
                    className="flex items-center space-x-1 bg-primary text-primary-foreground px-3 py-1.5 rounded-md hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <ShoppingCart className="h-3 w-3" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;
