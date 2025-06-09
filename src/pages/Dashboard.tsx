import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import DashboardCard from '../components/dashboard/DashboardCard';
import RecentOrders from '../components/dashboard/RecentOrders';
import NotificationsPanel from '../components/dashboard/NotificationsPanel';
import AnalyticsWidgets from '../components/dashboard/AnalyticsWidgets';
import QuickActions from '../components/dashboard/QuickActions';
import RecentActivity from '../components/dashboard/RecentActivity';
import PersonalizedRecommendations from '../components/dashboard/PersonalizedRecommendations';
import SupportStatus from '../components/dashboard/SupportStatus';
import ThemeToggle from '../components/dashboard/ThemeToggle';
import { Package, ShoppingCart, Gift, TrendingUp } from 'lucide-react';
const Dashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const trackLatestOrder = () => {
    console.log('Tracking latest order');
  };
  return <Layout>
      <div className="space-y-6">
        {/* Header Section with Theme Toggle */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-foreground text-base">Welcome back, Sarah!</h1>
            <p className="text-muted-foreground mt-1">Here's what's happening with your account</p>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setShowNotifications(!showNotifications)} className="relative p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-105">
              <Package className="h-5 w-5 text-primary" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Notifications Panel */}
        {showNotifications && <NotificationsPanel />}

        {/* Support Status */}
        <SupportStatus />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard title="Total Orders" value="24" icon={Package} trend={{
          value: "12%",
          isPositive: true
        }} />
          <DashboardCard title="Cart Items" value="3" icon={ShoppingCart} subtitle="Ready to checkout" />
          <DashboardCard title="Reward Points" value="1,250" icon={Gift} subtitle="$12.50 value" />
          <DashboardCard title="Total Spent" value="$2,847" icon={TrendingUp} trend={{
          value: "8%",
          isPositive: true
        }} />
        </div>

        {/* Analytics Widgets */}
        <AnalyticsWidgets />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <RecentOrders />
            <RecentActivity />
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <QuickActions />
            <PersonalizedRecommendations />
          </div>
        </div>
      </div>
    </Layout>;
};
export default Dashboard;