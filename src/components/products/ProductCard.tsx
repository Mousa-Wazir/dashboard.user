
import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  isWishlisted?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  image, 
  rating, 
  reviewCount, 
  isWishlisted = false 
}: ProductCardProps) => {
  const handleAddToCart = () => {
    console.log('Added to cart:', id);
  };

  const handleToggleWishlist = () => {
    console.log('Toggle wishlist:', id);
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative aspect-square bg-accent/30">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
            isWishlisted 
              ? 'bg-red-100 text-red-600' 
              : 'bg-white/80 text-muted-foreground hover:text-red-600'
          }`}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-card-foreground mb-2 line-clamp-2">{name}</h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-2">({reviewCount})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-card-foreground">${price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="flex items-center space-x-1 bg-primary text-primary-foreground px-3 py-1.5 rounded-md hover:bg-primary/90 transition-colors text-sm"
          >
            <ShoppingCart className="h-3 w-3" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
