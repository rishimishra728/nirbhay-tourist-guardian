import { ArrowLeft, User, Key, Globe, Bell, MapPin, Shield, Trash2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

interface SettingsScreenProps {
  onBack: () => void;
}

export const SettingsScreen = ({ onBack }: SettingsScreenProps) => {
  const accountItems = [
    { icon: User, label: "Profile", sublabel: "(Edit Digital ID)", hasArrow: true },
    { icon: Key, label: "Change Password", hasArrow: true },
  ];

  const preferenceItems = [
    { icon: Globe, label: "Language", value: "English", hasArrow: true },
    { icon: Bell, label: "Notifications", hasSwitch: true, enabled: false },
    { icon: MapPin, label: "Tracking", hasSwitch: true, enabled: true },
  ];

  const privacyItems = [
    { icon: Shield, label: "Data Privacy Controls", hasArrow: true },
    { icon: Shield, label: "Blockchain Verification", hasArrow: true },
    { icon: Trash2, label: "Delete Digital ID", hasArrow: true },
  ];

  return (
    <div className="min-h-screen bg-background p-4 pb-20">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold ml-4">Settings</h1>
      </div>

      <div className="space-y-6">
        {/* Account Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Account</h2>
          <Card>
            <CardContent className="p-0">
              {accountItems.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                    <item.icon className="w-5 h-5 text-muted-foreground mr-3" />
                    <div className="flex-1">
                      <p className="font-medium">{item.label}</p>
                      {item.sublabel && (
                        <p className="text-sm text-muted-foreground">{item.sublabel}</p>
                      )}
                    </div>
                    {item.hasArrow && <ChevronRight className="w-5 h-5 text-muted-foreground" />}
                  </div>
                  {index < accountItems.length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Preferences Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Preferences</h2>
          <Card>
            <CardContent className="p-0">
              {preferenceItems.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center p-4">
                    <item.icon className="w-5 h-5 text-muted-foreground mr-3" />
                    <div className="flex-1">
                      <p className="font-medium">{item.label}</p>
                    </div>
                    {item.hasSwitch ? (
                      <Switch defaultChecked={item.enabled} />
                    ) : item.hasArrow ? (
                      <div className="flex items-center">
                        <span className="text-muted-foreground mr-2">{item.value}</span>
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    ) : null}
                  </div>
                  {index < preferenceItems.length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Privacy & Security Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Privacy & Security</h2>
          <Card>
            <CardContent className="p-0">
              {privacyItems.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                    <item.icon className="w-5 h-5 text-muted-foreground mr-3" />
                    <div className="flex-1">
                      <p className="font-medium">{item.label}</p>
                    </div>
                    {item.hasArrow && <ChevronRight className="w-5 h-5 text-muted-foreground" />}
                  </div>
                  {index < privacyItems.length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};