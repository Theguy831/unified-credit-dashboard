import { Shield, Calculator, TrendingUp, Target, AlertTriangle, CheckCircle } from 'lucide-react';

type Page = 'home' | 'safety' | 'simulator';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Credit Score Dashboard</h1>
        <p className="text-gray-500 mt-1">Your command center for maximizing FICO score through precision utilization management.</p>
      </div>

      {/* Score Strategy Summary */}
      <div className="card p-6 bg-gradient-to-br from-brand-500 to-brand-700 text-white border-none">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-brand-100 text-sm font-medium">Active Strategy</p>
            <h2 className="text-xl font-bold mt-1">AZEO (All Zero Except One)</h2>
            <p className="text-brand-100 mt-2 text-sm max-w-md">
              Report $0 on all cards except one, which reports a small balance ($1-$9). This signals responsible use while minimizing utilization.
            </p>
          </div>
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
          <div>
            <p className="text-2xl font-bold">$900</p>
            <p className="text-brand-200 text-xs">Total Credit</p>
          </div>
          <div>
            <p className="text-2xl font-bold">&lt;1%</p>
            <p className="text-brand-200 text-xs">Target Utilization</p>
          </div>
          <div>
            <p className="text-2xl font-bold">2</p>
            <p className="text-brand-200 text-xs">Active Cards</p>
          </div>
        </div>
      </div>

      {/* Quick Cards */}
      <div className="grid sm:grid-cols-2 gap-5">
        <button
          onClick={() => onNavigate('safety')}
          className="card p-6 text-left group hover:border-brand-200 transition-colors"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center group-hover:bg-brand-100 transition-colors">
              <Shield className="w-5 h-5 text-brand-500" />
            </div>
            <h3 className="font-semibold text-gray-900">Safety Plan</h3>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Precision timing rules for each card. Know exactly when to stop and start spending to control what gets reported.
          </p>
          <span className="inline-block mt-4 text-sm font-medium text-brand-500 group-hover:translate-x-1 transition-transform">
            View plan &rarr;
          </span>
        </button>

        <button
          onClick={() => onNavigate('simulator')}
          className="card p-6 text-left group hover:border-brand-200 transition-colors"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-success-50 rounded-lg flex items-center justify-center group-hover:bg-success-100 transition-colors">
              <Calculator className="w-5 h-5 text-success-500" />
            </div>
            <h3 className="font-semibold text-gray-900">FICO Simulator</h3>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Test different balance scenarios to see how they affect your overall utilization ratio before statement close.
          </p>
          <span className="inline-block mt-4 text-sm font-medium text-success-500 group-hover:translate-x-1 transition-transform">
            Open simulator &rarr;
          </span>
        </button>
      </div>

      {/* Key Rules */}
      <div className="card p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-brand-500" />
          Key Rules at a Glance
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-success-50">
            <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">Platinum reports $0</p>
              <p className="text-xs text-gray-500">Pay in full before closing date (10th). Stop spending from 7th-12th.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-success-50">
            <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">Quicksilver reports exactly $8</p>
              <p className="text-xs text-gray-500">Leave $8 balance at statement close (~1st). Stop spending from 26th-3rd.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-warning-50">
            <AlertTriangle className="w-5 h-5 text-warning-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">Never let all cards report $0</p>
              <p className="text-xs text-gray-500">The "all-zero penalty" can actually hurt your score. Always have one card reporting a small balance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
