import React from 'react';
import { motion } from 'framer-motion';
import { AdminNavbar } from '@/components/AdminNavbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Users,
  BarChart3
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();

  const stats = [
    { title: 'Total Issues', value: '247', icon: MapPin, color: 'text-primary', change: '+12%' },
    { title: 'In Progress', value: '48', icon: Clock, color: 'text-warning', change: '+8%' },
    { title: 'Issues Fixed', value: '189', icon: CheckCircle, color: 'text-success', change: '+23%' },
    { title: 'Urgent Issues', value: '10', icon: AlertTriangle, color: 'text-destructive', change: '-5%' },
  ];

  const recentReports = [
    { id: 1, description: 'Pothole on Elm Street bike lane', location: 'Elm St & 2nd Ave', priority: 'High', date: '2 hours ago' },
    { id: 2, description: 'Broken bike rack at City Park', location: 'City Park', priority: 'Medium', date: '4 hours ago' },
    { id: 3, description: 'Missing traffic light button', location: 'Main St & Oak Ave', priority: 'High', date: '6 hours ago' },
    { id: 4, description: 'Debris in bike lane', location: 'River Road', priority: 'Low', date: '8 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Monitor and manage cycling infrastructure reports
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="card-soft card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-muted rounded-xl ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className={`text-sm font-medium ${
                    stat.change.startsWith('+') ? 'text-success' : 'text-destructive'
                  }`}>
                    {stat.change}
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm font-medium">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Reports */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="card-soft">
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Latest cycling infrastructure issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{report.description}</p>
                        <p className="text-sm text-muted-foreground">{report.location}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`text-xs px-2 py-1 rounded ${
                            report.priority === 'High' ? 'bg-destructive/10 text-destructive' :
                            report.priority === 'Medium' ? 'bg-warning/10 text-warning' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {report.priority}
                          </span>
                          <span className="text-xs text-muted-foreground">{report.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Analytics Overview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="card-soft">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Administrative tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-secondary rounded-xl text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-secondary-foreground" />
                    <p className="font-medium text-secondary-foreground">Active Users</p>
                    <p className="text-2xl font-bold text-secondary-foreground">1,247</p>
                  </div>
                  <div className="p-4 bg-gradient-accent rounded-xl text-center">
                    <BarChart3 className="h-8 w-8 mx-auto mb-2 text-accent-foreground" />
                    <p className="font-medium text-accent-foreground">This Week</p>
                    <p className="text-2xl font-bold text-accent-foreground">32</p>
                  </div>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-xl">
                  <h4 className="font-medium mb-2">System Status</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Database</span>
                      <span className="text-sm text-success">Online</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">File Storage</span>
                      <span className="text-sm text-success">Online</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Email Service</span>
                      <span className="text-sm text-success">Online</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;