import { FC } from "react";
import { CustomerPropType } from "../lib/feature/list/listSlice";

interface TableItemPropsType {
  item: CustomerPropType;
}

export const TableItem: FC<TableItemPropsType> = ({ item }) => (
  <div className="customer-list">
    <p>{item.customerName}</p>
    <p>{item.startDate}</p>
    <p>{item.isFinished ? "Done" : ""}</p>
  </div>
);
