
import React from 'react';
import { ShoppingCart, Package, Gift, RotateCcw, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickActions = () => {
  const quickActions = [
    {
      title: 'Add Top Product to Cart',
      subtitle: 'Wireless Headphones - $79.99',
      icon: Plus,
      action: () => console.log('Added top product to cart'),
      color: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&auto=format'
    },
    {
      title: 'Track Latest Order',
      subtitle: 'Order #ORD-001',
      icon: Package,
      action: () => console.log('Tracking latest order'),
      color: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&auto=format'
    },
    {
      title: 'Apply Promo Code',
      subtitle: 'SAVE20 - 20% Off',
      icon: Gift,
      action: () => console.log('Applying promo code'),
      color: 'bg-purple-500',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&auto=format'
    },
    {
      title: 'Reorder Last Purchase',
      subtitle: 'Coffee Mug Set',
      icon: RotateCcw,
      action: () => console.log('Reordering last purchase'),
      color: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop&auto=format'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
        <ShoppingCart className="h-5 w-5 mr-2 text-primary" />
        Quick Actions
      </h3>
      
      <div className="space-y-3">
        {quickActions.map((action, index) => {
          const IconComponent = action.icon;
          return (
            <button
              key={index}
              onClick={action.action}
              className="w-full flex items-center p-3 bg-accent/30 hover:bg-accent/60 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-md group"
            >
              <div className="relative mr-3">
                <img 
                  src={action.image} 
                  alt={action.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className={`absolute -bottom-1 -right-1 p-1 ${action.color} rounded-full`}>
                  <IconComponent className="h-3 w-3 text-white" />
                </div>
              </div>
              
              <div className="flex-1 text-left">
                <p className="font-medium text-card-foreground group-hover:text-primary transition-colors">
                  {action.title}
                </p>
                <p className="text-sm text-muted-foreground">{action.subtitle}</p>
              </div>
              
              <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <Link 
          to="/products"
          className="block w-full text-center py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-md"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default QuickActions;
