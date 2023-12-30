import { useMemo, useState, useRef } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  MRT_ToggleFiltersButton,
} from "material-react-table";
import { Box } from "@mui/material";
import { ExportToCsv } from "export-to-csv";
import { useNavigate } from "react-router-dom";
import { useClickOutNull } from "../../../utils/hooks/CheckOut";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";
import { useViewport } from "../../extras/hooks/Viewport";

type InputDataType = {
  id: string;
  name: React.ReactNode;
  email: React.ReactNode;
};

const data: InputDataType[] = [
  {
    id: "1",
    name: (
      <div>
        <img src="/images/user.png" alt="" /> <span>Adeyinka Suliat</span>
      </div>
    ),
    email: (
      <div>
        <span>Adeyinkasuliat1@gmail.com</span>
      </div>
    ),
  },
  {
    id: "2",
    name: (
      <div>
        <img src="/images/user.png" alt="" /> <span>Adeyinka Suliat</span>
      </div>
    ),
    email: (
      <div>
        <span>Adeyinkasuliat1@gmail.com</span>
      </div>
    ),
  },

  {
    id: "3",
    name: (
      <div>
        <img src="/images/user.png" alt="" /> <span>Adeyinka Suliat</span>
      </div>
    ),
    email: (
      <div>
        <span>Adeyinkasuliat1@gmail.com</span>{" "}
        <small>
          Invitation pending <img src="/images/send.png" alt="" />
        </small>
      </div>
    ),
  },
  {
    id: "4",
    name: (
      <div>
        <img src="/images/user.png" alt="" /> <span>Adeyinka Suliat</span>
      </div>
    ),
    email: (
      <div>
        <span>Adeyinkasuliat1@gmail.com</span>
      </div>
    ),
  },
];

