import MUIDataTable from "mui-datatables";
import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLaunches } from "../redux/features/launchSlice";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles"

export const TableAxios = () => {
    const { launches, } = useSelector((state) => state.launch);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLaunches());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const columns = [
        {
            name: 'mission_name',
            label: 'Mision',
        },
        {
            name: 'flight_number',
            label: 'No. Vuelo',
        },
        {
            name: 'launch_date_local',
            label: 'Fecha de Lanzamiento',
        },
    ]
    const options = {
        responsive: true,
        download: false,
        print: false,
        viewColumns: false,
        pagination: true,
        selectableRows: false,
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10, 50],
        
        textLabels: {
            body: {
              noMatch: "Lo sentimos, no encontramos ningun registro",
              toolTip: "Ordenar",
              columnHeaderTooltip: column => `Ordenar por ${column.label}`
            },
            pagination: {
              next: "Proxima Pagina",
              previous: "Pagina Anterior",
              rowsPerPage: "Filas por Paginas:",
              displayRows: "de",
            },
            
            filter: {
              all: "Todos",
              title: "Filtros",
              reset: "Reiniciar",
            },
        }

    }

    const getMuiTheme = () =>
        createTheme({
            
            palette: {
                background: {
                    paper: "#1e293b",
                    default: "#0f172a",
                },
                mode: "dark",
            },
            components: {
                MuiTableCell: {
                    styleOverrides: {
                        head: {
                            padding: "10px 4px",
                        }
                    }
                }
            }
        });

    return (
        <div className="bg-slate-700 py-10 min-h-screen grid place-items-center">
            <div className="w-10/12 max-w-4xl" >
                <table width={'90%'} align={'center'}>
                    <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable
                            title={"Misiones"}
                            data={launches}
                            columns={columns}
                            options={options}
                        />
                    </ThemeProvider>
                </table>
            </div>
        </div>

    )
}
