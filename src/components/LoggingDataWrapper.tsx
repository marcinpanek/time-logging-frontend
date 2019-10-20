import React, { useMemo } from 'react';
import { Column } from 'react-table';
import BootstrapReactTable from './BootstrapReactTable';

interface TableData {
    projectTitle: string,
    userName: string,
    timeLogged: string
}

export const LoggingDataWrapper: React.FC = () => {
    const data: TableData[] = useMemo(
        () => [
            { projectTitle: 'Logging App', userName: '0', timeLogged: '0d3h0m1' },
            { projectTitle: 'Logging App', userName: '1', timeLogged: '0d3h0m2' },
            { projectTitle: 'Logging App', userName: '3', timeLogged: '0d3h0m3' },
            { projectTitle: 'Logging App', userName: '4', timeLogged: '0d3h0m4' },
            { projectTitle: 'Logging App', userName: '5', timeLogged: '0d3h0m5' },
            { projectTitle: 'Logging App', userName: '6', timeLogged: '0d3h0m6' },
            { projectTitle: 'Logging App', userName: '7', timeLogged: '0d3h0m7' },
            { projectTitle: 'Logging App', userName: '8', timeLogged: '0d3h0m8' },
            { projectTitle: 'Logging App', userName: '9', timeLogged: '0d3h0m9' },
            { projectTitle: 'Logging App', userName: '10', timeLogged: '0d3h0ma' },
            { projectTitle: 'Logging App', userName: '11', timeLogged: '0d3h0mb' },
            { projectTitle: 'Logging App', userName: '12', timeLogged: '0d3h0mc' },
            { projectTitle: 'Logging App', userName: '13', timeLogged: '0d3h0md' },
            { projectTitle: 'Logging App', userName: '14', timeLogged: '0d3h0me' },
            { projectTitle: 'Logging App', userName: '15', timeLogged: '0d3h0mf' },
            { projectTitle: 'Logging App', userName: '16', timeLogged: '0d3h0mg' },
            { projectTitle: 'Logging App', userName: '17', timeLogged: '0d3h0mh' },
            { projectTitle: 'Logging App', userName: '18', timeLogged: '0d3h0mi' },
            { projectTitle: 'Logging App', userName: '19', timeLogged: '0d3h0mj' },
            { projectTitle: 'Logging App', userName: '20', timeLogged: '0d3h0mk' },
            { projectTitle: 'Logging App', userName: '21', timeLogged: '0d3h0m' }
        ],
        []
    );

    const columns: Column<TableData>[] = useMemo(
        () => [
            { Header: 'Project Title', accessor: 'projectTitle' },
            { Header: 'User Name', accessor: 'userName' },
            { Header: 'Time Logged', accessor: 'timeLogged' }
        ],
        []
    );
    
    return (
        <BootstrapReactTable columns={columns} data={data} />
    )
}

export default LoggingDataWrapper;