import { Outlet, Link, useLocation } from "react-router-dom";
import { Scan, LayoutDashboard, Download, Settings, FileKey, HelpCircle, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const sidebarItems = [
  { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Download App", icon: Download, href: "/dashboard/download" },
  { name: "Account Settings", icon: Settings, href: "/dashboard/settings" },
  { name: "License Status", icon: FileKey, href: "/dashboard/license" },
  { name: "Help", icon: HelpCircle, href: "/dashboard/help" },
];

export default function Dashboard() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex w-full">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
              <Scan className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">PLR Organizer</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const isActive = location.pathname === item.href || 
                (item.href === "/dashboard" && location.pathname === "/dashboard");
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive 
                        ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                        : "hover:bg-sidebar-accent"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 mb-4">
            <Avatar>
              <AvatarFallback className="bg-sidebar-accent">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">User Name</p>
              <p className="text-sm text-muted-foreground truncate">user@email.com</p>
            </div>
          </div>
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-sidebar-foreground">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-background">
        <Outlet />
      </main>
    </div>
  );
}
