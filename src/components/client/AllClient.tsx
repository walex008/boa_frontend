import { useMemo, useState, useCallback } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  MRT_ToggleFiltersButton,
  MRT_Row,
} from "material-react-table";
import { Box, IconButton, ThemeProvider, Tooltip } from "@mui/material";
import { ExportToCsv } from "export-to-csv";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";
import { useViewport } from "../extras/hooks/Viewport";
import MuiThemes from "../extras/MuiThemes";

type ClientDataType = {
  id?: number;
  name?: string;
  group?: string;
  created?: string;
  gender?: string;
  mobile?: string;
  status?: string;
  branch?: string;
  staff?: string;
};

const data: ClientDataType[] = [
  {
    id: 1,
    name: "Adeyinka Suliat",
    group: "Nil",
    created: "6 months ago",
    gender: "Female",
    mobile: "0123498889",
    status: "Active",
    branch: "Branch 1",
    staff: "Adeola seun",
  },

  {
    id: 2,
    name: "Adeyinka Suliat",
    group: "Joyful",
    created: "7 months ago",
    gender: "Male",
    mobile: "0123498889",
    status: "Pending",
    branch: "Branch 2",
    staff: "Adeola seun",
  },
  {
    id: 3,
    name: "Adeyinka Suliat",
    group: "Nil",
    created: "6 months ago",
    gender: "Female",
    mobile: "0123498889",
    status: "Active",
    branch: "Branch 1",
    staff: "Adeola seun",
  },

  {
    id: 4,
    name: "Adeyinka Suliat",
    group: "Joyful",
    created: "7 months ago",
    gender: "Male",
    mobile: "0123498889",
    status: "Pending",
    branch: "Branch 2",
    staff: "Adeola seun",
  },
];

