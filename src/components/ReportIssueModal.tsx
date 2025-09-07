import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { MapPin, Camera, Upload } from 'lucide-react';

interface ReportIssueModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ReportIssueModal = ({ open, onOpenChange }: ReportIssueModalProps) => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!description || !location) {
      toast({
        title: 'Missing Fields',
        description: 'Please provide both a description and location.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: 'Issue Reported',
        description: 'Your issue has been successfully reported.',
      });
      
      // Reset form
      setDescription('');
      setLocation('');
      setImage(null);
      onOpenChange(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit report. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Report an Issue</DialogTitle>
          <DialogDescription>
            Help us improve by reporting infrastructure issues you encounter.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="description">Issue Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the issue you encountered..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="location"
                placeholder="Enter location or address"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">Photo (Optional)</Label>
            <div className="flex items-center gap-2">
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('image')?.click()}
                className="flex items-center gap-2"
              >
                <Camera className="h-4 w-4" />
                {image ? 'Change Photo' : 'Add Photo'}
              </Button>
              {image && (
                <span className="text-sm text-muted-foreground">
                  {image.name}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Report'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
