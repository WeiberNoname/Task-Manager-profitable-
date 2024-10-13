import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

export default function PremiumFeatures() {
  const navigate = useNavigate();

  const handleUpgrade = () => {
    // In a real app, this would integrate with a payment processor
    localStorage.setItem('isPremium', 'true');
    alert('Congratulations! You are now a Premium user.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Premium Features</h1>
        <ul className="mb-6">
          <li className="flex items-center mb-2">
            <Star className="text-yellow-400 mr-2" size={20} />
            <span>Unlimited tasks</span>
          </li>
          <li className="flex items-center mb-2">
            <Star className="text-yellow-400 mr-2" size={20} />
            <span>Priority support</span>
          </li>
          <li className="flex items-center mb-2">
            <Star className="text-yellow-400 mr-2" size={20} />
            <span>Advanced task analytics</span>
          </li>
          <li className="flex items-center mb-2">
            <Star className="text-yellow-400 mr-2" size={20} />
            <span>Collaboration features</span>
          </li>
        </ul>
        <button
          onClick={handleUpgrade}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mb-4"
        >
          Upgrade Now - $9.99/month
        </button>
        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="text-blue-500 hover:text-blue-600"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}