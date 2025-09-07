import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AdminNavbar } from '@/components/AdminNavbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MapPin, Calendar, Filter, Search, Image, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminReports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const { toast } = useToast();

  const reports = [
    {
      id: 1,
      description: 'Large pothole in bike lane causing safety hazard',
      location: 'Main St & Oak Ave',
      status: 'Pending',
      priority: 'High',
      date: '2024-01-15',
      userEmail: 'john.cyclist@email.com',
      hasImage: true
    },
    {
      id: 2,
      description: 'Broken traffic light button for cyclists',
      location: 'Elm Street & 2nd Ave',
      status: 'In Progress',
      priority: 'Medium',
      date: '2024-01-14',
      userEmail: 'mary.rider@email.com',
      hasImage: true
    },
    {
      id: 3,
      description: 'Missing bike lane signage after construction',
      location: 'River Road near Bridge',
      status: 'Fixed',
      priority: 'Low',
      date: '2024-01-13',
      userEmail: 'bob.biker@email.com',
      hasImage: false
    },
    {
      id: 4,
      description: 'Debris blocking dedicated bike path',
      location: 'City Park Trail',
      status: 'In Progress',
      priority: 'Medium',
      date: '2024-01-12',
      userEmail: 'alice.wheels@email.com',
      hasImage: true
    },
    {
      id: 5,
      description: 'Damaged bike rack needs replacement',
      location: 'Downtown Transit Center',
      status: 'Pending',
      priority: 'Low',
      date: '2024-01-11',
      userEmail: 'tom.cycle@email.com',
      hasImage: false
    },
  ];

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.userEmail.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || report.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesPriority = priorityFilter === 'all' || report.priority.toLowerCase() === priorityFilter.toLowerCase();
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleStatusChange = async (reportId: number, newStatus: string) => {
    // Simulate API call
    toast({
      title: "Status Updated",
      description: `Report #${reportId} status changed to ${newStatus}`,
    });
  };

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
      case 'High': return 'text-destructive bg-destructive/10';
      case 'Medium': return 'text-warning bg-warning/10';
      case 'Low': return 'text-muted-foreground bg-muted/50';
      default: return 'text-muted-foreground bg-muted/50';
    }
  };

  const statusOptions = ['Pending', 'In Progress', 'Fixed'];

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
          <h1 className="text-3xl font-bold mb-2">Reports Management</h1>
          <p className="text-muted-foreground text-lg">
            Review and manage all cycling infrastructure reports
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
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search reports, locations, or users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="lg:w-48">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in progress">In Progress</SelectItem>
                      <SelectItem value="fixed">Fixed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="lg:w-48">
                  <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priority</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Reports Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="card-soft">
            <CardHeader>
              <CardTitle>All Reports ({filteredReports.length})</CardTitle>
              <CardDescription>
                Manage cycling infrastructure issue reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12"></TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredReports.map((report, index) => (
                      <motion.tr
                        key={report.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="group"
                      >
                        <TableCell>
                          {report.hasImage && (
                            <div className="p-1 bg-muted/50 rounded">
                              <Image className="h-4 w-4 text-muted-foreground" />
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{report.description}</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {report.location}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{report.userEmail}</div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getPriorityColor(report.priority)}>
                            {report.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Select
                            value={report.status}
                            onValueChange={(value) => handleStatusChange(report.id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {statusOptions.map((status) => (
                                <SelectItem key={status} value={status}>
                                  {status}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {new Date(report.date).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {filteredReports.length === 0 && (
                <div className="text-center py-12">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">No reports found</h3>
                  <p className="text-muted-foreground">
                    {searchTerm || statusFilter !== 'all' || priorityFilter !== 'all'
                      ? 'Try adjusting your search or filter criteria'
                      : 'No cycling reports have been submitted yet.'
                    }
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default AdminReports;