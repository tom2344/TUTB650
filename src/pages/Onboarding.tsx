import { useNavigate } from 'react-router-dom';
import { OnboardingForm } from '@/components/OnboardingForm';
import { Target } from 'lucide-react';

export function Onboarding() {
  const navigate = useNavigate();

  const handleComplete = (data: any) => {
    console.log('Onboarding complete with data:', data);
    navigate('/workout');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-900/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold">BoxFit<span className="text-red-600">AI</span></span>
          </div>
        </div>
      </nav>

      <OnboardingForm onComplete={handleComplete} />
    </div>
  );
}
