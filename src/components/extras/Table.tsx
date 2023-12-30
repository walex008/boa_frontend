import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppSelector} from "../../app/hooks";
import { mode} from "../../appSlices/generalSlice";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
  MRT_ToggleFiltersButton,
} from "material-react-table";
import { Box, IconButton, ThemeProvider, Tooltip } from "@mui/material";
import { ExportToCsv } from "export-to-csv";
import { useNavigate } from "react-router-dom";
import { useViewport } from "./hooks/Viewport";
import MuiThemes from "./MuiThemes";

export type InputDataType = {
  id?: number;
  head_office_id?: string;
  zone_id?: string;
  area_id?: string;
  branch_id?: string;
  name: string;
  address?: string;
  opening_date: string;
  status?: string;
  description?: string;
  created_by?: string;
  is_system?: string;
};

export type InputType = {
  linkText: string;
  linkTo: string;
  btnIcon?: string;
  inputData: InputDataType[];
  click: (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id?: number,
    zone_id?: string,
    area_id?: string,
    branch_id?: string
  ) => void;
};

const Table = ({ linkText, linkTo, inputData, btnIcon, click }: InputType) => {
  const [tableData, setTableData] = useState<InputDataType[]>(inputData);
  const darkMode = useAppSelector(mode);
  const navigate = useNavigate();

  const {width}=useViewport()

  useEffect(() => {
    setTableData(inputData);
  }, [inputData]);

  const handleDeleteRow = useCallback(
    (row: MRT_Row<InputDataType>) => {
      if (
        !confirm(`Are you sure you want to delete ${row.getValue("firstName")}`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
  );

  const columns = useMemo<MRT_ColumnDef<InputDataType>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
      },
      {
        accessorKey: "opening_date",
        header: "Open Date",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
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
    csvExporter.generateCsv(tableData);
  };
  const darkTheme=MuiThemes()

  return (
    <>
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
          marginTop:`${width < 768 ?"10px":"0"}`,
        
         
          },
        }}
        positionActionsColumn="last"
        columns={columns}
        data={tableData}
        editingMode="modal" //default
        enableEditing
        enableColumnActions={false}
        enableHiding={false}
        enableDensityToggle={false}
        enableFullScreenToggle={false}
        enableGlobalFilterModes
        initialState={{
          showGlobalFilter: true,
        }}
        positionGlobalFilter="right"
        renderRowActions={({ row }) => (
          <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton>
                <img
                  src={`/images/${
                    darkMode === "true" ? "editGrey" : "edit"
                  }.png`}
                  alt=""

                  className="h-[16px] md:h-[24px] w-[16px] md:w-[24px]"
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
                  className="h-[16px] md:h-[24px] w-[16px] md:w-[24px]"
                />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderToolbarInternalActions={({ table }) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginLeft: "8px",
            }}
          >
            <button
              className="bg-blueLight w-[78px] md:w-[107px] h-[32px] md:h-[48px] p-[3.02px_6.04px] md:p-[8px_16px] rounded-[8px] flex items-center gap-x-[3px] md:gap-x-[8px] self-end text-blue text-[0.75rem] md:text-[1rem] font-[600] justify-center"
              onClick={handleExportData}
            >
              Export <img src="/images/export.png" alt="" className=" h-[16px] w-[16px] md:h-[24px] md:w-[24px]"/>
            </button>
            <MRT_ToggleFiltersButton table={table} />
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Box>
            <button
              className="w-[123px] md:w-[187px] h-[32px] md:h-[48px] p-[3.02px_6.04px] md:p-[8px_16px] text-[0.75rem] md:text-[1rem] font-[600] bg-blue text-textWhite rounded-[8px] flex items-center justify-center gap-x-[4px] md:gap-x-[30px]"
              onClick={() => navigate(linkTo)}
            >
              {linkText}
              
                <img src={`/images/${btnIcon==="add"?"plusWhite":"forwardWhite"}.png`} alt="" className="h-[16px] md:h-[24px] w-[16px] md:w-[24px]"/>
       
            </button>
          </Box>
        )}
        muiTableBodyCellProps={() => ({
          sx: {
            
            fontSize: `${width < 768 ? "0.8125rem":"1.125rem"}`,
            color: darkMode === "true" ? "#fff" : "#1A1A1A",
            fontWeight: "600",
          },
        })}
        muiTableHeadCellProps={{
          sx: {
            fontSize: `${width < 768 ? "0.8125rem":"1.125rem"}`,
            color: darkMode === "true" ? "#fff" : "#1A1A1A",
            fontWeight: "700",
            border: "none",
            backgroundColor: darkMode === "true" ? "#22262B" : "#fff",
          },
        }}
        muiTableBodyRowProps={({ row }) => ({
          onClick: (event) =>
            click(
              event,
              row.original.id,
              row.original.zone_id,
              row.original.area_id,
              row.original.branch_id
            ),
          sx: {
            cursor: "pointer",
            backgroundColor: darkMode === "true" ? "#22262B" : "#fff",
            borderBottom: "#5A6672",
            "&:hover": {
              backgroundColor: darkMode === "true" ? "#000" : "#F6F7F8",
            },
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
    </>
    
  );
};

export default Table;
