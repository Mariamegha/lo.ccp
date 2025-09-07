import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AdminNavbar } from '@/components/AdminNavbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  MessageSquare, 
  Calendar, 
  Search, 
  Mail, 
  User,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminContact = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const messages = [
    {
      id: 1,
      name: 'John Cyclist',
      email: 'john.cyclist@email.com',
      subject: 'Question about report status',
      message: 'Hi, I submitted a report about a pothole on Main Street last week. Can you provide an update on the status? Thank you!',
      date: '2024-01-15',
      status: 'unread',
      priority: 'normal'
    },
    {
      id: 2,
      name: 'Mary Rider',
      email: 'mary.rider@email.com',
      subject: 'Suggestion for new bike lanes',
      message: 'I would like to suggest adding protected bike lanes on Oak Avenue. The traffic is quite heavy and it would make cycling much safer for everyone.',
      date: '2024-01-14',
      status: 'replied',
      priority: 'normal'
    },
    {
      id: 3,
      name: 'Bob Biker',
      email: 'bob.biker@email.com',
      subject: 'App feature request',
      message: 'Could you add a feature to track multiple issues in one report? Sometimes there are several problems in the same area.',
      date: '2024-01-13',
      status: 'unread',
      priority: 'low'
    },
    {
      id: 4,
      name: 'Alice Wheels',
      email: 'alice.wheels@email.com',
      subject: 'Urgent safety concern',
      message: 'There is a very dangerous situation on River Road where cars are parking in the bike lane during rush hour. This needs immediate attention!',
      date: '2024-01-12',
      status: 'replied',
      priority: 'high'
    },
    {
      id: 5,
      name: 'Tom Cycle',
      email: 'tom.cycle@email.com',
      subject: 'Thank you for fixing the issue',
      message: 'I wanted to thank you for quickly addressing the broken bike rack at the transit center. Great service!',
      date: '2024-01-11',
      status: 'replied',
      priority: 'normal'
    },
  ];

  const filteredMessages = messages.filter(message => 
    message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMarkAsRead = (messageId: number) => {
    toast({
      title: "Message Updated",
      description: `Message #${messageId} marked as read`,
    });
  };

  const handleReply = (messageId: number) => {
    toast({
      title: "Reply Draft",
      description: "Reply functionality would open here",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread': return 'status-pending';
      case 'replied': return 'status-fixed';
      default: return 'status-pending';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-destructive bg-destructive/10';
      case 'normal': return 'text-primary bg-primary/10';
      case 'low': return 'text-muted-foreground bg-muted/50';
      default: return 'text-muted-foreground bg-muted/50';
    }
  };

  const unreadCount = messages.filter(m => m.status === 'unread').length;

  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Contact Messages</h1>
          <p className="text-muted-foreground text-lg">
            Review and respond to user inquiries and feedback
          </p>
        </motion.div>

        {/* Stats and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="card-soft">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">{messages.length}</p>
                    <p className="text-sm text-muted-foreground">Total Messages</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-soft">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-warning" />
                  <div>
                    <p className="text-2xl font-bold">{unreadCount}</p>
                    <p className="text-sm text-muted-foreground">Unread</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-soft">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-success" />
                  <div>
                    <p className="text-2xl font-bold">{messages.length - unreadCount}</p>
                    <p className="text-sm text-muted-foreground">Replied</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-soft">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-2xl font-bold">95%</p>
                    <p className="text-sm text-muted-foreground">Response Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="card-soft">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search messages by name, email, or content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Messages List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {filteredMessages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className={`card-soft card-hover ${message.status === 'unread' ? 'border-primary/50' : ''}`}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-muted rounded-lg">
                          <User className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{message.name}</h3>
                          <p className="text-sm text-muted-foreground">{message.email}</p>
                          <p className="font-medium text-primary mt-1">{message.subject}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge className={getPriorityColor(message.priority)}>
                          {message.priority} priority
                        </Badge>
                        <Badge className={getStatusColor(message.status)}>
                          {message.status}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {new Date(message.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    {/* Message Content */}
                    <div className="pl-12 md:pl-16">
                      <p className="text-muted-foreground leading-relaxed">{message.message}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pl-12 md:pl-16">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleReply(message.id)}
                      >
                        Reply
                      </Button>
                      {message.status === 'unread' && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleMarkAsRead(message.id)}
                        >
                          Mark as Read
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredMessages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center py-12"
          >
            <Card className="card-soft">
              <CardContent className="p-12">
                <MessageSquare className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No messages found</h3>
                <p className="text-muted-foreground">
                  {searchTerm 
                    ? 'Try adjusting your search criteria'
                    : 'No contact messages have been received yet.'
                  }
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default AdminContact;