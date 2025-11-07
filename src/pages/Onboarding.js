import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { OnboardingForm } from '@/components/OnboardingForm';
import { Target } from 'lucide-react';
export function Onboarding() {
    const navigate = useNavigate();
    const handleComplete = (data) => {
        console.log('Onboarding complete with data:', data);
        navigate('/workout');
    };
    return (_jsxs("div", { className: "min-h-screen bg-black text-white", children: [_jsx("nav", { className: "fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-900/20", children: _jsx("div", { className: "container mx-auto px-4 py-4 flex justify-between items-center", children: _jsxs("div", { className: "flex items-center gap-2 cursor-pointer", onClick: () => navigate('/'), children: [_jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center", children: _jsx(Target, { className: "w-6 h-6" }) }), _jsxs("span", { className: "text-2xl font-bold", children: ["BoxFit", _jsx("span", { className: "text-red-600", children: "AI" })] })] }) }) }), _jsx(OnboardingForm, { onComplete: handleComplete })] }));
}
