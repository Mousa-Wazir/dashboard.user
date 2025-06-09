
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Minus, Plus, Trash2, ArrowLeft, Tag, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [promoCode, setPromoCode] = useState('');
  const [useRewardPoints, setUseRewardPoints] = useState(false);
  const availablePoints = 1250;
  const pointsValue = 12.50;

  const cartItems = [
    {
      id: '1',
      name: 'Wireless Bluetooth Headphones',
      price: 79.99,
      originalPrice: 99.99,
      quantity: 1,
      image: '/placeholder.svg',
      inStock: true,
      onSale: true
    },
    {
      id: '2',
      name: 'Smart Phone Case with Stand',
      price: 24.99,
      quantity: 2,
      image: '/placeholder.svg',
      inStock: true,
      onSale: false
    },
    {
      id: '3',
      name: 'USB-C Charging Cable Set',
      price: 19.99,
      quantity: 1,
      image: '/placeholder.svg',
      inStock: true,
      onSale: false
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const promoDiscount = promoCode === 'SAVE10' ? 10 : 0;
  const rewardDiscount = useRewardPoints ? pointsValue : 0;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = (subtotal - promoDiscount - rewardDiscount) * 0.08;
  const total = subtotal - promoDiscount - rewardDiscount + shipping + tax;

  const updateQuantity = (id: string, change: number) => {
    console.log('Update quantity for item:', id, 'change:', change);
  };

  const removeItem = (id: string) => {
    console.log('Remove item:', id);
  };

  const applyPromoCode = () => {
    console.log('Applying promo code:', promoCode);
  };

  const saveForLater = (id: string) => {
    console.log('Save for later:', id);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Link 
            to="/products" 
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Continue Shopping</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
          <span className="text-muted-foreground">({cartItems.length} items)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md bg-accent/30"
                    />
                    {item.onSale && (
                      <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded">
                        Sale
                      </span>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-card-foreground">{item.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-lg font-semibold text-primary">${item.price.toFixed(2)}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm mt-1 ${item.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </p>
                    
                    <div className="flex items-center space-x-4 mt-3">
                      <div className="flex items-center space-x-2 border border-border rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 hover:bg-accent rounded-l-md transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 hover:bg-accent rounded-r-md transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => saveForLater(item.id)}
                        className="text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Save for Later
                      </button>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg font-semibold text-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            {/* Promo Code */}
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-medium text-card-foreground mb-3 flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                Promo Code
              </h4>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
                <button
                  onClick={applyPromoCode}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"
                >
                  Apply
                </button>
              </div>
              {promoCode === 'SAVE10' && (
                <p className="text-sm text-green-600 mt-2">✓ Code applied: $10 off</p>
              )}
            </div>

            {/* Reward Points */}
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-medium text-card-foreground mb-3 flex items-center">
                <Gift className="h-4 w-4 mr-2" />
                Reward Points
              </h4>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Available: {availablePoints} points</p>
                  <p className="text-sm text-muted-foreground">Value: ${pointsValue.toFixed(2)}</p>
                </div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={useRewardPoints}
                    onChange={(e) => setUseRewardPoints(e.target.checked)}
                    className="rounded border-border"
                  />
                  <span className="ml-2 text-sm">Use points</span>
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Order Summary</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                {promoDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Promo Code Discount</span>
                    <span>-${promoDiscount.toFixed(2)}</span>
                  </div>
                )}
                
                {rewardDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Reward Points</span>
                    <span>-${rewardDiscount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors mt-6 font-medium">
                Proceed to Checkout
              </button>
              
              <div className="mt-4 text-center space-y-1">
                <p className="text-sm text-muted-foreground">
                  {shipping > 0 && `Free shipping on orders over $50`}
                </p>
                <p className="text-xs text-muted-foreground">
                  Secure checkout with SSL encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
