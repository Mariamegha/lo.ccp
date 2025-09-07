import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserNavbar } from '@/components/UserNavbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Calendar, Filter, Search } from 'lucide-react';

const UserReports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const reports = [
    {
      id: 1,
      description: 'Large pothole in bike lane causing safety hazard',
      location: 'Main St & Oak Ave',
      status: 'Fixed',
      date: '2024-01-15',
      priority: 'High',
      image: '/placeholder-pothole.jpg'
    },
    {
      id: 2,
      description: 'Broken traffic light button for cyclists',
      location: 'Elm Street & 2nd Ave',
      status: 'In Progress',
      date: '2024-01-10',
      priority: 'Medium',
      image: '/placeholder-traffic.jpg'
    },
    {
      id: 3,
      description: 'Missing bike lane signage after construction',
      location: 'River Road near Bridge',
      status: 'Pending',
      date: '2024-01-08',
      priority: 'Low',
      image: '/placeholder-signage.jpg'
    },
    {
      id: 4,
      description: 'Debris blocking dedicated bike path',
      location: 'City Park Trail',
      status: 'Fixed',
      date: '2024-01-05',
      priority: 'Medium',
      image: '/placeholder-debris.jpg'
    },
    {
      id: 5,
      description: 'Damaged bike rack needs replacement',
      location: 'Downtown Transit Center',
      status: 'In Progress',
      date: '2024-01-03',
      priority: 'Low',
      image: '/placeholder-rack.jpg'
    },
  ];

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || report.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Fixed': return 'status-fixed';
      case 'In Progress': return 'status-progress';
      case 'Pending': return 'status-pending';
      default: return 'status-pending';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-destructive';
      case 'Medium': return 'text-warning';
      case 'Low': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

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
          <h1 className="text-3xl font-bold mb-2">My Reports</h1>
          <p className="text-muted-foreground text-lg">
            Track the status of your cycling issue reports
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <Card className="card-soft">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search reports..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="md:w-48">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in progress">In Progress</SelectItem>
                      <SelectItem value="fixed">Fixed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Reports Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {filteredReports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="card-soft card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Report Image */}
                    <div className="md:w-48 h-32 bg-muted rounded-lg flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-muted-foreground" />
                    </div>

                    {/* Report Details */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{report.description}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {report.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(report.date).toLocaleDateString()}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Badge className={getStatusColor(report.status)}>
                              {report.status}
                            </Badge>
                            <Badge variant="outline" className={getPriorityColor(report.priority)}>
                              {report.priority} Priority
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredReports.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center py-12"
          >
            <Card className="card-soft">
              <CardContent className="p-12">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No reports found</h3>
                <p className="text-muted-foreground">
                  {searchTerm || statusFilter !== 'all' 
                    ? 'Try adjusting your search or filter criteria'
                    : 'You haven\'t submitted any reports yet. Start by reporting a cycling issue!'
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

export default UserReports;