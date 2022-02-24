import React, {useEffect, useContext}  from 'react';

import Table from 'react-bootstrap/Table';
import Dropdown from '../dropdown';
import api from '../../services/api';
import {TableContext} from '../../context/tableContext';
import Buttons from '../buttons/index';

import './index.css';
import ModalEditClient from '../modal';

export default function ClientsTable(){

    const {data, setData, user, client, email, profile, showDefault } = useContext(TableContext)

    useEffect(() =>{
        api.get('').then(response => {
        setData(response.data)
        })
    }, [setData]);

    return(
        <div className="tableContainer">
            <Table striped bordered={false} hover borderless={true} data-testid="form-field">
                <thead>
                    <tr className="tableTitleColumns">
                        {!user ? null : <th id="userColumn">USUÁRIO</th>}
                        {!email ? null : <th id="emailColumn">EMAIL</th>}
                        {!client ? null : <th id="clientColumn">CLIENTE</th>}
                        {!profile ? null : <th id="profileColumn">PERFIL DE ACESSO</th>}
                        <th> 
                            <Dropdown />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(datas => {
                        return(
                            <tr key={datas.id}>
                                {!user ? null : <td className="tableRows">{(datas.name).toUpperCase()}</td>}
                                {!email ? null : <td className="tableRows">{(datas.email).toUpperCase()}</td>}
                                {!client ? null : <td className="tableRows">{(datas.company.name).toUpperCase()}</td>}
                                {!profile ? null : <td className="clientTableRows"><p>{(datas.name).toUpperCase()}</p></td>}
                                <td>
                                    <Buttons 
                                        removeClient={datas.id} UpdateClient={datas.id}
                                    />
                                </td>
                            </tr>
                        ) 
                    })}
                    { showDefault ||
                        Array.from({length: 40}).map((_, index) =>{
                            return(
                                <tr key={index + 10}>
                                    {!user ? null : <td></td>}
                                    {!email ? null : <td></td>}
                                    {!client ? null : <td></td>}
                                    {!profile ? null : <td></td>}
                                    <td>
                                        <Buttons 
                                            removeClient={index + 10}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <ModalEditClient />
        </div>
    )
}