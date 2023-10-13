import { useMemo, useState, useCallback } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  MRT_Row,
} from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";

type ClientDataType = {
  name?: string;
  chargeType?: string;
  amount?: string;
  collectedOn?: string;
};

const data: ClientDataType[] = [];

const Charges = () => {
  const [tableData, setTableData] = useState<ClientDataType[]>(data);
  const darkMode = useAppSelector(mode);
  const navigate = useNavigate();

  const handleDeleteRow = useCallback(
    (row: MRT_Row<ClientDataType>) => {
      if (!confirm(`Are you sure you want to delete ${row.getValue("name")}`)) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
  );

  const columns = useMemo<MRT_ColumnDef<Record<string, any>>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 120,
      },
      {
        accessorKey: "chargeType",
        header: "Charge Type",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 120,
      },
      {
        accessorKey: "amount",
        header: "Amount",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 90,
      },
    ],
    []
  );

  return (
    <div className=" max-w-[40.6875rem]">
      <div
        className={`h-[62px] w-[fit-content] p-[18px_19px_19px_18px] text-[20px] text-blue font-[600] flex items-center justify-center gap-x-[6px] rounded-[16px_16px_0px_0px] cursor-pointer mt-[44px] ${
          darkMode === "true" ? " bg-bgSemiBlack" : "bg-textWhite"
        }`}
      >
        CHARGES
      </div>
      <div
        className={`${
          darkMode === "true" ? "bg-[#22262B]" : "bg-[#fff]"
        } rounded-[16px] p-[10px] mt-[-3px]`}
      >
        <MaterialReactTable
          icons={{
            FilterListIcon: (props: any) => (
              <img
                src={`/images/${
                  darkMode === "true" ? "filterWhite" : "filter"
                }.png`}
                alt=""
                {...props}
              />
            ),
            FilterListOffIcon: (props: any) => (
              <img
                src={`/images/${
                  darkMode === "true" ? "filterWhite" : "filter"
                }.png`}
                alt=""
                {...props}
              />
            ),
          }}
          muiTableBodyRowProps={() => ({
            sx: {
              cursor: "pointer",
              backgroundColor: darkMode === "true" ? "#22262B" : "#fff",
              borderBottom: "#5A6672",
              "&:hover": {
                backgroundColor: darkMode === "true" ? "#000" : "#F6F7F8",
              },
            },
          })}
          displayColumnDefOptions={{
            "mrt-row-actions": {
              muiTableHeadCellProps: {
                align: "center",
              },
            },
          }}
          muiTablePaperProps={{
            elevation: 0,
            sx: {
              backgroundColor: darkMode === "true" ? "#22262B" : "#fff",
            },
          }}
          muiSearchTextFieldProps={{
            sx: {
              backgroundColor: darkMode === "true" ? "#434C56" : "#F6F7F8",
              padding: "14px 18px 10px",
              borderRadius: "16px",
            },
          }}
          positionActionsColumn="last"
          columns={columns}
          data={tableData}
          editingMode="modal" //default
          // enableEditing
          enableColumnActions={false}
          enableRowActions={true}
          enableHiding={false}
          enableDensityToggle={false}
          enableFullScreenToggle={false}
          enableGlobalFilterModes
          initialState={{
            showGlobalFilter: true,
          }}
          positionGlobalFilter="right"
          renderRowActions={({ row }) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Tooltip arrow placement="left" title="Edit">
                <IconButton
                  onClick={() => {
                    navigate(`/loans/edit-loan/${row.original.id}`);
                  }}
                >
                  <img
                    src={`/images/${
                      darkMode === "true" ? "editGrey" : "edit"
                    }.png`}
                    alt=""
                  />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="right" title="Delete">
                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                  <img
                    src={`/images/${
                      darkMode === "true" ? "deleteGrey" : "undo"
                    }.png`}
                    alt=""
                    className="w-[16px] h-[16px]"
                  />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          renderTopToolbarCustomActions={() => (
            <Box>
              <button
                className=" h-[48px] p-[8px_16px] text-[18px] font-[600] bg-blue text-textWhite rounded-[8px] flex items-center gap-x-[8px]"
                onClick={() => navigate("/loans/add-charge")}
              >
                Add Charge <img src="/images/plusWhite.png" alt="" />{" "}
              </button>
            </Box>
          )}
          muiTableHeadCellProps={{
            sx: {
              color: darkMode === "true" ? "#fff" : "#1A1A1A",
              backgroundColor: darkMode === "true" ? "#22262B" : "#fff",
              fontWeight: "700",
              fontSize: "16px",
            },
          }}
          muiTableBodyCellProps={({ row, column }) => ({
            onClick: () => {
              if (column.id !== "mrt-row-actions") {
                navigate(
                  `/loans/transaction-details/${row.original.transactionID}`
                );
              }
            },

            sx: {
              color: darkMode === "true" ? "#fff" : "#1A1A1A",
            },
          })}
          muiTopToolbarProps={{
            sx: { backgroundColor: darkMode === "true" ? "#22262B" : "#fff" },
          }}
          muiBottomToolbarProps={{
            sx: {
              backgroundColor: darkMode === "true" ? "#22262B" : "#fff",
            },
          }}
          muiTablePaginationProps={{
            sx: {
              color: darkMode === "true" ? "#fff" : "#1A1A1A",
            },
          }}
        />
      </div>{" "}
    </div>
  );
};

export default Charges;