const AllClient = () => {
  const [tableData, setTableData] = useState<ClientDataType[]>(data);
  const darkMode = useAppSelector(mode);
  const navigate = useNavigate();
  const { width } = useViewport();
  const darkTheme = MuiThemes();

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
        size: 135,
      },
      {
        accessorKey: "group",
        header: "Group",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 30,
      },
      {
        accessorKey: "created",
        header: "Created",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 120,
      },
      {
        accessorKey: "gender",
        header: "Gender",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 30,
      },
      {
        accessorKey: "mobile",
        header: "Mobile",
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
        size: 20,
      },
      {
        accessorKey: "branch",
        header: "Branch",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 90,
      },
      {
        accessorKey: "staff",
        header: "Staff",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 130,
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
    <div className=" mt-[23px] px-[30px] pb-[50px]">
      <>
        <div className="flex gap-x-[10px] mr-[30px] mt-[13px] items-center justify-end">
          <Link
            to={"/dashboard"}
            className={`text-[0.625rem] md:text-[1.25rem] font-[600] ${
              darkMode === "true" ? "text-textGreyWhite" : "text-textGrey"
            }`}
          >
            Dashboard
          </Link>
          <span
            className={`text-[0.625rem] md:text-[1.25rem] font-[600] ${
              darkMode === "true" ? "text-textGreyWhite" : "text-textGrey"
            }`}
          >
            &gt;
          </span>
          <span
            className={`text-[0.625rem] md:text-[1.25rem] font-[600] ${
              darkMode === "true" ? "text-textWhite" : "text-textBlackH"
            }`}
          >
            Client
          </span>
        </div>

        <div className="flex gap-x-[16px] items-center mt-[24px]">
          <span
            className={` text-[1rem] md:text-[2.5rem] font-[600] ${
              darkMode === "true" ? "text-textWhite" : "text-textBlackH"
            }`}
          >
            Client
          </span>
          <div
            className={`w-[1px] h-[10px] md:h-[18px] ${
              darkMode === "true" ? "bg-textWhite" : "bg-textBlackH"
            }`}
          ></div>
          <span className="text-textGrey text-[0.625rem] md:text-[1.5rem] font-[600]">
            Client Management
          </span>
        </div>
      </>
      <div
        className={`h-[38px] md:h-[62px] w-[5rem] md:w-fit p-[2px_22px_6.795px_17px] md:p-[18px_19px_19px_44px] flex flex-col md:flex-row items-center justify-center gap-x-[6px] rounded-[16px_16px_0px_0px] mt-[50px] cursor-pointer ${
          darkMode === "true" ? " bg-bgSemiBlack" : "bg-textWhite"
        }`}
      >
        <div className="text-[0.75rem] md:text-[1.25rem] text-blue font-[600]">
          ALL
        </div>
        <div className="bg-redLight p-[2px_8px] md:p-[2px_18px] rounded-[15px] text-[0.5rem] md:text-[1.125rem] font-[600] text-textBlackH">
          30
        </div>
      </div>
      <div
        className={`${
          darkMode === "true" ? "bg-[#22262B]" : "bg-[#fff]"
        } rounded-[16px] p-[10px] mt-[-3px]`}
      >
        <ThemeProvider theme={darkTheme}>
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
                padding: "8px 12px 8px",
                borderRadius: "16px",
                marginTop: `${width < 768 ? "10px" : "0"}`,
              },
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
                <button className="bg-blueLight w-[78px] md:w-[107px] h-[32px] md:h-[48px] p-[3.02px_6.04px] md:p-[8px_16px] rounded-[8px] flex items-center gap-x-[3px] md:gap-x-[8px] self-end text-blue text-[0.75rem] md:text-[1rem] font-[600] justify-center">
                  Download{" "}
                  <img
                    src="/images/export.png"
                    alt=""
                    className="h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                  />
                </button>
                <button
                  className="bg-blueLight w-[78px] md:w-[107px] h-[32px] md:h-[48px] p-[3.02px_6.04px] md:p-[8px_16px] rounded-[8px] flex items-center gap-x-[3px] md:gap-x-[8px] self-end text-blue text-[0.75rem] md:text-[1rem] font-[600] justify-center"
                  onClick={handleExportData}
                >
                  Import{" "}
                  <img
                    src="/images/export.png"
                    alt=""
                    className="h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                  />
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
                      className=" h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow placement="right" title="Delete">
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteRow(row)}
                  >
                    <img
                      src={`/images/${
                        darkMode === "true" ? "deleteGrey" : "delete"
                      }.png`}
                      alt=""
                      className=" h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
            renderTopToolbarCustomActions={() => (
              <Box>
                <button
                  className="w-[123px] md:w-[187px] h-[32px] md:h-[48px] p-[3.02px_6.04px] md:p-[8px_16px] text-[0.75rem] md:text-[1rem] font-[600] bg-blue text-textWhite rounded-[8px] flex items-center justify-center gap-x-[4px] md:gap-x-[30px]"
                  onClick={() => navigate("/client/add-client")}
                >
                  Add Client{" "}
                  <img
                    src="/images/plusWhite.png"
                    alt=""
                    className="h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                  />{" "}
                </button>
              </Box>
            )}
            muiTableHeadCellProps={{
              sx: {
                fontSize: `${width < 768 ? "0.8125rem" : "1.125rem"}`,
                color: darkMode === "true" ? "#fff" : "#1A1A1A",
                fontWeight: "700",
                border: "none",
                backgroundColor: darkMode === "true" ? "#22262B" : "#fff",
              },
            }}
            muiTableBodyCellProps={({ row, column }) => ({
              onClick: () => {
                if (column.id !== "mrt-row-actions") {
                  navigate(`/client/client-details/${row.original.id}`);
                }
              },

              sx: {
                fontSize: `${width < 768 ? "0.8125rem" : "1.125rem"}`,
                color: darkMode === "true" ? "#fff" : "#1A1A1A",
                fontWeight: "600",
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
        </ThemeProvider>
      </div>{" "}
    </div>
  );
};

export default AllClient;
