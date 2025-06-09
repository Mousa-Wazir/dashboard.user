
import React from 'react';
import { TrendingUp, Eye, ShoppingBag, Star } from 'lucide-react';

const AnalyticsWidgets = () => {
  const analytics = [
    {
      title: 'Orders This Month',
      value: '12',
      change: '+23%',
      positive: true,
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=100&fit=crop&auto=format'
    },
    {
      title: 'Most Viewed Products',
      value: 'Headphones',
      change: '156 views',
      positive: true,
      icon: Eye,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop&auto=format'
    },
    {
      title: 'Spending Trend',
      value: '$847',
      change: '+15%',
      positive: true,
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop&auto=format'
    },
    {
      title: 'Rewards This Week',
      value: '150 pts',
      change: '+30 pts',
      positive: true,
      icon: Star,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=100&fit=crop&auto=format'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {analytics.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className="relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer"
          >
            <div className="relative h-24 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
              <div className="absolute top-3 right-3 p-2 bg-background/90 rounded-lg">
                <IconComponent className="h-4 w-4 text-primary" />
              </div>
            </div>
            
            <div className="p-4">
              <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
              <p className="text-xl font-bold text-card-foreground mt-1">{item.value}</p>
              <div className="flex items-center mt-2">
                <span className={`text-sm font-medium ${
                  item.positive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.change}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnalyticsWidgets;
