
import React from 'react';
import { ShoppingCart, Heart, Package, X, Clock } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      action: 'Added to cart',
      item: 'Wireless Bluetooth Headphones',
      time: '5 minutes ago',
      icon: ShoppingCart,
      color: 'text-green-600',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&auto=format'
    },
    {
      id: 2,
      action: 'Added to wishlist',
      item: 'Smart Phone Case with Stand',
      time: '1 hour ago',
      icon: Heart,
      color: 'text-red-600',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&auto=format'
    },
    {
      id: 3,
      action: 'Order placed',
      item: 'Coffee Mug Set - Order #ORD-001',
      time: '2 days ago',
      icon: Package,
      color: 'text-blue-600',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&auto=format'
    },
    {
      id: 4,
      action: 'Order canceled',
      item: 'Premium Notebook Set',
      time: '3 days ago',
      icon: X,
      color: 'text-gray-600',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop&auto=format'
    },
    {
      id: 5,
      action: 'Wishlist updated',
      item: 'Removed 2 items from wishlist',
      time: '1 week ago',
      icon: Heart,
      color: 'text-orange-600',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=100&h=100&fit=crop&auto=format'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground flex items-center">
          <Clock className="h-5 w-5 mr-2 text-primary" />
          Recent Activity
        </h3>
        <button className="text-sm text-primary hover:text-primary/80 transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const IconComponent = activity.icon;
          return (
            <div
              key={activity.id}
              className="flex items-center p-3 bg-accent/20 hover:bg-accent/40 rounded-lg transition-all duration-300 hover:scale-[1.01] cursor-pointer group"
            >
              <div className="relative mr-3">
                <img 
                  src={activity.image} 
                  alt={activity.item}
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div className="absolute -bottom-1 -right-1 p-1 bg-background rounded-full shadow-sm">
                  <IconComponent className={`h-3 w-3 ${activity.color}`} />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="font-medium text-card-foreground group-hover:text-primary transition-colors">
                  {activity.action}
                </p>
                <p className="text-sm text-muted-foreground truncate">{activity.item}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
              
              <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
