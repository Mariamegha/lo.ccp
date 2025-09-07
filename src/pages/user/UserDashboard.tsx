import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserNavbar } from '@/components/UserNavbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Camera, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Heart,
  Leaf,
  Activity
} from 'lucide-react';
import { ReportIssueModal } from '../../components/ReportIssueModal.tsx';
import { useAuth } from '../../contexts/AuthContext';
import cyclingBenefits from '../../assets/cycling-benefits.jpg';

const UserDashboard = () => {
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const { user } = useAuth();

  const stats = [
    { title: 'Total Reports', value: '12', icon: MapPin, color: 'text-primary' },
    { title: 'Issues Resolved', value: '8', icon: CheckCircle, color: 'text-success' },
    { title: 'Issues Pending', value: '4', icon: Clock, color: 'text-warning' },
  ];

  const benefitsData = [
    {
      title: 'Health Benefits',
      description: 'Cycling improves cardiovascular health and builds muscle strength',
      icon: Heart,
      color: 'text-red-500',
    },
    {
      title: 'Environmental Impact',
      description: 'Reduce carbon footprint by choosing cycling over driving',
      icon: Leaf,
      color: 'text-success',
    },
    {
      title: 'Fitness & Wellness',
      description: 'Low-impact exercise that boosts mental health and endurance',
      icon: Activity,
      color: 'text-accent',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <UserNavbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-muted-foreground text-lg">
            Help make cycling safer in your community
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Card className="card-soft bg-gradient-primary text-white overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Report a Cycling Issue</h2>
                  <p className="opacity-90">
                    Spotted a pothole, broken bike lane, or safety concern? Let us know!
                  </p>
                </div>
                <Button 
                  variant="secondary"
                  size="lg"
                  onClick={() => setReportModalOpen(true)}
                  className="shrink-0"
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Report Issue
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="card-soft card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 bg-muted rounded-xl ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Cycling Awareness Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-6">Why Cycling Matters</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Benefits Cards */}
            <div className="space-y-4">
              {benefitsData.map((benefit, index) => (
                <Card key={index} className="card-soft card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-muted rounded-xl ${benefit.color}`}>
                        <benefit.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Image */}
            <div className="relative">
              <img 
                src={cyclingBenefits} 
                alt="Cycling benefits illustration" 
                className="rounded-xl w-full h-full object-cover shadow-[var(--shadow-card)]"
              />
              <div className="absolute inset-0 bg-gradient-secondary opacity-10 rounded-xl"></div>
            </div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="card-soft">
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
              <CardDescription>Your latest cycling issue reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: 1, description: 'Pothole on Main St bike lane', status: 'Fixed', date: '2 days ago' },
                  { id: 2, description: 'Broken traffic light at Oak Ave', status: 'In Progress', date: '5 days ago' },
                  { id: 3, description: 'Missing bike lane signage', status: 'Pending', date: '1 week ago' },
                ].map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium">{report.description}</p>
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </div>
                    <Badge 
                      className={
                        report.status === 'Fixed' ? 'status-fixed' :
                        report.status === 'In Progress' ? 'status-progress' :
                        'status-pending'
                      }
                    >
                      {report.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <ReportIssueModal 
        open={reportModalOpen} 
        onOpenChange={setReportModalOpen} 
      />
    </div>
  );
};

export default UserDashboard;