const Staffs = () => {
  const tableData:InputDataType[] = data;
  const [openRowModal, setOpenRowModal] = useState<string | null>(null);
  const rowModalRef = useRef(null);
  const rowBtnRef = useRef(null);
  const navigate = useNavigate();
  const darkMode=useAppSelector(mode)
  const {width}=useViewport()

  useClickOutNull({
    onState: openRowModal,
    mainRef: rowModalRef,
    subRef: rowBtnRef,
    setFunc: setOpenRowModal,
  });

  const columns = useMemo<MRT_ColumnDef<Record<string, any>>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
      },
      {
        accessorKey: "email",
        header: "Email",
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
    csvExporter.generateCsv(data);
  };

  return (
    <div className=" mt-[50px] px-[30px] pb-[50px]">
      <div
        className={`h-[38px] md:h-[62px] w-fit p-[2px_22px_6.795px_17px] md:p-[18px_19px_19px_44px] flex flex-col md:flex-row items-center justify-center gap-x-[6px] rounded-[16px_16px_0px_0px] cursor-pointer ${darkMode==="true"?"bg-bgSemiBlack":"bg-textWhite"}`}
      >
        <div className="text-[0.75rem] md:text-[1.25rem] text-blue font-[600]">STAFFS</div>
        <div className="bg-redLight p-[2px_8px] md:p-[2px_18px] rounded-[15px] text-[0.5rem] md:text-[1.125rem] font-[600] text-textBlackH">
          30
        </div>
      </div>

      <div className="w-full  mt-[-3px]">
      <div
        className={`w-full rounded-[16px]  p-[5px] ${
          darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
        }`}
      >
        {/* {isLoading && (
          <Oval
            height={40}
            width={40}
            color="#fff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#22262B"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        )} */}
      <MaterialReactTable
        muiTableBodyRowProps={({ row }) => ({
          onClick: (event) => {
            console.info(event, row.id);
            navigate(`/staff-details/${row.original.id}`);
          },
          sx: {
            cursor: "pointer",
            backgroundColor: darkMode === "true" ? "#22262B" : "#fff",
            borderBottom: "#5A6672",
            "&:hover": {
              backgroundColor: darkMode === "true" ? "#000" : "#F6F7F8",
            },
          },
        })}
        localization={{
          actions: "Assign",
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
        renderRowActions={({ row }) => (
          <Box>
            <button>
              {row.original.id === "3" ? "Branch" : "Head"}
              <img
                src="/images/dropDownWhite.png"
                alt=""
                onClick={() => setOpenRowModal(row.original.id)}
              />
              <div ref={rowModalRef}>
                <button ref={rowBtnRef} onClick={() => setOpenRowModal(null)}>
                  Head Manager
                </button>
                <button ref={rowBtnRef} onClick={() => setOpenRowModal(null)}>
                  Zonal Manager
                </button>
                <button ref={rowBtnRef} onClick={() => setOpenRowModal(null)}>
                  Area Manager
                </button>
                <button ref={rowBtnRef} onClick={() => setOpenRowModal(null)}>
                  Branch Manager
                </button>
              </div>
            </button>
            <img src="/images/personDelete.png" alt="" />
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Box>
            <button
              className="w-[123px] md:w-[187px] h-[32px] md:h-[48px] p-[3.02px_6.04px] md:p-[8px_16px] text-[0.75rem] md:text-[1rem] font-[600] bg-blue text-textWhite rounded-[8px] flex items-center justify-center gap-x-[4px] md:gap-x-[30px]"
              onClick={() => navigate("/add-new-staff")}
            >
              Add New Staff <img src="/images/plusWhite.png" alt="" />{" "}
            </button>
          </Box>
        )}
        muiTableBodyCellProps={({ row, column }) => ({
          sx: {

            fontSize: `${width < 768 ? "0.8125rem":"1.125rem"}`,
          
            backgroundColor: darkMode === "true" ? "#22262B" : "#fff",
            "& div": {
              display: "flex",
              alignItems: "center",
              position: "relative",
              

              columnGap: column.columnDef.header === "Name" ? "16px" : "27px",

              "& img": {
                height: column.columnDef.header === "Name" ? "40px" : "24px",
                width: column.columnDef.header === "Name" ? "40px" : "24px",
              },
              "& span": {
                fontSize: `${width < 768 ? "0.8125rem":"1.125rem"}`,
                color:
                  column.columnDef.header === "Name" ? darkMode==="true"?"#fff": "#1A1A1A" : "#404040",
              },
            },
            "& button": {
              backgroundColor: "#66A1FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              columnGap: "8px",
              color: "#fff",
              width: "107px",
              height: "48px",
              padding: "8px 16px",
              borderRadius: "8px",
              boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.08)",
              fontSize: `${width < 768 ? "0.8125rem":"1.125rem"}`,
              fontWeight: "600",

              "& div": {
                position: "fixed",
                backgroundColor: darkMode === "true" ? "#22262B" : "#fff",
                right: "20px",
                top: "44%",
                zIndex: 4,
                display: row?.original?.id === openRowModal ? "flex" : "none",
                flexDirection: "column",
                padding: "17px 0px 21px 1px",
                borderRadius: "24px",
                borderRight: "3px solid #99C0FF",
                borderBottom: "3px solid #99C0FF",
                boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.12)",

                "& button": {
                  width: "150px",
                  height: "36px",
                  padding: "9px 17px 9px 17px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "400",
                  backgroundColor: "#fff",
                  color: "#404040",
                },

                "& button:hover": {
                  backgroundColor: "#CCE0FF",
                },
              },
            },
            "& small": {
              marginLeft: "40px",
              fontSize: "16px",
              fontWeight: "400",
              color: "#ED0036",
              display: "flex",
              alignItems: "center",
              columnGap: "8px",
            },
          },
        })}
        muiTableHeadCellProps={{
          sx: {
            fontSize: `${width < 768 ? "0.8125rem":"1.125rem"}`,
            color: darkMode === "true" ? "#fff" : "#1A1A1A",
            fontWeight: "700",
            backgroundColor: darkMode === "true" ? "#22262B" : "#fff",
          },
        }}
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

      </div>
    </div>
          </div>
  );
};

export default Staffs;
