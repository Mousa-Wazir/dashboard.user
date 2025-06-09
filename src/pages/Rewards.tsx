import React from 'react';
import Layout from '../components/layout/Layout';
import { Gift, Star, Crown, Zap, ShoppingBag } from 'lucide-react';
const Rewards = () => {
  const currentPoints = 1250;
  const pointsValue = (currentPoints / 100).toFixed(2);
  const rewardsHistory = [{
    id: 1,
    action: 'Purchase Order #ORD-2024-001',
    points: 50,
    date: '2024-01-15',
    type: 'earned'
  }, {
    id: 2,
    action: 'Product Review',
    points: 25,
    date: '2024-01-14',
    type: 'earned'
  }, {
    id: 3,
    action: 'Redeemed $10 Discount',
    points: -1000,
    date: '2024-01-12',
    type: 'redeemed'
  }, {
    id: 4,
    action: 'Birthday Bonus',
    points: 200,
    date: '2024-01-01',
    type: 'earned'
  }];
  const rewardTiers = [{
    name: 'Bronze',
    minPoints: 0,
    benefits: ['1 point per $1 spent', 'Birthday bonus'],
    current: false
  }, {
    name: 'Silver',
    minPoints: 500,
    benefits: ['1.5 points per $1 spent', 'Free shipping'],
    current: true
  }, {
    name: 'Gold',
    minPoints: 2000,
    benefits: ['2 points per $1 spent', 'Early access to sales'],
    current: false
  }, {
    name: 'Platinum',
    minPoints: 5000,
    benefits: ['3 points per $1 spent', 'Personal shopper'],
    current: false
  }];
  const redeemOptions = [{
    id: 1,
    name: '$5 Discount',
    points: 500,
    description: 'Get $5 off your next purchase'
  }, {
    id: 2,
    name: '$10 Discount',
    points: 1000,
    description: 'Get $10 off your next purchase'
  }, {
    id: 3,
    name: '$25 Discount',
    points: 2500,
    description: 'Get $25 off your next purchase'
  }, {
    id: 4,
    name: 'Free Shipping',
    points: 200,
    description: 'Free shipping on any order'
  }];
  const redeemReward = (rewardId: number, points: number) => {
    console.log('Redeeming reward:', rewardId, 'for', points, 'points');
  };
  return <Layout>
      <div className="flex-col md:flex-row md:justify-between text-sm, font-semibold w-full ">
        <div>
          <h1 className="text-lg md:text-base lg:text-3xl ">Rewards Program</h1>
          <p className="text-muted-foreground mt-1">Earn points and unlock exclusive benefits</p>
        </div>

        {/* Points Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg p-6">
            <div className="flex items-center space-x-3">
              <Gift className="h-8 w-8" />
              <div>
                <p className="text-sm opacity-90">Current Points</p>
                <p className="text-3xl font-bold">{currentPoints.toLocaleString()}</p>
                <p className="text-sm opacity-90">${pointsValue} value</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center space-x-3">
              <Star className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-sm text-muted-foreground">Current Tier</p>
                <p className="text-2xl font-bold text-card-foreground">Silver</p>
                <p className="text-sm text-muted-foreground">500 points to Gold</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center space-x-3">
              <Zap className="h-8 w-8 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Points This Month</p>
                <p className="text-2xl font-bold text-card-foreground">275</p>
                <p className="text-sm text-green-600">+15% from last month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reward Tiers */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">Membership Tiers</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {rewardTiers.map(tier => <div key={tier.name} className={`p-4 rounded-lg border-2 ${tier.current ? 'border-primary bg-primary/10' : 'border-border bg-background'}`}>
                <div className="flex items-center space-x-2 mb-3">
                  <Crown className={`h-5 w-5 ${tier.current ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className={`font-medium ${tier.current ? 'text-primary' : 'text-card-foreground'}`}>
                    {tier.name}
                  </span>
                  {tier.current && <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                      Current
                    </span>}
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {tier.minPoints} points minimum
                </p>
                <ul className="text-xs space-y-1">
                  {tier.benefits.map((benefit, index) => <li key={index} className="text-muted-foreground">• {benefit}</li>)}
                </ul>
              </div>)}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Redeem Points */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Redeem Points</h3>
            <div className="space-y-4">
              {redeemOptions.map(option => <div key={option.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <h4 className="font-medium text-card-foreground">{option.name}</h4>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                    <p className="text-sm font-medium text-primary">{option.points} points</p>
                  </div>
                  <button onClick={() => redeemReward(option.id, option.points)} disabled={currentPoints < option.points} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${currentPoints >= option.points ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted text-muted-foreground cursor-not-allowed'}`}>
                    Redeem
                  </button>
                </div>)}
            </div>
          </div>

          {/* Points History */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Points History</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {rewardsHistory.map(item => <div key={item.id} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
                  <div>
                    <p className="text-sm font-medium text-card-foreground">{item.action}</p>
                    <p className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString()}</p>
                  </div>
                  <span className={`text-sm font-medium ${item.type === 'earned' ? 'text-green-600' : 'text-red-600'}`}>
                    {item.type === 'earned' ? '+' : ''}{item.points}
                  </span>
                </div>)}
            </div>
          </div>
        </div>

        {/* How to Earn More */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">How to Earn More Points</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-background rounded-lg">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium text-card-foreground">Make Purchases</p>
                <p className="text-sm text-muted-foreground">Earn 1-3 points per $1 spent</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-background rounded-lg">
              <Star className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium text-card-foreground">Write Reviews</p>
                <p className="text-sm text-muted-foreground">Get 25 points per review</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-background rounded-lg">
              <Gift className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium text-card-foreground">Special Events</p>
                <p className="text-sm text-muted-foreground">Bonus points on holidays</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Rewards;