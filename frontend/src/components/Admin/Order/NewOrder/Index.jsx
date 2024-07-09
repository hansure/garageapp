// components/MultiStageForm.js
import React, { useState } from 'react';
import NewOrderStep1 from './NewOrderStep1';
import NewOrderStep2 from './NewOrderStep2';
import NewOrderStep3 from './NewOrderStep3';
import NewOrderStep4 from './NewOrderStep4';

const NewOrder = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    vehicleColor: '',
    vehicleTag: '',
  });
  const [selectedServices, setSelectedServices] = useState([]);
  const [activeStage, setActiveStage] = useState(1);

  const handleNext = () => {
    setActiveStage(activeStage + 1);
  };

  const handleBack = () => {
    setActiveStage(activeStage - 1);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form Data:', formData);
    console.log('Selected Services:', selectedServices);
    // Example: You can make an API call here to submit the form data
  };

  return (
    <div>
      {activeStage === 1 && (
        <NewOrderStep1
          formData={formData}
          setFormData={setFormData}
          onNext={handleNext}
        />
      )}
      {activeStage === 2 && (
        <NewOrderStep2
          formData={formData}
          setFormData={setFormData}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {activeStage === 3 && (
        <NewOrderStep3
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
      {activeStage === 4 && (
        <NewOrderStep4
          formData={formData}
          selectedServices={selectedServices}
          onBack={handleBack}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default NewOrder;
