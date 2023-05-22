import React, { useCallback, useMemo, useState } from 'react';
import MaterialReactTable, {
  type MaterialReactTableProps,
  type MRT_Cell,
  type MRT_ColumnDef,
  type MRT_Row,
} from 'material-react-table';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,

  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { data, states } from './makeData2';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { HiOutlineEye } from "react-icons/hi2";

export type Person = {
  id: string;
  proveedor: string;
  registro: string;
  factura: string;
  state: string;
  total :number;
  fecha:string;
};

const Example = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState<Person[]>(() => data);
  const [validationErrors, setValidationErrors] = useState<{
    [cellId: string]: string;
  }>({});

  const handleCreateNewRow = (values: Person) => {
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits: MaterialReactTableProps<Person>['onEditingRowSave'] =
    async ({ exitEditingMode, row, values }) => {
      if (!Object.keys(validationErrors).length) {
        tableData[row.index] = values;
        //send/receive api updates here, then refetch or update local table data for re-render
        setTableData([...tableData]);
        exitEditingMode(); //required to exit editing mode and close modal
      }
    };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row: MRT_Row<Person>) => {
      if (
        !confirm(`Estás seguro que quieres borrar ${row.getValue('factura')}?`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData],
  );

  const getCommonEditTextFieldProps = useCallback(
    (
      cell: MRT_Cell<Person>,
    ): MRT_ColumnDef<Person>['muiTableBodyCellEditTextFieldProps'] => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        
      };
    },
    [validationErrors],
  );

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'Serie',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: 'factura',
        header: 'Factura',
        enableColumnOrdering: false,
        enableSorting: false,
        enableEditing: false,
        size: 140,
        enableColumnFilter: false,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'fecha',
        header: 'Fecha',
        filterFn: 'between',
        enableColumnOrdering: false,
        enableEditing: false,
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'registro',
        header: 'Registro',
        enableColumnOrdering: false,
        enableSorting: false,
        enableEditing: false,
        enableColumnFilter: false,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'string',
        }),
      },
      {
        accessorKey: 'proveedor',
        header: 'Proveedor',
        enableColumnOrdering: false,
        enableSorting: true,
        enableEditing: false,
        enableColumnFilter: false,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: 'string',
        }),
      },
      {
        accessorKey: 'total',
        header: 'Total',
        enableColumnOrdering: false,
        enableEditing: false,
        enableColumnFilter: false,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell) ,
          type: 'number',
        }),
      },
      {
        accessorKey: 'state',
        header: 'Estado',
        
        enableColumnOrdering: false,
        enableSorting: true,
        Cell: ({ cell }) => (
          <Box
        component="span"
        sx={(theme) => ({
        color:
        cell.getValue<string>() === "Aceptada"
        ? "#5db73c"
        : cell.getValue<string>() === "Rechazada"
        ? theme.palette.error.light
        : "rgba(255,157,0,1)",
        borderRadius: "0.25rem",
        fontWeight:"400",
        padding:"0.5rem",
        maxWidth: "9ch",
        p: "0.25rem",
      })}
>
            {cell.getValue<number>()?.toLocaleString?.('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </Box>
          ),
      },
      
      
    ],
    [getCommonEditTextFieldProps],
  );

  return (
    <>
    
      <MaterialReactTable 
         enableColumnActions={false}
         enableDensityToggle={false}
         enableExpanding={false}
         enablePagination={false}
         enableHiding={false}
         enableRowOrdering={false}
         enableColumnVirtualization={false}
         enableColumnResizing={false}
         enableColumnFilterModes={false}
         enableColumnDragging={false}
         enableExpandAll={false}
         enableSorting={true}
         enableBottomToolbar={false}
         enableTopToolbar={true}
         displayColumnDefOptions={{
          
        }}
        

       

        muiTablePaperProps={{
          sx:{
            boxShadow:"0px 0px 0px 0px",
            
          }
        }}

      
        muiTableHeadCellProps={{
          //easier way to create media queries, no useMediaQuery hook needed.
          sx: {
            fontWeight:"400",
            color:"black",
            boxShadow:"1px white",
            borderBottom:"1px solid black"
            
          },
        }}

        muiTableBodyCellProps={{

          sx:{
            color:"gray",
            fontWeight:"100",
            boxShadow:"0px"
          }
        }}
        columns={columns}
        data={tableData}
        editingMode="modal" //default
        positionActionsColumn='last'
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem', borderRadius:"5px", boxShadow:"0px" }}>
            <Tooltip arrow placement="left" title="Cambiar estado">
              <IconButton sx ={{color:"rgba(255,157,0,1)",":hover":{color:"#ff574a"}}}onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Ver factura">
              <IconButton sx={{color:"#0288d1", ":hover":{color:"#303ab2"}}} onClick={() => handleDeleteRow(row)}>
                <HiOutlineEye />
              </IconButton>
            </Tooltip>
          
          </Box>
        )}
        
        
      />
      <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </>
  );
};

interface CreateModalProps {
  columns: MRT_ColumnDef<Person>[];
  onClose: () => void;
  onSubmit: (values: Person) => void;
  open: boolean;
}

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({
  open,
  columns,
  onClose,
  onSubmit,
}: CreateModalProps) => {
  const [values, setValues] = useState<any>(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = '';
      return acc;
    }, {} as any),
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Nuevo Contacto</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem',
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancelar</Button>
        <Button color="primary" onClick={handleSubmit} variant="contained">
          Nueva Factura
        </Button>
      </DialogActions>
    </Dialog>
  );
};



export default Example



