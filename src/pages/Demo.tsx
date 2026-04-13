import { useState } from 'react';
import Logo from '../components/Logo';

export default function Demo() {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [partnerId, setPartnerId] = useState('');
  const [staging, setStaging] = useState(false);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Logo size={52} />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-8">Carelu Demo</h1>

        <form
          className="space-y-3.5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="url"
            placeholder="Website URL"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all placeholder:text-gray-400"
          />
          <input
            type="text"
            placeholder="Partner ID"
            value={partnerId}
            onChange={(e) => setPartnerId(e.target.value)}
            className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all placeholder:text-gray-400"
          />

          {/* Staging toggle */}
          <div className="flex items-center justify-between px-1 py-2">
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900">Staging</p>
              <p className="text-xs text-gray-400">Use dev.carelu.ai</p>
            </div>
            <button
              type="button"
              onClick={() => setStaging(!staging)}
              className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer border-none ${
                staging ? 'bg-brand-500' : 'bg-gray-200'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  staging ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-600 hover:to-brand-500 shadow-md shadow-brand-200 transition-all cursor-pointer"
          >
            Launch Demo
          </button>
        </form>
      </div>
    </div>
  );
}
