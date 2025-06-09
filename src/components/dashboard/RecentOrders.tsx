
import React from 'react';
import { Package, Eye } from 'lucide-react';

const RecentOrders = () => {
  const orders = [
    {
      id: '#ORD-001',
      date: '2024-06-08',
      items: 'Wireless Headphones, Phone Case',
      total: '$129.99',
      status: 'Delivered'
    },
    {
      id: '#ORD-002',
      date: '2024-06-06',
      items: 'Laptop Stand, USB Cable',
      total: '$89.50',
      status: 'Shipped'
    },
    {
      id: '#ORD-003',
      date: '2024-06-04',
      items: 'Coffee Mug, Notebook Set',
      total: '$34.99',
      status: 'Processing'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">Recent Orders</h3>
        <Package className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between p-3 bg-accent/50 rounded-md">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium text-sm text-card-foreground">{order.id}</p>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{order.items}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-muted-foreground">{order.date}</p>
                <p className="font-semibold text-sm text-card-foreground">{order.total}</p>
              </div>
            </div>
            <button className="ml-4 p-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors">
              <Eye className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;
