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
  const [tableData, setTableData] = useState<InputDataType[]>(data);
  const [openRowModal, setOpenRowModal] = useState<string | null>(null);
  const rowModalRef = useRef(null);
  const rowBtnRef = useRef(null);
  const navigate = useNavigate();

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
        className={`h-[62px] w-fit p-[18px_19px_19px_44px] flex items-center justify-center gap-x-[6px] rounded-[16px_16px_0px_0px] cursor-pointer bg-textWhite`}
      >
        <div className="text-[20px] text-blue font-[600]">STAFFS</div>
        <div className="bg-redLight p-[2px_18px] rounded-[15px] text-[18px] font-[600] text-textBlackH">
          30
        </div>
      </div>
      <MaterialReactTable
        muiTableBodyRowProps={({ row }) => ({
          onClick: (event) => {
            console.info(event, row.id);
            navigate(`/staff-details/${row.original.id}`);
          },
          sx: {
            cursor: "pointer",
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
            backgroundColor: "#F6F7F8",
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
              className="bg-blueLight w-[107px] h-[48px] p-[8px_16px] rounded-[8px] flex items-center gap-x-[8px] self-end text-blue text-[18px] font-[600]"
              onClick={handleExportData}
            >
              Export <img src="/images/export.png" alt="" />
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
              className="w-[187px] h-[48px] p-[8px_16px] text-[18px] font-[600] bg-blue text-textWhite rounded-[8px] flex items-center gap-x-[8px]"
              onClick={() => navigate("/add-new-staff")}
            >
              Add New Staff <img src="/images/plusWhite.png" alt="" />{" "}
            </button>
          </Box>
        )}
        muiTableBodyCellProps={({ row, column }) => ({
          sx: {
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
                fontSize: "18px",
                color:
                  column.columnDef.header === "Name" ? "#1A1A1A" : "#404040",
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
              fontSize: "18px",
              fontWeight: "600",

              "& div": {
                position: "fixed",
                backgroundColor: "#fff",
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
            fontSize: "18px",
            color: "#1A1A1A",
            fontWeight: "700",
          },
        }}
      />
    </div>
  );
};

export default Staffs;
