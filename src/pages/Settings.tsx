import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="min-h-screen bg-ascendia">
      <Sidebar />
      
      <div className="md:ml-64 p-6">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="glass">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-5xl font-bold text-foreground">Settings</h1>
        </div>

        <div className="max-w-4xl space-y-8">
          {/* Account Settings */}
          <div className="glass-strong rounded-2xl p-8 border border-glass-border/30">
            <h2 className="text-3xl font-bold text-foreground mb-6">Account Settings</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 glass rounded-xl border border-glass-border/20">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Email Notifications</h3>
                  <p className="text-muted-foreground">Receive quest updates and achievements via email</p>
                </div>
                <Button variant="outline" size="sm">Toggle</Button>
              </div>
              <div className="flex items-center justify-between p-4 glass rounded-xl border border-glass-border/20">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Two-Factor Authentication</h3>
                  <p className="text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <Button variant="outline" size="sm">Enable</Button>
              </div>
              <div className="flex items-center justify-between p-4 glass rounded-xl border border-glass-border/20">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Data Export</h3>
                  <p className="text-muted-foreground">Download your progress and achievement data</p>
                </div>
                <Button variant="outline" size="sm">Export</Button>
              </div>
            </div>
          </div>

          {/* Game Preferences */}
          <div className="glass-strong rounded-2xl p-8 border border-glass-border/30">
            <h2 className="text-3xl font-bold text-foreground mb-6">Game Preferences</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 glass rounded-xl border border-glass-border/20">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Sound Effects</h3>
                  <p className="text-muted-foreground">Enable quest completion and achievement sounds</p>
                </div>
                <Button variant="outline" size="sm">On</Button>
              </div>
              <div className="flex items-center justify-between p-4 glass rounded-xl border border-glass-border/20">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Auto-Save Progress</h3>
                  <p className="text-muted-foreground">Automatically save your quest progress</p>
                </div>
                <Button variant="outline" size="sm">Enabled</Button>
              </div>
              <div className="flex items-center justify-between p-4 glass rounded-xl border border-glass-border/20">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Difficulty Level</h3>
                  <p className="text-muted-foreground">Adjust quest difficulty and XP rewards</p>
                </div>
                <Button variant="outline" size="sm">Normal</Button>
              </div>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="glass-strong rounded-2xl p-8 border border-glass-border/30">
            <h2 className="text-3xl font-bold text-foreground mb-6">Privacy & Security</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 glass rounded-xl border border-glass-border/20">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Profile Visibility</h3>
                  <p className="text-muted-foreground">Control who can see your achievements and progress</p>
                </div>
                <Button variant="outline" size="sm">Public</Button>
              </div>
              <div className="flex items-center justify-between p-4 glass rounded-xl border border-glass-border/20">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Leaderboard Participation</h3>
                  <p className="text-muted-foreground">Show your ranking in class leaderboards</p>
                </div>
                <Button variant="outline" size="sm">Enabled</Button>
              </div>
              <div className="flex items-center justify-between p-4 glass rounded-xl border border-glass-border/20">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Data Analytics</h3>
                  <p className="text-muted-foreground">Help improve Ascendia with anonymous usage data</p>
                </div>
                <Button variant="outline" size="sm">Allow</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;