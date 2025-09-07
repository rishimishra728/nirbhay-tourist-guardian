import { ArrowLeft, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

interface SafetyDetailsScreenProps {
  safetyScore: number;
  onBack: () => void;
}

export const SafetyDetailsScreen = ({ safetyScore, onBack }: SafetyDetailsScreenProps) => {
  const riskFactors = [
    { id: 1, name: "High-risk area", severity: "high" },
    { id: 2, name: "Nighttime travel", severity: "medium" },
    { id: 3, name: "Solo travel", severity: "medium" },
  ];

  const safetyTips = [
    "Stay in well-lit areas",
    "Avoid traveling alone",
    "Keep emergency contacts updated",
    "Share your location with trusted contacts"
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold ml-4">Safety</h1>
      </div>

      {/* Safety Score */}
      <Card className="mb-6">
        <CardContent className="text-center py-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <span className="text-3xl font-bold">{safetyScore}</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">Safety Score</h2>
          <p className="text-muted-foreground">Based on current location and activity</p>
        </CardContent>
      </Card>

      {/* Risk Factors */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Risk Factors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {riskFactors.map((factor) => (
            <div key={factor.id} className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                factor.severity === 'high' ? 'bg-emergency' : 'bg-warning'
              }`}>
                <AlertTriangle className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">{factor.name}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Safety Tips */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Safety Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {safetyTips.map((tip, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-sm">{tip}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Settings */}
      <Card>
        <CardContent className="space-y-4 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Real-time tracking</h3>
              <p className="text-sm text-muted-foreground">Share location with emergency contacts</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Opt-in for anomaly detection</h3>
              <p className="text-sm text-muted-foreground">AI monitoring for unusual patterns</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};