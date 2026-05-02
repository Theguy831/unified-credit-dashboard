import { Shield, CreditCard, Calendar, Octagon, Lightbulb } from 'lucide-react';

export default function SafetyPlanPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <Shield className="w-7 h-7 text-brand-500" />
          AZEO "Max Score" Plan
        </h1>
        <p className="text-gray-500 mt-1">Precision timing to force a FICO jump. Follow these rules each billing cycle.</p>
      </div>

      {/* Platinum Card */}
      <div className="card overflow-hidden">
        <div className="h-1.5 bg-gray-400" />
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Capital One Platinum</h3>
                <p className="text-sm text-gray-500">$200 Credit Limit</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-brand-50 text-brand-600 text-xs font-semibold rounded-full">
              Reporting $0
            </span>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 mb-5">
            <p className="text-sm text-gray-500 mb-1">Target Statement Balance</p>
            <p className="text-3xl font-bold text-success-500">$0.00</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <Calendar className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Due Date</p>
                <p className="text-sm font-semibold text-gray-900">5th of each month</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <Calendar className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Statement Closing</p>
                <p className="text-sm font-semibold text-gray-900">10th of each month</p>
              </div>
            </div>
          </div>

          <div className="bg-danger-50 border border-danger-100 rounded-xl p-4 flex items-start gap-3">
            <Octagon className="w-5 h-5 text-danger-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-bold text-danger-500">Stop Zone: 7th through 12th</p>
              <p className="text-xs text-gray-600 mt-1">
                No spending during this window. Prevents pending charges from appearing on your statement and reporting to bureaus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quicksilver Card */}
      <div className="card overflow-hidden">
        <div className="h-1.5 bg-warning-400" />
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-warning-50 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-warning-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Capital One Quicksilver</h3>
                <p className="text-sm text-gray-500">$700 Credit Limit</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-warning-50 text-warning-500 text-xs font-semibold rounded-full">
              The "One" Card
            </span>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 mb-5">
            <p className="text-sm text-gray-500 mb-1">Target Statement Balance</p>
            <p className="text-3xl font-bold text-success-500">$8.00</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <Calendar className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Due Date</p>
                <p className="text-sm font-semibold text-gray-900">27th of each month</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <Calendar className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Statement Closing</p>
                <p className="text-sm font-semibold text-gray-900">~1st of each month</p>
              </div>
            </div>
          </div>

          <div className="bg-danger-50 border border-danger-100 rounded-xl p-4 flex items-start gap-3">
            <Octagon className="w-5 h-5 text-danger-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-bold text-danger-500">Stop Zone: 26th through 3rd</p>
              <p className="text-xs text-gray-600 mt-1">
                No spending during this window. Guarantees exactly $8 reports to the credit bureaus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Tip */}
      <div className="card p-5 border-brand-100 bg-brand-50/30">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">Pro Tip</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Once your statement PDF generates in the app, you can start using the cards again. These "Stop Zones" ensure your payments fully clear so the bank sees exactly what you want them to see.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
