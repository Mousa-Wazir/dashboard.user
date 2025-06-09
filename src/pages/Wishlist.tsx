import React from 'react';
import Layout from '../components/layout/Layout';
import { Heart, ShoppingCart, Trash2, Star } from 'lucide-react';
const Wishlist = () => {
  const wishlistItems = [{
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    originalPrice: 99.99,
    image: '/placeholder.svg',
    rating: 4,
    reviewCount: 142,
    inStock: true,
    onSale: true
  }, {
    id: '2',
    name: 'Smart Phone Case with Stand',
    price: 24.99,
    image: '/placeholder.svg',
    rating: 5,
    reviewCount: 89,
    inStock: true,
    onSale: false
  }, {
    id: '3',
    name: 'Premium Notebook Set',
    price: 29.99,
    image: '/placeholder.svg',
    rating: 4,
    reviewCount: 94,
    inStock: false,
    onSale: false
  }];
  const addToCart = (id: string) => {
    console.log('Adding to cart:', id);
  };
  const removeFromWishlist = (id: string) => {
    console.log('Removing from wishlist:', id);
  };
  return <Layout>
      <div className="flex-col md:flex-row md:justify-between text-sm, font-semibold max-w-full ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-sm md:text-base lg:text-lg">My Wishlist</h1>
            <p className="text-muted-foreground mt-1">{wishlistItems.length} items saved</p>
          </div>
          <button className="lg:text-lg md:text-base text-xs">
            Add All to Cart
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map(item => <div key={item.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="relative">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md bg-accent/30" />
                {item.onSale && <span className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded">
                    Sale
                  </span>}
                <button onClick={() => removeFromWishlist(item.id)} className="absolute top-2 right-2 p-2 bg-background rounded-full shadow-md hover:bg-accent transition-colors">
                  <Heart className="h-4 w-4 text-destructive fill-destructive" />
                </button>
              </div>
              
              <div className="mt-4">
                <h3 className="font-medium text-card-foreground line-clamp-2">{item.name}</h3>
                
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`h-3 w-3 ${i < item.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />)}
                  </div>
                  <span className="text-xs text-muted-foreground ml-1">({item.reviewCount})</span>
                </div>
                
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <span className="text-lg font-semibold text-primary">${item.price}</span>
                    {item.originalPrice && <span className="text-sm text-muted-foreground line-through ml-2">
                        ${item.originalPrice}
                      </span>}
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <button onClick={() => addToCart(item.id)} disabled={!item.inStock} className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md transition-colors ${item.inStock ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted text-muted-foreground cursor-not-allowed'}`}>
                    <ShoppingCart className="h-4 w-4" />
                    <span className="text-xs md:text-base lg:text-lg ">{item.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                  </button>
                  <button onClick={() => removeFromWishlist(item.id)} className="p-2 border border-border rounded-md hover:bg-accent transition-colors">
                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </Layout>;
};
export default Wishlist;