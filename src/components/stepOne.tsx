import { FC } from "react";

type StepOneUserData = {
  customerName: string;
};

type UserFormProps = StepOneUserData & {
  updateFields: (fields: Partial<StepOneUserData>) => void;
};

export const StepOne: FC<UserFormProps> = ({ customerName, updateFields }) => {
  return (
    <div className="modal-steps">
      <label>Customer Name</label>
      <input
        autoFocus
        required
        type="text"
        value={customerName}
        onChange={(e) => updateFields({ customerName: e.target.value })}
      />
    </div>
  );
};
