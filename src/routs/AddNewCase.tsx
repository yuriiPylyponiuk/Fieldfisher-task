import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { FormComponent, Modal, StepOne, StepTwo } from "../components";
import { useMultistepForm } from "../hooks/useMultistepForm";
import { CustomerPropType, addItem } from "../lib/feature/list/listSlice";
import { useAppDispatch, useAppSelector } from "../lib/hooks";

const INITIAL_DATA: CustomerPropType = {
  customerName: "",
  startDate: "",
  isFinished: false,
  id: "",
};

const LIST_LINK = "/list";
const NAME_IN_USE_MESSAGE = "Customer name is already in use";

export const AddNewCase = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { list } = useAppSelector((state) => state.main);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<CustomerPropType>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const stepsList = [
    <StepOne {...data} updateFields={updateFields} />,
    <StepTwo {...data} updateFields={updateFields} />,
  ];

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm(stepsList);

  const finalizeSubmission = () => {
    dispatch(addItem({ ...data, isFinished: true, id: uuidv4() }));
    setIsOpen(false);
    navigate(LIST_LINK);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();

    const userInUse = list.find((item) => item.customerName === data.customerName);

    !userInUse ? finalizeSubmission() : alert(NAME_IN_USE_MESSAGE);
  };

  return (
    <div>
      <Modal open={isOpen} close={() => setIsOpen(!isOpen)}>
        <FormComponent
          onSubmit={onSubmit}
          currentStepIndex={currentStepIndex}
          step={step}
          steps={steps}
          back={back}
          isLastStep={isLastStep}
          isFirstStep={isFirstStep}
        />
      </Modal>
      <h2>Click on the Button to add Customer case</h2>
      <button onClick={() => setIsOpen(true)}>Add New Case</button>
    </div>
  );
};
