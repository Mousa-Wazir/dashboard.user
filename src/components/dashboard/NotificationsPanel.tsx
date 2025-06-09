
import React from 'react';
import { Bell, ShoppingCart, Gift, Package, X } from 'lucide-react';

const NotificationsPanel = () => {
  const notifications = [
    {
      id: 1,
      type: 'order',
      title: 'Order Shipped',
      message: 'Your order #ORD-001 has been shipped and is on the way!',
      time: '2 minutes ago',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&auto=format',
      unread: true
    },
    {
      id: 2,
      type: 'cart',
      title: 'Cart Reminder',
      message: 'You have 3 items waiting in your cart. Complete your purchase now!',
      time: '1 hour ago',
      icon: ShoppingCart,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&auto=format',
      unread: true
    },
    {
      id: 3,
      type: 'promotion',
      title: 'Special Offer',
      message: '50% off on wireless headphones! Limited time offer.',
      time: '3 hours ago',
      icon: Gift,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&auto=format',
      unread: false
    },
    {
      id: 4,
      type: 'rewards',
      title: 'Points Earned',
      message: 'You earned 50 reward points from your recent purchase!',
      time: '1 day ago',
      icon: Gift,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop&auto=format',
      unread: false
    }
  ];

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'order': return 'border-l-blue-500 bg-blue-50/50';
      case 'cart': return 'border-l-orange-500 bg-orange-50/50';
      case 'promotion': return 'border-l-green-500 bg-green-50/50';
      case 'rewards': return 'border-l-purple-500 bg-purple-50/50';
      default: return 'border-l-gray-500 bg-gray-50/50';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 animate-fade-in shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground flex items-center">
          <Bell className="h-5 w-5 mr-2 text-primary" />
          Real-Time Notifications
        </h3>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {notifications.map((notification) => {
          const IconComponent = notification.icon;
          return (
            <div
              key={notification.id}
              className={`p-4 border-l-4 rounded-r-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer ${getNotificationColor(notification.type)} ${
                notification.unread ? 'ring-1 ring-primary/20' : ''
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="relative">
                  <img 
                    src={notification.image} 
                    alt="Notification"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 p-1 bg-background rounded-full shadow-sm">
                    <IconComponent className="h-3 w-3 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-card-foreground">{notification.title}</p>
                    {notification.unread && (
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <button className="w-full text-center text-sm text-primary hover:text-primary/80 transition-colors">
          View All Notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationsPanel;
