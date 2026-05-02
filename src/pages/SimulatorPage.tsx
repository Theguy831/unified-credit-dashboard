import { useState, useCallback } from 'react';
import { Calculator, Flame, AlertTriangle, XCircle, CheckCircle } from 'lucide-react';

type Verdict = 'azeo' | 'allzero' | 'high' | 'good';

function getVerdict(platBal: number, quickBal: number, totalUtil: number): Verdict {
  if (platBal === 0 && quickBal > 0 && quickBal < 10) return 'azeo';
  if (platBal === 0 && quickBal === 0) return 'allzero';
  if (totalUtil > 10) return 'high';
  return 'good';
}

const verdictConfig: Record<Verdict, { label: string; color: string; bgColor: string; icon: typeof Flame }> = {
  azeo: { label: 'EXCELLENT - AZEO MODE ACTIVE', color: 'text-success-500', bgColor: 'bg-success-50', icon: Flame },
  allzero: { label: 'ALL-ZERO PENALTY LIKELY', color: 'text-warning-500', bgColor: 'bg-warning-50', icon: AlertTriangle },
  high: { label: 'UTILIZATION TOO HIGH FOR MAX POINTS', color: 'text-danger-500', bgColor: 'bg-danger-50', icon: XCircle },
  good: { label: 'GOOD - KEEP TOTAL UNDER 9%', color: 'text-success-500', bgColor: 'bg-success-50', icon: CheckCircle },
};

export default function SimulatorPage() {
  const [platBal, setPlatBal] = useState(0);
  const [quickBal, setQuickBal] = useState(8);

  const platUtil = (platBal / 200) * 100;
  const quickUtil = (quickBal / 700) * 100;
  const totalUtil = ((platBal + quickBal) / 900) * 100;
  const verdict = getVerdict(platBal, quickBal, totalUtil);
  const vConfig = verdictConfig[verdict];
  const VerdictIcon = vConfig.icon;

  const getUtilColor = useCallback((util: number) => {
    if (util === 0) return 'text-gray-400';
    if (util <= 3) return 'text-success-500';
    if (util <= 9) return 'text-success-400';
    if (util <= 30) return 'text-warning-500';
    return 'text-danger-500';
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <Calculator className="w-7 h-7 text-success-500" />
          FICO Utilization Simulator
        </h1>
        <p className="text-gray-500 mt-1">Test different balance scenarios to see your utilization ratio in real-time.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Panel */}
        <div className="card p-6 space-y-6">
          <h3 className="font-semibold text-gray-900">Enter Balances</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Platinum Balance
              <span className="text-gray-400 font-normal ml-1">($200 limit)</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
              <input
                type="number"
                value={platBal}
                onChange={(e) => setPlatBal(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl text-lg font-medium focus:outline-none focus:border-brand-400 transition-colors"
                min="0"
                max="200"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1.5">Target: $0</p>
            {/* Utilization bar */}
            <div className="mt-3">
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-400 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(platUtil, 100)}%` }}
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quicksilver Balance
              <span className="text-gray-400 font-normal ml-1">($700 limit)</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
              <input
                type="number"
                value={quickBal}
                onChange={(e) => setQuickBal(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl text-lg font-medium focus:outline-none focus:border-brand-400 transition-colors"
                min="0"
                max="700"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1.5">Target: $1 - $9</p>
            <div className="mt-3">
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-warning-400 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(quickUtil, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="space-y-5">
          <div className="card p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Utilization Breakdown</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-sm text-gray-600">Platinum Utilization</span>
                <span className={`text-lg font-bold ${getUtilColor(platUtil)}`}>
                  {platUtil.toFixed(2)}%
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-sm text-gray-600">Quicksilver Utilization</span>
                <span className={`text-lg font-bold ${getUtilColor(quickUtil)}`}>
                  {quickUtil.toFixed(2)}%
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm font-medium text-gray-900">Total Aggregate</span>
                <span className={`text-lg font-bold ${getUtilColor(totalUtil)}`}>
                  {totalUtil.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>

          {/* Verdict Card */}
          <div className={`card p-6 ${vConfig.bgColor} border-none`}>
            <div className="flex items-center gap-3 mb-3">
              <VerdictIcon className={`w-6 h-6 ${vConfig.color}`} />
              <p className={`font-bold text-sm ${vConfig.color}`}>{vConfig.label}</p>
            </div>
            <div className="text-center py-4">
              <p className="text-4xl font-bold text-gray-900">{totalUtil.toFixed(2)}%</p>
              <p className="text-sm text-gray-500 mt-1">Total Utilization Reported</p>
            </div>
          </div>

          {/* Optimal range guide */}
          <div className="card p-5">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Utilization Ranges</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success-500" />
                <span className="text-gray-600">0-3%: Maximum scoring potential</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success-300" />
                <span className="text-gray-600">4-9%: Excellent, minimal impact</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-warning-400" />
                <span className="text-gray-600">10-29%: Score starts to decrease</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-danger-400" />
                <span className="text-gray-600">30%+: Significant negative impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
