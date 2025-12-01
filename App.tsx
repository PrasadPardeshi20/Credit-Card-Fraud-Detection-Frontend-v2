import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SinglePredictionForm from './components/SinglePredictionForm';
import BatchPrediction from './components/BatchPrediction';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [currentTab, setTab] = useState<'dashboard' | 'single' | 'batch'>('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12">
      <Navbar currentTab={currentTab} setTab={setTab} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Dynamic Header based on Tab */}
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {currentTab === 'dashboard' && 'Dashboard Overview'}
            {currentTab === 'single' && 'Manual Transaction Analysis'}
            {currentTab === 'batch' && 'Batch Processing'}
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            {currentTab === 'dashboard' && 'Real-time insights and model performance metrics derived from historical data.'}
            {currentTab === 'single' && 'Enter transaction details manually to detect potential fraud instantly.'}
            {currentTab === 'batch' && 'Upload high-volume transaction logs for bulk fraud detection.'}
          </p>
        </header>

        {/* Content Area */}
        <div className="min-h-[600px]">
          {currentTab === 'dashboard' && <Dashboard />}
          {currentTab === 'single' && <SinglePredictionForm />}
          {currentTab === 'batch' && <BatchPrediction />}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm py-8 border-t border-slate-200 mt-8">
        <p>&copy; {new Date().getFullYear()} FraudGuard AI. Powered by Decision Tree Classifier (99.97% Accuracy).</p>
      </footer>
    </div>
  );
};

export default App;