import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export function OnboardingForm({ onComplete }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        experience: '',
        goal: '',
        equipment: [],
        duration: '',
        frequency: '',
        fitness: '',
        focus: [],
    });
    const handleExperienceChange = (value) => {
        setFormData({ ...formData, experience: value });
    };
    const handleGoalChange = (value) => {
        setFormData({ ...formData, goal: value });
    };
    const handleEquipmentToggle = (item) => {
        setFormData((prev) => ({
            ...prev,
            equipment: prev.equipment.includes(item)
                ? prev.equipment.filter((e) => e !== item)
                : [...prev.equipment, item],
        }));
    };
    const handleDurationChange = (value) => {
        setFormData({ ...formData, duration: value });
    };
    const handleFrequencyChange = (value) => {
        setFormData({ ...formData, frequency: value });
    };
    const handleFitnessChange = (value) => {
        setFormData({ ...formData, fitness: value });
    };
    const handleFocusToggle = (item) => {
        setFormData((prev) => ({
            ...prev,
            focus: prev.focus.includes(item)
                ? prev.focus.filter((f) => f !== item)
                : [...prev.focus, item],
        }));
    };
    const handleNext = () => {
        if (currentStep < 6) {
            setCurrentStep(currentStep + 1);
        }
        else if (onComplete) {
            onComplete(formData);
        }
    };
    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return formData.experience !== '';
            case 2:
                return formData.goal !== '';
            case 3:
                return formData.equipment.length > 0;
            case 4:
                return formData.duration !== '' && formData.frequency !== '';
            case 5:
                return formData.fitness !== '';
            case 6:
                return formData.focus.length > 0;
            default:
                return false;
        }
    };
    return (_jsx("div", { className: "min-h-screen bg-black text-white p-4", children: _jsxs("div", { className: "container mx-auto max-w-2xl", children: [_jsxs("div", { className: "mb-8", children: [_jsxs("div", { className: "text-center mb-6", children: [_jsx("h1", { className: "text-3xl md:text-4xl font-bold mb-2", children: "Personalize Your Boxing Training" }), _jsx("p", { className: "text-gray-400", children: "Answer a few questions to get your perfect workout plan" })] }), _jsxs("div", { className: "flex items-center justify-center gap-2 mb-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl font-bold text-red-600", children: currentStep }), _jsx("div", { className: "text-sm text-gray-400", children: "of 6" })] }), _jsx("div", { className: "flex-1 h-2 bg-neutral-800 rounded-full mx-4 overflow-hidden", children: _jsx("div", { className: "h-full bg-gradient-to-r from-red-600 to-red-700 transition-all duration-300", style: { width: `${(currentStep / 6) * 100}%` } }) })] })] }), _jsxs(Card, { className: "bg-neutral-900 border-neutral-800 mb-8", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "text-2xl", children: [currentStep === 1 && 'What is your experience level?', currentStep === 2 && 'What is your primary goal?', currentStep === 3 && 'What equipment do you have?', currentStep === 4 && 'How much time can you dedicate?', currentStep === 5 && 'What is your current fitness level?', currentStep === 6 && 'What do you want to focus on?'] }) }), _jsxs(CardContent, { className: "space-y-4", children: [currentStep === 1 && (_jsx("div", { className: "space-y-3", children: ['Beginner', 'Intermediate', 'Advanced'].map((level) => (_jsx("button", { onClick: () => handleExperienceChange(level), className: `w-full p-4 rounded-lg border-2 transition-all text-left font-semibold ${formData.experience === level
                                            ? 'border-red-600 bg-red-600/10'
                                            : 'border-neutral-700 bg-neutral-800 hover:border-red-600/50'}`, children: level }, level))) })), currentStep === 2 && (_jsx("div", { className: "space-y-3", children: ['Weight Loss', 'Endurance', 'Technique', 'Strength', 'Competition', 'Fitness'].map((goal) => (_jsx("button", { onClick: () => handleGoalChange(goal), className: `w-full p-4 rounded-lg border-2 transition-all text-left font-semibold ${formData.goal === goal
                                            ? 'border-red-600 bg-red-600/10'
                                            : 'border-neutral-700 bg-neutral-800 hover:border-red-600/50'}`, children: goal }, goal))) })), currentStep === 3 && (_jsx("div", { className: "space-y-3", children: ['None', 'Heavy Bag', 'Speed Bag', 'Jump Rope', 'Wraps', 'Bands'].map((equipment) => (_jsxs("button", { onClick: () => handleEquipmentToggle(equipment), className: `w-full p-4 rounded-lg border-2 transition-all text-left font-semibold flex items-center ${formData.equipment.includes(equipment)
                                            ? 'border-red-600 bg-red-600/10'
                                            : 'border-neutral-700 bg-neutral-800 hover:border-red-600/50'}`, children: [_jsx("div", { className: `w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-all ${formData.equipment.includes(equipment)
                                                    ? 'border-red-600 bg-red-600'
                                                    : 'border-neutral-600'}`, children: formData.equipment.includes(equipment) && (_jsx("div", { className: "w-2 h-2 bg-white rounded-sm" })) }), equipment] }, equipment))) })), currentStep === 4 && (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold mb-3 text-gray-300", children: "Session Duration" }), _jsxs("select", { value: formData.duration, onChange: (e) => handleDurationChange(e.target.value), className: "w-full p-3 rounded-lg bg-neutral-800 border-2 border-neutral-700 text-white focus:border-red-600 focus:outline-none", children: [_jsx("option", { value: "", children: "Select duration..." }), _jsx("option", { value: "15", children: "15 minutes" }), _jsx("option", { value: "20", children: "20 minutes" }), _jsx("option", { value: "30", children: "30 minutes" }), _jsx("option", { value: "45", children: "45 minutes" }), _jsx("option", { value: "60", children: "60 minutes" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold mb-3 text-gray-300", children: "Weekly Frequency" }), _jsxs("select", { value: formData.frequency, onChange: (e) => handleFrequencyChange(e.target.value), className: "w-full p-3 rounded-lg bg-neutral-800 border-2 border-neutral-700 text-white focus:border-red-600 focus:outline-none", children: [_jsx("option", { value: "", children: "Select frequency..." }), _jsx("option", { value: "2", children: "2 days per week" }), _jsx("option", { value: "3", children: "3 days per week" }), _jsx("option", { value: "4", children: "4 days per week" }), _jsx("option", { value: "5", children: "5 days per week" }), _jsx("option", { value: "6", children: "6 days per week" }), _jsx("option", { value: "7", children: "7 days per week" })] })] })] })), currentStep === 5 && (_jsx("div", { className: "space-y-3", children: ['Low', 'Moderate', 'High'].map((level) => (_jsx("button", { onClick: () => handleFitnessChange(level), className: `w-full p-4 rounded-lg border-2 transition-all text-left font-semibold ${formData.fitness === level
                                            ? 'border-red-600 bg-red-600/10'
                                            : 'border-neutral-700 bg-neutral-800 hover:border-red-600/50'}`, children: level }, level))) })), currentStep === 6 && (_jsx("div", { className: "space-y-3", children: ['Footwork', 'Power', 'Speed', 'Defense', 'Conditioning'].map((focus) => (_jsxs("button", { onClick: () => handleFocusToggle(focus), className: `w-full p-4 rounded-lg border-2 transition-all text-left font-semibold flex items-center ${formData.focus.includes(focus)
                                            ? 'border-red-600 bg-red-600/10'
                                            : 'border-neutral-700 bg-neutral-800 hover:border-red-600/50'}`, children: [_jsx("div", { className: `w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-all ${formData.focus.includes(focus)
                                                    ? 'border-red-600 bg-red-600'
                                                    : 'border-neutral-600'}`, children: formData.focus.includes(focus) && (_jsx("div", { className: "w-2 h-2 bg-white rounded-sm" })) }), focus] }, focus))) }))] })] }), _jsxs("div", { className: "flex gap-4", children: [_jsxs(Button, { onClick: handleBack, variant: "outline", disabled: currentStep === 1, className: "flex-1 border-2 border-neutral-700 text-white hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed", children: [_jsx(ChevronLeft, { className: "w-4 h-4 mr-2" }), "Back"] }), _jsxs(Button, { onClick: handleNext, disabled: !isStepValid(), className: "flex-1 bg-red-600 hover:bg-red-700 text-white disabled:opacity-50 disabled:cursor-not-allowed", children: [currentStep === 6 ? 'Complete Setup' : 'Next', _jsx(ChevronRight, { className: "w-4 h-4 ml-2" })] })] }), _jsx("div", { className: "mt-8 flex justify-center gap-2", children: [1, 2, 3, 4, 5, 6].map((step) => (_jsx("div", { className: `w-2 h-2 rounded-full transition-all ${step === currentStep
                            ? 'bg-red-600 w-8'
                            : step < currentStep
                                ? 'bg-red-600'
                                : 'bg-neutral-700'}` }, step))) })] }) }));
}
