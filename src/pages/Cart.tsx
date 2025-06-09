
import React from 'react';
import Layout from '../components/layout/Layout';
import { Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = [
    {
      id: '1',
      name: 'Wireless Bluetooth Headphones',
      price: 79.99,
      quantity: 1,
      image: '/placeholder.svg'
    },
    {
      id: '2',
      name: 'Smart Phone Case with Stand',
      price: 24.99,
      quantity: 2,
      image: '/placeholder.svg'
    },
    {
      id: '3',
      name: 'USB-C Charging Cable Set',
      price: 19.99,
      quantity: 1,
      image: '/placeholder.svg'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 9.99;
  const total = subtotal + shipping;

  const updateQuantity = (id: string, change: number) => {
    console.log('Update quantity for item:', id, 'change:', change);
  };

  const removeItem = (id: string) => {
    console.log('Remove item:', id);
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md bg-accent/30"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-card-foreground">{item.name}</h3>
                    <p className="text-lg font-semibold text-primary mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 hover:bg-accent rounded transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 hover:bg-accent rounded transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-card border border-border rounded-lg p-6 h-fit">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Order Summary</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
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
            
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">Free shipping on orders over $50</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
