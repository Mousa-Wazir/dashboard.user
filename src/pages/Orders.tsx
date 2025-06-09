
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Package, Truck, CheckCircle, Eye, Download, RotateCcw, Search } from 'lucide-react';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      total: 124.97,
      status: 'delivered',
      items: 3,
      estimatedDelivery: '2024-01-18',
      trackingNumber: 'TRK123456789',
      products: ['Wireless Headphones', 'Phone Case', 'USB Cable']
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-12',
      total: 79.99,
      status: 'shipped',
      items: 1,
      estimatedDelivery: '2024-01-20',
      trackingNumber: 'TRK987654321',
      products: ['Premium Notebook Set']
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-10',
      total: 45.50,
      status: 'processing',
      items: 2,
      estimatedDelivery: '2024-01-22',
      trackingNumber: null,
      products: ['Laptop Stand', 'Coffee Mug']
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Package className="h-5 w-5 text-blue-500" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-orange-500" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Package className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-orange-100 text-orange-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const trackOrder = (trackingNumber: string) => {
    console.log('Tracking order:', trackingNumber);
  };

  const downloadInvoice = (orderId: string) => {
    console.log('Downloading invoice for:', orderId);
  };

  const requestRefund = (orderId: string) => {
    console.log('Requesting refund for:', orderId);
  };

  const viewOrderDetails = (orderId: string) => {
    console.log('Viewing details for:', orderId);
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.products.some(product => product.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Orders</h1>
          <p className="text-muted-foreground mt-1">Track and manage your orders</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search orders or products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="all">All Orders</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div key={order.id} className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(order.status)}
                      <span className="font-semibold text-card-foreground">{order.id}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Order Date</p>
                      <p className="font-medium">{new Date(order.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Amount</p>
                      <p className="font-medium text-primary">${order.total.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Items</p>
                      <p className="font-medium">{order.items} item(s)</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Est. Delivery</p>
                      <p className="font-medium">{new Date(order.estimatedDelivery).toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Products</p>
                    <p className="text-sm">{order.products.join(', ')}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 lg:flex-col lg:w-auto">
                  <button
                    onClick={() => viewOrderDetails(order.id)}
                    className="flex items-center space-x-2 px-3 py-2 border border-border rounded-md hover:bg-accent transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">View Details</span>
                  </button>
                  
                  {order.trackingNumber && (
                    <button
                      onClick={() => trackOrder(order.trackingNumber!)}
                      className="flex items-center space-x-2 px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      <Truck className="h-4 w-4" />
                      <span className="text-sm">Track Order</span>
                    </button>
                  )}
                  
                  <button
                    onClick={() => downloadInvoice(order.id)}
                    className="flex items-center space-x-2 px-3 py-2 border border-border rounded-md hover:bg-accent transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    <span className="text-sm">Invoice</span>
                  </button>
                  
                  {order.status === 'delivered' && (
                    <button
                      onClick={() => requestRefund(order.id)}
                      className="flex items-center space-x-2 px-3 py-2 border border-destructive text-destructive rounded-md hover:bg-destructive/10 transition-colors"
                    >
                      <RotateCcw className="h-4 w-4" />
                      <span className="text-sm">Refund</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-8">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No orders found matching your criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Orders;
