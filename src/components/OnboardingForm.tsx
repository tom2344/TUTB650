import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FormData {
  experience: string;
  goal: string;
  equipment: string[];
  duration: string;
  frequency: string;
  fitness: string;
  focus: string[];
}

interface OnboardingFormProps {
  onComplete?: (data: FormData) => void;
}

export function OnboardingForm({ onComplete }: OnboardingFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    experience: '',
    goal: '',
    equipment: [],
    duration: '',
    frequency: '',
    fitness: '',
    focus: [],
  });

  const handleExperienceChange = (value: string) => {
    setFormData({ ...formData, experience: value });
  };

  const handleGoalChange = (value: string) => {
    setFormData({ ...formData, goal: value });
  };

  const handleEquipmentToggle = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      equipment: prev.equipment.includes(item)
        ? prev.equipment.filter((e) => e !== item)
        : [...prev.equipment, item],
    }));
  };

  const handleDurationChange = (value: string) => {
    setFormData({ ...formData, duration: value });
  };

  const handleFrequencyChange = (value: string) => {
    setFormData({ ...formData, frequency: value });
  };

  const handleFitnessChange = (value: string) => {
    setFormData({ ...formData, fitness: value });
  };

  const handleFocusToggle = (item: string) => {
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
    } else if (onComplete) {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = (): boolean => {
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

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Personalize Your Boxing Training
            </h1>
            <p className="text-gray-400">
              Answer a few questions to get your perfect workout plan
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{currentStep}</div>
              <div className="text-sm text-gray-400">of 6</div>
            </div>
            <div className="flex-1 h-2 bg-neutral-800 rounded-full mx-4 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-600 to-red-700 transition-all duration-300"
                style={{ width: `${(currentStep / 6) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <Card className="bg-neutral-900 border-neutral-800 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              {currentStep === 1 && 'What is your experience level?'}
              {currentStep === 2 && 'What is your primary goal?'}
              {currentStep === 3 && 'What equipment do you have?'}
              {currentStep === 4 && 'How much time can you dedicate?'}
              {currentStep === 5 && 'What is your current fitness level?'}
              {currentStep === 6 && 'What do you want to focus on?'}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Step 1: Experience */}
            {currentStep === 1 && (
              <div className="space-y-3">
                {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                  <button
                    key={level}
                    onClick={() => handleExperienceChange(level)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left font-semibold ${
                      formData.experience === level
                        ? 'border-red-600 bg-red-600/10'
                        : 'border-neutral-700 bg-neutral-800 hover:border-red-600/50'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Goal */}
            {currentStep === 2 && (
              <div className="space-y-3">
                {['Weight Loss', 'Endurance', 'Technique', 'Strength', 'Competition', 'Fitness'].map(
                  (goal) => (
                    <button
                      key={goal}
                      onClick={() => handleGoalChange(goal)}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left font-semibold ${
                        formData.goal === goal
                          ? 'border-red-600 bg-red-600/10'
                          : 'border-neutral-700 bg-neutral-800 hover:border-red-600/50'
                      }`}
                    >
                      {goal}
                    </button>
                  )
                )}
              </div>
            )}

            {/* Step 3: Equipment */}
            {currentStep === 3 && (
              <div className="space-y-3">
                {['None', 'Heavy Bag', 'Speed Bag', 'Jump Rope', 'Wraps', 'Bands'].map(
                  (equipment) => (
                    <button
                      key={equipment}
                      onClick={() => handleEquipmentToggle(equipment)}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left font-semibold flex items-center ${
                        formData.equipment.includes(equipment)
                          ? 'border-red-600 bg-red-600/10'
                          : 'border-neutral-700 bg-neutral-800 hover:border-red-600/50'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-all ${
                          formData.equipment.includes(equipment)
                            ? 'border-red-600 bg-red-600'
                            : 'border-neutral-600'
                        }`}
                      >
                        {formData.equipment.includes(equipment) && (
                          <div className="w-2 h-2 bg-white rounded-sm"></div>
                        )}
                      </div>
                      {equipment}
                    </button>
                  )
                )}
              </div>
            )}

            {/* Step 4: Time */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-300">
                    Session Duration
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => handleDurationChange(e.target.value)}
                    className="w-full p-3 rounded-lg bg-neutral-800 border-2 border-neutral-700 text-white focus:border-red-600 focus:outline-none"
                  >
                    <option value="">Select duration...</option>
                    <option value="15">15 minutes</option>
                    <option value="20">20 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-300">
                    Weekly Frequency
                  </label>
                  <select
                    value={formData.frequency}
                    onChange={(e) => handleFrequencyChange(e.target.value)}
                    className="w-full p-3 rounded-lg bg-neutral-800 border-2 border-neutral-700 text-white focus:border-red-600 focus:outline-none"
                  >
                    <option value="">Select frequency...</option>
                    <option value="2">2 days per week</option>
                    <option value="3">3 days per week</option>
                    <option value="4">4 days per week</option>
                    <option value="5">5 days per week</option>
                    <option value="6">6 days per week</option>
                    <option value="7">7 days per week</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 5: Fitness Level */}
            {currentStep === 5 && (
              <div className="space-y-3">
                {['Low', 'Moderate', 'High'].map((level) => (
                  <button
                    key={level}
                    onClick={() => handleFitnessChange(level)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left font-semibold ${
                      formData.fitness === level
                        ? 'border-red-600 bg-red-600/10'
                        : 'border-neutral-700 bg-neutral-800 hover:border-red-600/50'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            )}

            {/* Step 6: Focus Areas */}
            {currentStep === 6 && (
              <div className="space-y-3">
                {['Footwork', 'Power', 'Speed', 'Defense', 'Conditioning'].map((focus) => (
                  <button
                    key={focus}
                    onClick={() => handleFocusToggle(focus)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left font-semibold flex items-center ${
                      formData.focus.includes(focus)
                        ? 'border-red-600 bg-red-600/10'
                        : 'border-neutral-700 bg-neutral-800 hover:border-red-600/50'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-all ${
                        formData.focus.includes(focus)
                          ? 'border-red-600 bg-red-600'
                          : 'border-neutral-600'
                      }`}
                    >
                      {formData.focus.includes(focus) && (
                        <div className="w-2 h-2 bg-white rounded-sm"></div>
                      )}
                    </div>
                    {focus}
                  </button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={handleBack}
            variant="outline"
            disabled={currentStep === 1}
            className="flex-1 border-2 border-neutral-700 text-white hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === 6 ? 'Complete Setup' : 'Next'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Step Indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full transition-all ${
                step === currentStep
                  ? 'bg-red-600 w-8'
                  : step < currentStep
                    ? 'bg-red-600'
                    : 'bg-neutral-700'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
