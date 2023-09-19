import { useMemo, useState, useCallback } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  MRT_ToggleFiltersButton,
  MRT_Row,
} from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import { ExportToCsv } from "export-to-csv";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import { mode } from "../../../../appSlices/generalSlice";

type ClientDataType = {
  id?: number;
  amount?: string;
  balance?: string;
  disbursed?: string;
  status?: string;
  product?: string;
};

const data: ClientDataType[] = [];

const Loans = () => {
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
        accessorKey: "id",
        header: "ID",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 30,
      },
      {
        accessorKey: "amount",
        header: "Amount",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 100,
      },
      {
        accessorKey: "balance",
        header: "Balance",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 100,
      },
      {
        accessorKey: "disbursed",
        header: "Disbursed",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 100,
      },
      {
        accessorKey: "status",
        header: "Status",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 100,
      },

      {
        accessorKey: "product",
        header: "Product",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 100,
      },
    ],
    []
  );

  const csvOptions = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: columns.map((c) => c.header),
  };

  const csvExporter = new ExportToCsv(csvOptions);

  const handleExportData = () => {
    csvExporter.generateCsv(data);
  };

  return (
    <div className=" pb-[50px]">
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
              marginRight: "350px",
              marginTop: "-50px",
            },
          }}
          positionActionsColumn="last"
          columns={columns}
          data={tableData}
          editingMode="modal" //default
          // enableEditing
          enableColumnFilters={false}
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
          renderToolbarInternalActions={({ table }) => (
            <Box
              sx={{
                display: "flex",
                columnGap: "16px",
                justifyContent: "space-between",
                width: "100%",
                marginLeft: "8px",
              }}
            >
              <button className="bg-blueLight  h-[48px] p-[8px_16px] rounded-[8px] flex items-center gap-x-[8px] self-end text-blue text-[18px] font-[600]">
                PDF <img src="/images/export.png" alt="" />
              </button>
              <button
                className="bg-blueLight h-[48px] p-[8px_16px] rounded-[8px] flex items-center gap-x-[8px] self-end text-blue text-[18px] font-[600]"
                onClick={handleExportData}
              >
                Print <img src="/images/export.png" alt="" />
              </button>
              <MRT_ToggleFiltersButton table={table} />
            </Box>
          )}
          renderRowActions={({ row }) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Tooltip arrow placement="left" title="Edit">
                <IconButton>
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
                      darkMode === "true" ? "deleteGrey" : "delete"
                    }.png`}
                    alt=""
                  />
                </IconButton>
              </Tooltip>
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
                navigate(`/client/client-details/${row.original.id}`);
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

export default Loans;
