import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import HomePage from './pages/HomePage';
import SafetyPlanPage from './pages/SafetyPlanPage';
import SimulatorPage from './pages/SimulatorPage';

type Page = 'home' | 'safety' | 'simulator';

function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar activePage={activePage} onNavigate={setActivePage} />
      </div>

      {/* Mobile Nav */}
      <MobileNav activePage={activePage} onNavigate={setActivePage} />

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <div className="max-w-4xl mx-auto p-6 lg:p-10">
          {activePage === 'home' && <HomePage onNavigate={setActivePage} />}
          {activePage === 'safety' && <SafetyPlanPage />}
          {activePage === 'simulator' && <SimulatorPage />}
        </div>
      </main>
    </div>
  );
}

export default App;
