import { MapPin, Shield, Users, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface EmergencyModeProps {
  onCancel: () => void;
}

export const EmergencyMode = ({ onCancel }: EmergencyModeProps) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-emergency p-4 text-emergency-foreground">
      {/* SOS Header */}
      <div className="text-center mb-8">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-emergency-foreground/30 flex items-center justify-center emergency-pulse">
          <span className="text-4xl font-bold">SOS</span>
        </div>
      </div>

      {/* Status Cards */}
      <div className="space-y-4 mb-8">
        <Card className="bg-emergency-foreground/10 border-emergency-foreground/20">
          <CardContent className="flex items-center space-x-3 p-4">
            <MapPin className="w-6 h-6 text-emergency-foreground" />
            <div className="flex-1">
              <h3 className="font-semibold text-emergency-foreground">Live tracking</h3>
              <p className="text-emergency-foreground/80 text-sm">{formatTime(timer)}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-emergency-foreground/10 border-emergency-foreground/20">
          <CardContent className="flex items-center space-x-3 p-4">
            <Shield className="w-6 h-6 text-emergency-foreground" />
            <div className="flex-1">
              <h3 className="font-semibold text-emergency-foreground">Police station notified</h3>
              <p className="text-emergency-foreground/80 text-sm">Central Police Station</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-emergency-foreground/10 border-emergency-foreground/20">
          <CardContent className="flex items-center space-x-3 p-4">
            <Users className="w-6 h-6 text-emergency-foreground" />
            <div className="flex-1">
              <h3 className="font-semibold text-emergency-foreground">Family members notified</h3>
              <p className="text-emergency-foreground/80 text-sm">John Doe & Jane Doe</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cancel Button */}
      <Button 
        onClick={onCancel}
        className="w-full h-14 rounded-2xl bg-emergency-foreground/20 text-emergency-foreground border-2 border-emergency-foreground/30 hover:bg-emergency-foreground/30 font-semibold text-lg"
      >
        Cancel false trigger
      </Button>
    </div>
  );
};