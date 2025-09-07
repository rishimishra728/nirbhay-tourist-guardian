import { AlertTriangle, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Alert {
  id: string;
  type: 'geofence' | 'anomaly' | 'sos' | 'warning';
  title: string;
  description: string;
  time: string;
  severity: 'high' | 'medium' | 'low';
}

interface AlertsListProps {
  alerts: Alert[];
}

export const AlertsList = ({ alerts }: AlertsListProps) => {
  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'sos':
        return <div className="w-10 h-10 rounded-full bg-emergency text-emergency-foreground flex items-center justify-center text-sm font-bold">SOS</div>;
      case 'geofence':
      case 'anomaly':
      case 'warning':
        return <AlertTriangle className="w-6 h-6 text-warning" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getAlertStyles = (severity: Alert['severity']) => {
    switch (severity) {
      case 'high':
        return 'border-emergency bg-emergency/5';
      case 'medium':
        return 'border-warning bg-warning/5';
      default:
        return 'border-border bg-background';
    }
  };

  return (
    <div className="space-y-6 p-4">
      <div>
        <h1 className="text-2xl font-bold mb-6">Alerts</h1>
        
        <div className="space-y-4">
          {alerts.map((alert) => (
            <Card key={alert.id} className={getAlertStyles(alert.severity)}>
              <CardContent className="flex items-start space-x-4 p-4">
                <div className="mt-1">
                  {alert.type === 'warning' ? (
                    <div className="w-10 h-10 rounded-full bg-warning text-warning-foreground flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                  ) : alert.type === 'sos' ? (
                    <div className="w-10 h-10 rounded-full bg-emergency text-emergency-foreground flex items-center justify-center text-sm font-bold">
                      SOS
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-warning text-warning-foreground flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{alert.title}</h3>
                  <p className="text-muted-foreground mb-2">{alert.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {alert.time}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};