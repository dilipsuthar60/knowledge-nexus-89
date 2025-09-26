import { Search, BookOpen, Menu, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const categories = [
  { name: "All", path: "/" },
  { name: "System Design", path: "/system-design" },
  { name: "LLD", path: "/low-level-design" },
  { name: "DSA", path: "/data-structures" },
  { name: "Algorithms", path: "/algorithms" },
  { name: "Database", path: "/database" },
  { name: "Networking", path: "/networking" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    return location.pathname.startsWith(path) && path !== "/";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="text-title gradient-text">TechRead</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(category.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Search & Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10 w-64"
              />
            </div>
            
            {user ? (
              <div className="flex items-center gap-3">
                {isAdmin && (
                  <>
                    <Badge variant="secondary">Admin</Badge>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/admin">
                        <Settings className="mr-2 h-4 w-4" />
                        Admin Panel
                      </Link>
                    </Button>
                  </>
                )}
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button variant="outline" asChild>
                <Link to="/auth">Sign In</Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="flex flex-col space-y-1 px-4 py-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(category.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <div className="pt-2 space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    className="pl-10"
                  />
                </div>
                
                {user ? (
                  <div className="space-y-2">
                    {isAdmin && (
                      <>
                        <Badge variant="secondary" className="mb-2">Admin</Badge>
                        <Link 
                          to="/admin" 
                          className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors rounded-md hover:bg-secondary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Settings className="mr-2 h-4 w-4 inline" />
                          Admin Panel
                        </Link>
                      </>
                    )}
                    <button 
                      onClick={handleSignOut}
                      className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-primary transition-colors rounded-md hover:bg-secondary"
                    >
                      <LogOut className="mr-2 h-4 w-4 inline" />
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link 
                    to="/auth" 
                    className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors rounded-md hover:bg-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}