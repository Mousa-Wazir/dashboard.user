
import React from 'react';
import Layout from '../components/layout/Layout';
import DashboardCard from '../components/dashboard/DashboardCard';
import RecentOrders from '../components/dashboard/RecentOrders';
import { Package, ShoppingCart, Gift, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const trackLatestOrder = () => {
    console.log('Tracking latest order');
    // This would typically open a modal or navigate to order tracking
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Sarah!</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your account</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Orders"
            value="24"
            icon={Package}
            trend={{ value: "12%", isPositive: true }}
          />
          <DashboardCard
            title="Cart Items"
            value="3"
            icon={ShoppingCart}
            subtitle="Ready to checkout"
          />
          <DashboardCard
            title="Reward Points"
            value="1,250"
            icon={Gift}
            subtitle="$12.50 value"
          />
          <DashboardCard
            title="Total Spent"
            value="$2,847"
            icon={TrendingUp}
            trend={{ value: "8%", isPositive: true }}
          />
        </div>

        {/* Recent Orders and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentOrders />
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link 
                to="/products"
                className="block w-full text-left p-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Continue Shopping
              </Link>
              <button 
                onClick={trackLatestOrder}
                className="w-full text-left p-3 border border-border rounded-md hover:bg-accent transition-colors"
              >
                Track Latest Order
              </button>
              <Link 
                to="/wishlist"
                className="block w-full text-left p-3 border border-border rounded-md hover:bg-accent transition-colors"
              >
                View Wishlist
              </Link>
              <Link 
                to="/rewards"
                className="block w-full text-left p-3 border border-border rounded-md hover:bg-accent transition-colors"
              >
                Redeem Rewards
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
