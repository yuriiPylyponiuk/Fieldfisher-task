import { useNavigate } from "react-router-dom";
import { TableHeaders, TableItem } from "../components";
import { useAppSelector } from "../lib/hooks";

export const CaseList = () => {
  const { list } = useAppSelector((state) => state.main);
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Add more customers</button>
      {list.length ? (
        <>
          <TableHeaders />
          {list.map((item) => (
            <TableItem key={item.id} item={item} />
          ))}
        </>
      ) : (
        <p>No customers added yet.</p>
      )}
    </div>
  );
};
