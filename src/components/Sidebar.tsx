import { LayoutDashboard, Shield, Calculator, TrendingUp } from 'lucide-react';

type Page = 'home' | 'safety' | 'simulator';

interface SidebarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const navItems = [
  { id: 'home' as Page, label: 'Overview', icon: LayoutDashboard },
  { id: 'safety' as Page, label: 'Safety Plan', icon: Shield },
  { id: 'simulator' as Page, label: 'FICO Simulator', icon: Calculator },
];

export default function Sidebar({ activePage, onNavigate }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-brand-800 text-white flex flex-col z-50 lg:translate-x-0">
      <div className="p-6 border-b border-brand-700">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-brand-400 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">CreditMax</h1>
            <p className="text-xs text-brand-200">Score Optimizer</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 ${
                isActive
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-900/30'
                  : 'text-brand-200 hover:text-white hover:bg-brand-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-brand-700">
        <div className="bg-brand-700/50 rounded-lg p-3">
          <p className="text-xs text-brand-200 leading-relaxed">
            AZEO Strategy: Keep one card at $0 and one card reporting $1-$9 for maximum FICO impact.
          </p>
        </div>
      </div>
    </aside>
  );
}
