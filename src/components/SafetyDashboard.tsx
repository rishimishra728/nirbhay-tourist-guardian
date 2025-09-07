import { Shield, MapPin, AlertTriangle, Users, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SafetyDashboardProps {
  safetyScore: number;
  userName: string;
  isTracking: boolean;
  onPanicPress: () => void;
  onShowDigitalId: () => void;
}

export const SafetyDashboard = ({ 
  safetyScore, 
  userName, 
  isTracking, 
  onPanicPress, 
  onShowDigitalId 
}: SafetyDashboardProps) => {
  const getSafetyLevel = (score: number) => {
    if (score >= 80) return { level: "Low-risk", color: "bg-success", textColor: "text-success" };
    if (score >= 60) return { level: "Moderate", color: "bg-warning", textColor: "text-warning" };
    return { level: "High-risk", color: "bg-emergency", textColor: "text-emergency" };
  };

  const safety = getSafetyLevel(safetyScore);

  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Tourist Safety App</h1>
          <p className="text-muted-foreground">Welcome, {userName}</p>
        </div>
        <Button variant="ghost" size="icon" onClick={onShowDigitalId}>
          <Shield className="h-6 w-6" />
        </Button>
      </div>

      {/* Map Placeholder */}
      <Card className="relative overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-600/10" />
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-primary/30 flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
          {isTracking && (
            <Badge className="absolute top-4 left-4 bg-success text-success-foreground">
              <MapPin className="w-3 h-3 mr-1" />
              Live Tracking
            </Badge>
          )}
        </div>
      </Card>

      {/* Digital ID Card */}
      <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={onShowDigitalId}>
        <CardContent className="flex items-center space-x-4 p-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
            <span className="text-primary-foreground font-semibold">
              {userName.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Digital ID</h3>
            <p className="text-sm text-muted-foreground">Valid until: 30 Apr</p>
          </div>
          <div className="text-right">
            <span className="text-xs text-muted-foreground">Tap to view</span>
          </div>
        </CardContent>
      </Card>

      {/* Safety Score */}
      <Card>
        <CardContent className="flex items-center space-x-4 p-4">
          <div className={`w-16 h-16 rounded-full ${safety.color} flex items-center justify-center text-white font-bold text-xl`}>
            {safetyScore}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Safety Score</h3>
            <p className={`text-sm ${safety.textColor} font-medium`}>{safety.level}</p>
          </div>
        </CardContent>
      </Card>

      {/* Panic Button */}
      <Button 
        variant="panic" 
        size="lg" 
        className="w-full h-16 rounded-2xl"
        onClick={onPanicPress}
      >
        <AlertTriangle className="w-6 h-6 mr-2" />
        Panic Button
      </Button>

      {/* Current Alert */}
      <Card className="border-warning bg-warning/5">
        <CardContent className="flex items-center space-x-3 p-4">
          <AlertTriangle className="w-5 h-5 text-warning" />
          <div className="flex-1">
            <h4 className="font-medium text-warning">Geo-fencing alert</h4>
            <p className="text-sm text-muted-foreground">You are entering a high-risk zone</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};