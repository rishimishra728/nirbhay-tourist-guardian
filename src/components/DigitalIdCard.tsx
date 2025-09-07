import { ArrowLeft, Download, Printer, Share2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface DigitalIdCardProps {
  userName: string;
  validUntil: string;
  emergencyContacts: Array<{ name: string; phone: string }>;
  onBack: () => void;
}

export const DigitalIdCard = ({ userName, validUntil, emergencyContacts, onBack }: DigitalIdCardProps) => {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
      </div>

      {/* QR Code Card */}
      <Card className="mb-6">
        <CardContent className="p-8 text-center">
          {/* QR Code Placeholder */}
          <div className="w-48 h-48 mx-auto mb-6 bg-black rounded-lg flex items-center justify-center">
            <div className="grid grid-cols-8 gap-1 p-4">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 ${
                    Math.random() > 0.5 ? 'bg-white' : 'bg-black'
                  }`}
                />
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-2">{userName}</h2>
          <p className="text-muted-foreground">Valid until: {validUntil}</p>
        </CardContent>
      </Card>

      {/* Emergency Contacts */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Emergency Contacts</h3>
          <div className="space-y-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-sm text-muted-foreground">{contact.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-4">
        <Button variant="outline" className="flex flex-col items-center py-4 h-auto">
          <Download className="w-5 h-5 mb-2" />
          <span className="text-sm">Download</span>
        </Button>
        <Button variant="outline" className="flex flex-col items-center py-4 h-auto">
          <Printer className="w-5 h-5 mb-2" />
          <span className="text-sm">Print</span>
        </Button>
        <Button variant="outline" className="flex flex-col items-center py-4 h-auto">
          <Share2 className="w-5 h-5 mb-2" />
          <span className="text-sm">Share</span>
        </Button>
      </div>
    </div>
  );
};