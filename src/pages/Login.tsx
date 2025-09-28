import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import ascendiaLogo from "@/assets/ascendia-logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would validate credentials
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-ascendia flex items-center justify-center p-6">
      <div className="w-full max-w-6xl flex items-center justify-center gap-16">
        
        {/* Logo Section */}
        <div className="hidden lg:flex flex-col items-center">
          <img 
            src={ascendiaLogo} 
            alt="Ascendia Logo" 
            className="w-96 h-96 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md">
          <div className="glass-strong rounded-2xl p-8 border border-glass-border/30">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">ascendia</h1>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-foreground text-sm font-medium">
                  USERNAME
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="glass border-glass-border/40 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground text-sm font-medium">
                  PASSWORD
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="glass border-glass-border/40 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="border-glass-border/40"
                />
                <Label htmlFor="remember" className="text-foreground text-sm">
                  REMEMBER MY USERNAME
                </Label>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
              >
                LOG IN
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;