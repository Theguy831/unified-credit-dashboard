import { LayoutDashboard, Shield, Calculator, Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'safety' | 'simulator';

interface MobileNavProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const navItems = [
  { id: 'home' as Page, label: 'Overview', icon: LayoutDashboard },
  { id: 'safety' as Page, label: 'Safety Plan', icon: Shield },
  { id: 'simulator' as Page, label: 'Simulator', icon: Calculator },
];

export default function MobileNav({ activePage, onNavigate }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-brand-800 text-white px-4 py-3 flex items-center justify-between z-50">
        <span className="font-bold text-lg">CreditMax</span>
        <button onClick={() => setOpen(!open)} className="p-2 rounded-lg hover:bg-brand-700">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {open && (
        <div className="lg:hidden fixed inset-0 top-14 bg-brand-800 z-40 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive ? 'bg-brand-500 text-white' : 'text-brand-200 hover:text-white hover:bg-brand-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
