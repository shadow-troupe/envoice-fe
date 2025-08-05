// components/Sidebar.tsx
import Link from "next/link";
import { Home, FileText, Users, Briefcase, Settings } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Invoices", href: "/dashboard/invoices", icon: FileText },
  { name: "Clients", href: "/dashboard/clients", icon: Users },
  { name: "Business Profile", href: "/dashboard/business", icon: Briefcase },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-gray-200">
        InvoicePro
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 text-gray-800 font-medium"
              >
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
