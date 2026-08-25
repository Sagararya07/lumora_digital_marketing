import React, { useState } from 'react';
import { X, CheckCircle2, UserPlus, AlertCircle, Mail, ArrowLeft } from 'lucide-react';

interface FirstTimeVisitorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FirstTimeVisitorModal: React.FC<FirstTimeVisitorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    industry: '',
    message: ''
  });

  const [otpMode, setOtpMode] = useState(false);
  const [otp, setOtp] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setOtpMode(true);
      } else {
        setError(data.error || 'Failed to send verification code.');
      }
    } catch (err) {
      setError('Network connection error.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/first-time-visitors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, otp })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        setError(data.error || 'Failed to verify OTP or submit request.');
      }
    } catch (err) {
      setError('Network connection error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Welcome Aboard!</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Your email has been successfully verified! We'll be in touch with you shortly.
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                setOtpMode(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-[#5B8EE2] hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : otpMode ? (
          <div>
            <div className="mb-6 space-y-1">
              <button 
                onClick={() => setOtpMode(false)}
                className="text-xs font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1 mb-4 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B8EE2] flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> Email Verification
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Enter Verification Code
              </h3>
              <p className="text-xs text-slate-500">
                We've sent a 6-digit code to <span className="font-semibold text-slate-700">{formData.email}</span>. Please enter it below to confirm your identity.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleVerifyAndSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  6-Digit OTP *
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  placeholder="e.g. 123456"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-center tracking-[0.5em] text-2xl font-bold text-slate-900 focus:outline-none focus:border-[#729EE6] shadow-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading || otp.length !== 6}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#5B8EE2] hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Verifying...' : 'Verify & Submit'}
                </button>
              </div>
              
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={loading}
                  className="text-xs font-bold text-[#5B8EE2] hover:text-blue-700 disabled:opacity-50"
                >
                  Didn't receive the code? Resend
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B8EE2] flex items-center gap-1">
                <UserPlus className="w-3.5 h-3.5" /> Special Welcome
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Welcome to Our Agency!
              </h3>
              <p className="text-xs text-slate-500">
                Please tell us a bit about yourself so we can better assist you.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#729EE6] shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#729EE6] shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#729EE6] shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Industry
                </label>
                <input
                  type="text"
                  placeholder="e.g. Technology, Retail"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#729EE6] shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="How can we help you today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#729EE6] shadow-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#5B8EE2] hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending Code...' : 'Verify Email & Submit'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
