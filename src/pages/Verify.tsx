import { useState, useRef } from 'react';
import AuthLayout from '../components/AuthLayout';
import Logo from '../components/Logo';

export default function Verify() {
  const [code, setCode] = useState<string[]>(Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const newCode = [...code];
    for (let i = 0; i < pasted.length; i++) {
      newCode[i] = pasted[i];
    }
    setCode(newCode);
    const focusIndex = Math.min(pasted.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const allFilled = code.every((c) => c !== '');

  // Progress dots
  const steps = 5;
  const currentStep = 1;

  return (
    <AuthLayout
      altText="Already have an account?"
      altLinkText="Log in"
      altLinkTo="/login"
    >
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {Array.from({ length: steps }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i <= currentStep
                ? 'w-6 bg-gray-900'
                : 'w-4 bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Logo size={48} />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1.5">Enter verification code</h1>
        <p className="text-sm text-gray-500">A verification code has been sent to your email</p>
      </div>

      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* Code inputs */}
        <div className="flex justify-center gap-3" onPaste={handlePaste}>
          {code.map((digit, i) => (
            <input
              key={i}
              ref={(el) => { inputRefs.current[i] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-12 h-14 text-center text-lg font-semibold text-gray-900 bg-white border border-gray-200 rounded-xl outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
            />
          ))}
        </div>

        <div className="text-center">
          <button
            type="button"
            className="text-sm text-brand-500 hover:text-brand-600 font-medium bg-transparent border-none cursor-pointer"
          >
            Didn't get a verification code?
          </button>
        </div>

        <button
          type="submit"
          disabled={!allFilled}
          className={`w-full py-3 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
            allFilled
              ? 'text-white bg-gradient-to-r from-brand-500 to-brand-400 hover:from-brand-600 hover:to-brand-500 shadow-md shadow-brand-200'
              : 'text-gray-400 bg-gray-100 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </form>
    </AuthLayout>
  );
}
