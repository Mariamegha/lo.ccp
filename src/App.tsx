import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Login from "./pages/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserReports from "./pages/user/UserReports";
import UserContact from "./pages/user/UserContact";
import AdminReports from "./pages/admin/AdminReports";
import AdminContact from "./pages/admin/AdminContact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode; allowedRoles: string[] }) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (!allowedRoles.includes(user?.role || '')) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

// Public Route Component (redirects if already authenticated)
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to={user?.role === 'admin' ? '/admin' : '/dashboard'} replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            
            {/* User Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute allowedRoles={['user']}>
                <UserDashboard />
              </ProtectedRoute>
            } />
            <Route path="/my-reports" element={
              <ProtectedRoute allowedRoles={['user']}>
                <UserReports />
              </ProtectedRoute>
            } />
            <Route path="/contact" element={
              <ProtectedRoute allowedRoles={['user']}>
                <UserContact />
              </ProtectedRoute>
            } />
            
            {/* Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/reports" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminReports />
              </ProtectedRoute>
            } />
            <Route path="/admin/contact" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminContact />
              </ProtectedRoute>
            } />
            
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;