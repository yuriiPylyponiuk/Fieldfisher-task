import { FC } from "react";

type StepTwoUserData = {
  startDate: string;
};

type UserFormProps = StepTwoUserData & {
  updateFields: (fields: Partial<StepTwoUserData>) => void;
};

export const StepTwo: FC<UserFormProps> = ({ startDate, updateFields }) => {
  return (
    <div className="modal-steps">
      <label>Start Date</label>
      <input
        autoFocus
        required
        type="date"
        value={startDate}
        onChange={(e) => updateFields({ startDate: e.target.value })}
      />
    </div>
  );
};
