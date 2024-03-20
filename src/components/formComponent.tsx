import { FC, FormEvent } from "react";

interface FormComponentPropType {
  onSubmit: (e: FormEvent) => void;
  currentStepIndex: number;
  step: React.ReactNode;
  steps: React.ReactNode[];
  back: () => void;
  isLastStep: boolean;
  isFirstStep: boolean;
}

export const FormComponent: FC<FormComponentPropType> = ({
  onSubmit,
  currentStepIndex,
  step,
  steps,
  back,
  isFirstStep,
  isLastStep,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="current-step">
        {currentStepIndex + 1} / {steps.length}
      </div>
      {step}
      <div className="btn-sub-block">
        {!isFirstStep && (
          <button type="button" onClick={back}>
            Back
          </button>
        )}
        <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
      </div>
    </form>
  );
};
