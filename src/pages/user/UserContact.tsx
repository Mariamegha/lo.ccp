import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserNavbar } from '@/components/UserNavbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const UserContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'support@cloudcycle.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '(555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '123 Cycling Street, Bike City',
      description: 'Visit us in person'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <UserNavbar />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="card-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your inquiry, suggestion, or issue..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="card-soft">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Multiple ways to reach our team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-xl">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="font-medium text-primary">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-soft bg-gradient-secondary text-secondary-foreground">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="mb-4">
                  For urgent cycling safety issues, please use the Report Issue feature 
                  in your dashboard for faster processing.
                </p>
                <Button variant="outline" size="sm">
                  Go to Dashboard
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How long does it take to process a report?",
                answer: "Most reports are reviewed within 24-48 hours. Urgent safety issues are prioritized."
              },
              {
                question: "Can I track the status of my reports?",
                answer: "Yes! Check the 'My Reports' section to see real-time updates on all your submissions."
              },
              {
                question: "What types of issues can I report?",
                answer: "Any cycling infrastructure problems: potholes, broken bike lanes, missing signage, debris, etc."
              },
              {
                question: "Is there a mobile app available?",
                answer: "Currently we're web-based, but a mobile app is in development for easier reporting on-the-go."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default UserContact;