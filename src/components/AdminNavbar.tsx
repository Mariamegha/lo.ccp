import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useAuth } from '../contexts/AuthContext';
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  LogOut, 
  Bike,
  Shield
} from 'lucide-react';

export const AdminNavbar = () => {
  const { logout, user } = useAuth();
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { label: 'Reports', path: '/admin/reports', icon: FileText },
    { label: 'Messages', path: '/admin/contact', icon: MessageSquare },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card border-b border-border shadow-[var(--shadow-card)] sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/admin" className="flex items-center gap-2 font-bold text-xl">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Bike className="h-6 w-6 text-white" />
            </div>
            <span>CloudCycle Admin</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActivePath(item.path) ? "default" : "ghost"}
                  size="sm"
                  className="gap-2"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{user?.name}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActivePath(item.path) ? "default" : "ghost"}
                  size="sm"
                  className="gap-2 shrink-0"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};