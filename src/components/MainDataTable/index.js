import React from "react";
import DataTable from "react-data-table-component";
import AddItemButton from "../../components/AddItemButton";
import { useNavigate } from "react-router-dom";

export default function MainDataTable({ data, columns, navigateEndpoint }) {
  let navigate = useNavigate();

  return (
    <div>
      <AddItemButton label="Add User" routeNavigate={"/user"} />

      <DataTable
        columns={columns}
        data={data}
        keyField={data?.id}
        highlightOnHover={true}
        striped={true}
        pointerOnHover={true}
        onRowClicked={(data) => navigate(`${navigateEndpoint}/form/${data.id}`)}
      />
    </div>
  );
}
