import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, MapPin, FileText, Users, AlertTriangle, Calendar, CheckCircle, Camera, MessageSquare, BookOpen } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export const StaffDashboard = () => {
  const { profile } = useAuth();
  const [currentShift, setCurrentShift] = useState(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Staff Dashboard</h1>
          <p className="text-muted-foreground">Welcome, {profile?.full_name || profile?.email}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Clock className="h-4 w-4 mr-2" />
            Clock In
          </Button>
          <Button>
            <AlertTriangle className="h-4 w-4 mr-2" />
            Report Incident
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Hours This Week</p>
                <div className="text-2xl font-bold">42</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Current Assignment</p>
                <div className="text-sm font-bold">Westlands Office</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Tasks Complete</p>
                <div className="text-2xl font-bold">8/10</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Reports Filed</p>
                <div className="text-2xl font-bold">3</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="schedule" className="space-y-4">
        <TabsList>
          <TabsTrigger value="schedule">My Schedule</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
              <CardDescription>Your upcoming shifts and assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <div key={day} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{day}</h4>
                      <p className="text-sm text-muted-foreground">08:00 - 16:00 | Westlands Office</p>
                    </div>
                    <Badge variant="outline">Regular Shift</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Assignments</CardTitle>
              <CardDescription>Your active security assignments and locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Westlands Office Complex</h4>
                    <Badge>Active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Main entrance security and patrol duties</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    Westlands, Nairobi
                  </div>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Submit Reports</CardTitle>
              <CardDescription>File patrol reports, incidents, and daily logs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-medium">Patrol Report</h4>
                    <p className="text-sm text-muted-foreground mb-3">Log daily patrol activities</p>
                    <Button size="sm">Submit Report</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <AlertTriangle className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-medium">Incident Report</h4>
                    <p className="text-sm text-muted-foreground mb-3">Report security incidents</p>
                    <Button size="sm">Report Incident</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-medium">Photo Evidence</h4>
                    <p className="text-sm text-muted-foreground mb-3">Upload photos with reports</p>
                    <Button size="sm">Upload Photos</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="training" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Training & Certification</CardTitle>
              <CardDescription>View training materials and track certifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-primary mr-2" />
                      <div>
                        <h4 className="font-medium">Security Procedures Manual</h4>
                        <p className="text-sm text-muted-foreground">Latest security protocols and procedures</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <div>
                        <h4 className="font-medium">First Aid Certification</h4>
                        <p className="text-sm text-muted-foreground">Valid until: Dec 2024</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Certified</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Communication</CardTitle>
              <CardDescription>Messages and updates from management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Shift Change Notice</h4>
                    <span className="text-sm text-muted-foreground">2 hours ago</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Please note the schedule change for tomorrow's evening shift.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Reply
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Staff Profile</CardTitle>
              <CardDescription>Your employment details and personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <p className="text-sm text-muted-foreground mt-1">{profile?.full_name || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Employee ID</label>
                  <p className="text-sm text-muted-foreground mt-1">TS-{profile?.id?.slice(0, 8)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Department</label>
                  <p className="text-sm text-muted-foreground mt-1">Security Services</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Position</label>
                  <Badge variant="secondary" className="mt-1">{profile?.role}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};