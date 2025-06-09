import React from 'react';
import { MessageCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react';
const SupportStatus = () => {
  const tickets = [{
    id: '#SUP-001',
    subject: 'Order delivery issue',
    status: 'responded',
    lastUpdate: '2 hours ago',
    priority: 'high'
  }, {
    id: '#SUP-002',
    subject: 'Payment method question',
    status: 'pending',
    lastUpdate: '1 day ago',
    priority: 'medium'
  }];
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'pending':
        return {
          icon: Clock,
          color: 'text-yellow-600',
          bg: 'bg-yellow-100',
          text: 'Pending'
        };
      case 'responded':
        return {
          icon: MessageCircle,
          color: 'text-blue-600',
          bg: 'bg-blue-100',
          text: 'Responded'
        };
      case 'closed':
        return {
          icon: CheckCircle,
          color: 'text-green-600',
          bg: 'bg-green-100',
          text: 'Closed'
        };
      default:
        return {
          icon: AlertCircle,
          color: 'text-gray-600',
          bg: 'bg-gray-100',
          text: 'Unknown'
        };
    }
  };
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500';
      case 'medium':
        return 'border-l-yellow-500';
      case 'low':
        return 'border-l-green-500';
      default:
        return 'border-l-gray-500';
    }
  };
  if (tickets.length === 0) return null;
  return <div className="flex-col sm:flex-row text-sm, text-xs mt-4, gap-2 w-full sm:justify-between ">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground flex items-center">
          <MessageCircle className="h-5 w-5 mr-2 text-primary" />
          Support Status
        </h3>
        <span className="text-sm text-muted-foreground">{tickets.length} active tickets</span>
      </div>

      <div className="space-y-3">
        {tickets.map(ticket => {
        const statusInfo = getStatusInfo(ticket.status);
        const StatusIcon = statusInfo.icon;
        return <div key={ticket.id} className={`p-4 border-l-4 rounded-r-lg bg-accent/20 hover:bg-accent/40 transition-all duration-300 hover:scale-[1.01] cursor-pointer ${getPriorityColor(ticket.priority)}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${statusInfo.bg}`}>
                    <StatusIcon className={`h-4 w-4 ${statusInfo.color}`} />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">{ticket.id}</p>
                    <p className="text-sm text-muted-foreground">{ticket.subject}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusInfo.bg} ${statusInfo.color}`}>
                    {statusInfo.text}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">{ticket.lastUpdate}</p>
                </div>
              </div>
            </div>;
      })}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <button className="w-full text-center text-sm text-primary hover:text-primary/80 transition-colors">
          View All Support Tickets
        </button>
      </div>
    </div>;
};
export default SupportStatus;