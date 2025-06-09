import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { User, MapPin, CreditCard, Globe, Palette, Shield, Camera, Upload, Crop } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileImage, setProfileImage] = useState('/placeholder.svg');
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  });
  const tabs = [{
    id: 'profile',
    name: 'Profile',
    icon: User
  }, {
    id: 'addresses',
    name: 'Addresses',
    icon: MapPin
  }, {
    id: 'payment',
    name: 'Payment',
    icon: CreditCard
  }, {
    id: 'preferences',
    name: 'Preferences',
    icon: Globe
  }, {
    id: 'appearance',
    name: 'Appearance',
    icon: Palette
  }, {
    id: 'security',
    name: 'Security',
    icon: Shield
  }];
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <div className="space-y-6">
            <h3 className="text-lg font-semibold">Profile Information</h3>
            
            {/* Profile Image Section */}
            <div className="flex items-center space-x-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={profileImage} alt="Profile" />
                <AvatarFallback className="text-2xl">SJ</AvatarFallback>
              </Avatar>
              <div className="flex-col md:flex-row md:justify-between text-sm, font-semibold w-full ">
                <div className="flex space-x-2">
                  <label className="cursor-pointer bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm flex items-center space-x-2">
                    <Upload className="h-4 w-4" />
                    <span>Upload Photo</span>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                  <button className="border border-border px-4 py-2 rounded-md hover:bg-accent transition-colors text-sm flex items-center space-x-2">
                    <Crop className="h-4 w-4" />
                    <span>Crop</span>
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Recommended: Square image, at least 200x200px
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input type="text" defaultValue="Sarah" className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input type="text" defaultValue="Johnson" className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" defaultValue="sarah.johnson@email.com" className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Bio</label>
                <textarea rows={3} placeholder="Tell us about yourself..." className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
          </div>;
      case 'payment':
        return <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Payment Methods</h3>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Add Payment Method
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Credit Card */}
              <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>
                    <span className="font-medium">Credit Card</span>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Default</span>
                </div>
                <p className="text-muted-foreground text-sm">**** **** **** 1234</p>
                <p className="text-muted-foreground text-sm">Expires 12/26</p>
              </div>

              {/* PayPal */}
              <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">PP</span>
                  </div>
                  <span className="font-medium">PayPal</span>
                </div>
                <p className="text-muted-foreground text-sm">sarah.johnson@email.com</p>
                <p className="text-green-600 text-sm">Verified</p>
              </div>

              {/* EasyPaisa */}
              <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-6 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">EP</span>
                  </div>
                  <span className="font-medium">EasyPaisa</span>
                </div>
                <p className="text-muted-foreground text-sm">+92 300 1234567</p>
                <p className="text-green-600 text-sm">Connected</p>
              </div>

              {/* JazzCash */}
              <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-6 bg-orange-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">JC</span>
                  </div>
                  <span className="font-medium">JazzCash</span>
                </div>
                <p className="text-muted-foreground text-sm">+92 321 7654321</p>
                <p className="text-green-600 text-sm">Connected</p>
              </div>

              {/* Bank Transfer */}
              <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow md:col-span-2">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-6 bg-gray-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">BK</span>
                  </div>
                  <span className="font-medium">Bank Transfer</span>
                </div>
                <p className="text-muted-foreground text-sm">Account ending in 5678</p>
                <p className="text-muted-foreground text-sm">Standard Chartered Bank</p>
              </div>
            </div>
          </div>;
      case 'appearance':
        return <div className="space-y-6">
            <h3 className="text-lg font-semibold">Appearance</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-3">Theme</label>
                <div className="grid grid-cols-3 gap-3">
                  <button onClick={() => setTheme('light')} className={`p-4 border-2 rounded-lg transition-colors ${theme === 'light' ? 'border-primary bg-primary/10' : 'border-border'}`}>
                    <div className="w-full h-12 bg-white border border-gray-200 rounded mb-2"></div>
                    <span className="text-left -translate-y-2 ">Light</span>
                  </button>
                  <button onClick={() => setTheme('dark')} className={`p-4 border-2 rounded-lg transition-colors ${theme === 'dark' ? 'border-primary bg-primary/10' : 'border-border'}`}>
                    <div className="w-full h-12 bg-gray-900 border border-gray-700 rounded mb-2"></div>
                    <span className="text-sm font-medium">Dark</span>
                  </button>
                  <button onClick={() => setTheme('system')} className={`p-4 border-2 rounded-lg transition-colors ${theme === 'system' ? 'border-primary bg-primary/10' : 'border-border'}`}>
                    <div className="w-full h-12 bg-gradient-to-r from-white to-gray-900 border border-gray-400 rounded mb-2"></div>
                    <span className="text-sm py-0 my-0 mx-0 px-0 font-medium">System</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Font Size</label>
                <select className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Small</option>
                  <option selected>Medium</option>
                  <option>Large</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Accent Color</label>
                <div className="flex space-x-2">
                  {['blue', 'green', 'purple', 'red', 'orange'].map(color => <button key={color} className={`w-8 h-8 rounded-full border-2 border-white shadow-md bg-${color}-500`} />)}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Reduce Motion</p>
                  <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
                </div>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-border" />
                </label>
              </div>
            </div>
          </div>;
      case 'security':
        return <div className="space-y-6">
            <h3 className="text-lg font-semibold">Security & Privacy</h3>
            
            <div className="space-y-6">
              {/* Password */}
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-medium mb-3">Password</h4>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Change Password
                </button>
                <p className="text-sm text-muted-foreground mt-2">
                  Last changed 3 months ago
                </p>
              </div>

              {/* Two-Factor Authentication */}
              <div className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Two-Factor Authentication</h4>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-border" />
                  </label>
                </div>
              </div>

              {/* Notification Preferences */}
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-medium mb-4">Notification Preferences</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Email Notifications</span>
                    <label className="flex items-center">
                      <input type="checkbox" checked={notifications.email} onChange={e => setNotifications({
                      ...notifications,
                      email: e.target.checked
                    })} className="rounded border-border" />
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>SMS Notifications</span>
                    <label className="flex items-center">
                      <input type="checkbox" checked={notifications.sms} onChange={e => setNotifications({
                      ...notifications,
                      sms: e.target.checked
                    })} className="rounded border-border" />
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Push Notifications</span>
                    <label className="flex items-center">
                      <input type="checkbox" checked={notifications.push} onChange={e => setNotifications({
                      ...notifications,
                      push: e.target.checked
                    })} className="rounded border-border" />
                    </label>
                  </div>
                </div>
              </div>

              {/* Login Sessions */}
              <div className="border border-border rounded-lg p-4 flex-col text-sm, font-semibold d:flex-row md:justify-between w-full ">
                <h4 className="font-medium mb-3">Active Sessions</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Chrome on Windows</p>
                      <p className="text-sm text-muted-foreground">Current session • New York, NY</p>
                    </div>
                    <span className="text-sm text-green-600">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">iPhone Safari</p>
                      <p className="text-sm text-muted-foreground">2 hours ago • New York, NY</p>
                    </div>
                    <button className="text-sm text-destructive hover:text-destructive/80">
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>

              {/* Data & Privacy */}
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-medium mb-3">Data & Privacy</h4>
                <div className="space-y-2">
                  <button className="text-sm text-primary hover:text-primary/80">
                    Download Your Data
                  </button>
                  <br />
                  <button className="text-sm text-destructive hover:text-destructive/80">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>;
      case 'addresses':
        return <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Saved Addresses</h3>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Add Address
              </button>
            </div>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Home</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      123 Main Street<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Default</span>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      456 Business Ave<br />
                      San Francisco, CA 94107<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>;
      case 'preferences':
        return <div className="space-y-6">
            <h3 className="text-lg font-semibold">Preferences</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Language</label>
                <select className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>Urdu</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Currency</label>
                <select className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                  <option>PKR (₨)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Time Zone</label>
                <select className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Pacific Time (PT)</option>
                  <option>Eastern Time (ET)</option>
                  <option>Pakistan Standard Time (PST)</option>
                </select>
              </div>
            </div>
          </div>;
      default:
        return <div className="text-center py-8">
            <p className="text-muted-foreground">Settings for {activeTab} coming soon...</p>
          </div>;
    }
  };
  return <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="font-bold text-foreground text-2xl">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {tabs.map(tab => {
              const Icon = tab.icon;
              return <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors text-left ${activeTab === tab.id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-primary hover:bg-accent'}`}>
                    <Icon className="h-4 w-4" />
                    <span>{tab.name}</span>
                  </button>;
            })}
            </nav>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-lg p-6 flex-col md:flex-row md:justify-between text-sm, font-semibold w-full ">
              {renderTabContent()}
              
              <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-border">
                <button className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Settings;