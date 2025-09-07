import { useState } from "react";
import { SafetyDashboard } from "@/components/SafetyDashboard";
import { DigitalIdCard } from "@/components/DigitalIdCard";
import { EmergencyMode } from "@/components/EmergencyMode";
import { AlertsList } from "@/components/AlertsList";
import { SafetyDetailsScreen } from "@/components/SafetyDetailsScreen";
import { SettingsScreen } from "@/components/SettingsScreen";
import { BottomNavigation } from "@/components/BottomNavigation";

const Index = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [activeTab, setActiveTab] = useState('map');

  // Mock data
  const mockUser = {
    name: "Taylor Smith",
    safetyScore: 87,
    validUntil: "30 Apr",
    emergencyContacts: [
      { name: "John Smith", phone: "+1 123 456 7890" },
      { name: "Jane Smith", phone: "012-345-6789" }
    ]
  };

  const mockAlerts = [
    {
      id: "1",
      type: "geofence" as const,
      title: "Geofence breach",
      description: "Entered high-risk zone",
      time: "2:15 PM",
      severity: "medium" as const
    },
    {
      id: "2", 
      type: "anomaly" as const,
      title: "Anomaly warning",
      description: "Deviation from planned route",
      time: "1:38 PM",
      severity: "high" as const
    },
    {
      id: "3",
      type: "sos" as const,
      title: "SOS triggered",
      description: "Notified police and emergency contacts",
      time: "1:10 PM",
      severity: "high" as const
    },
    {
      id: "4",
      type: "warning" as const,
      title: "Anomaly warning", 
      description: "Prolonged inactivity",
      time: "9:30 AM",
      severity: "medium" as const
    }
  ];

  const handlePanicPress = () => {
    setCurrentView('emergency');
  };

  const handleShowDigitalId = () => {
    setCurrentView('digitalId');
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case 'map':
        setCurrentView('dashboard');
        break;
      case 'alerts':
        setCurrentView('alerts');
        break;
      case 'safety':
        setCurrentView('safety');
        break;
      case 'settings':
        setCurrentView('settings');
        break;
    }
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'emergency':
        return <EmergencyMode onCancel={() => setCurrentView('dashboard')} />;
      case 'digitalId':
        return (
          <DigitalIdCard
            userName={mockUser.name}
            validUntil={mockUser.validUntil}
            emergencyContacts={mockUser.emergencyContacts}
            onBack={() => setCurrentView('dashboard')}
          />
        );
      case 'alerts':
        return <AlertsList alerts={mockAlerts} />;
      case 'safety':
        return (
          <SafetyDetailsScreen
            safetyScore={mockUser.safetyScore}
            onBack={() => setCurrentView('dashboard')}
          />
        );
      case 'settings':
        return <SettingsScreen onBack={() => setCurrentView('dashboard')} />;
      default:
        return (
          <SafetyDashboard
            safetyScore={mockUser.safetyScore}
            userName={mockUser.name}
            isTracking={true}
            onPanicPress={handlePanicPress}
            onShowDigitalId={handleShowDigitalId}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderCurrentView()}
      {currentView !== 'emergency' && currentView !== 'digitalId' && currentView !== 'safety' && currentView !== 'settings' && (
        <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </div>
  );
};

export default Index;
