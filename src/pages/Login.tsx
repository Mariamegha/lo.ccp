import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Bike, Shield, User } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import cyclingHero from '../assets/cycling-hero.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'user' | 'admin'>('user');
  const { login, loading } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const success = await login(email, password, role);
    
    if (!success) {
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Welcome to CloudCycle!",
        description: `Successfully logged in as ${role}`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <img 
              src={cyclingHero} 
              alt="Modern cycling infrastructure" 
              className="rounded-2xl shadow-[var(--shadow-card)] w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-4xl font-bold mb-2">CloudCycle</h1>
              <p className="text-xl opacity-90">Making cycling safer, one report at a time</p>
            </div>
          </div>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md mx-auto"
        >
          <Card className="card-soft">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <Bike className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <CardDescription>
                Sign in to your CloudCycle account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select value={role} onValueChange={(value: 'user' | 'admin') => setRole(value)}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Cyclist
                        </div>
                      </SelectItem>
                      <SelectItem value="admin">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          Government Official
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  variant="hero"
                  size="lg"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Demo Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 p-4 bg-muted/50 rounded-xl text-sm text-muted-foreground text-center"
          >
            <p className="font-medium mb-2">Demo Credentials:</p>
            <p>Email: demo@cloudcycle.com • Password: demo123</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
