
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Search, MessageCircle, Phone, Mail, HelpCircle, ChevronDown, ChevronRight } from 'lucide-react';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    { value: 'all', label: 'All Topics' },
    { value: 'orders', label: 'Orders & Shipping' },
    { value: 'returns', label: 'Returns & Refunds' },
    { value: 'account', label: 'Account Management' },
    { value: 'payments', label: 'Payments & Billing' },
    { value: 'products', label: 'Products & Inventory' },
    { value: 'technical', label: 'Technical Support' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'orders',
      question: 'How can I track my order?',
      answer: 'You can track your order by going to "My Orders" in your account dashboard. Click on the "Track Order" button next to your order to see real-time updates. You\'ll also receive email notifications with tracking information once your order ships.'
    },
    {
      id: 2,
      category: 'orders',
      question: 'What are your shipping options and costs?',
      answer: 'We offer several shipping options: Standard shipping (5-7 business days) - Free on orders over $50, otherwise $9.99. Express shipping (2-3 business days) - $15.99. Overnight shipping (next business day) - $24.99. International shipping rates vary by destination.'
    },
    {
      id: 3,
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase for most items. Items must be in original condition with tags attached. To initiate a return, go to "My Orders" and click "Request Refund" next to the item. You\'ll receive a prepaid return label via email.'
    },
    {
      id: 4,
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page and enter your email address. We\'ll send you a password reset link. Follow the instructions in the email to create a new password. If you don\'t receive the email, check your spam folder.'
    },
    {
      id: 5,
      category: 'payments',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, EasyPaisa, JazzCash, and bank transfers. All payments are processed securely using SSL encryption.'
    },
    {
      id: 6,
      category: 'account',
      question: 'How do I update my profile information?',
      answer: 'Go to Settings > Profile to update your personal information, including name, email, phone number, and profile picture. You can also manage your addresses and payment methods from the Settings page.'
    },
    {
      id: 7,
      category: 'products',
      question: 'How do I add items to my wishlist?',
      answer: 'Click the heart icon on any product page or product card to add it to your wishlist. You can view your saved items by clicking "Wishlist" in the sidebar. From there, you can add items to your cart or remove them from your wishlist.'
    },
    {
      id: 8,
      category: 'account',
      question: 'How do reward points work?',
      answer: 'You earn points with every purchase and other activities. Points can be redeemed for discounts on future orders. Check your current balance and redemption options in the "Rewards" section of your account.'
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      availability: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      availability: 'Mon-Fri 9AM-6PM PST',
      action: '+1 (555) 123-4567'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email',
      availability: 'Response within 24 hours',
      action: 'support@localena.com'
    }
  ];

  const quickLinks = [
    { title: 'Shipping Information', description: 'Learn about our shipping policies and delivery times' },
    { title: 'Size Guide', description: 'Find the perfect fit with our comprehensive size charts' },
    { title: 'Care Instructions', description: 'How to care for your Localena products' },
    { title: 'Warranty Information', description: 'Understanding your product warranties' },
    { title: 'Privacy Policy', description: 'How we protect and use your personal information' },
    { title: 'Terms of Service', description: 'Our terms and conditions for using Localena' }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Help Center</h1>
          <p className="text-muted-foreground mt-2">How can we help you today?</p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-lg"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div key={option.title} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-card-foreground mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                <p className="text-xs text-muted-foreground mb-4">{option.availability}</p>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm">
                  {option.action}
                </button>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Frequently Asked Questions</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* FAQ List */}
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="border border-border rounded-lg">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-accent transition-colors"
                    >
                      <span className="font-medium text-card-foreground">{faq.question}</span>
                      {expandedFaq === faq.id ? (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-4 pb-4">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-8">
                  <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No articles found matching your search.</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.title}
                    className="w-full text-left p-3 hover:bg-accent rounded-lg transition-colors"
                  >
                    <h4 className="font-medium text-card-foreground text-sm">{link.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Status Page */}
            <div className="bg-card border border-border rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Website</span>
                  <span className="text-sm text-green-600 flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Payment Processing</span>
                  <span className="text-sm text-green-600 flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Order Management</span>
                  <span className="text-sm text-green-600 flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    Operational
                  </span>
                </div>
              </div>
              <button className="w-full mt-4 text-sm text-primary hover:text-primary/80 transition-colors">
                View All Status Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
