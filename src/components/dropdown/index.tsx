import React, {useContext} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { BiDotsVerticalRounded } from "react-icons/bi";
import {TableContext} from '../../context/tableContext'


import './index.css';

export default function DropdownMenu(){

    const {showDefault, setShowDefault, user, setUser, email, setEmail, client, setClient, profile, setProfile} = useContext(TableContext);

    function isDefault(){
        setShowDefault(!showDefault);
    }
    function showUser(){
        setUser(!user);
    }
    function showEmail(){
        setEmail(!email)
    }
    function showClient(){
        setClient(!client)
    }
    function showProfile(){
        setProfile(!profile)
    }

    return(
        <div>
            <Dropdown id="dropdown-custom-menu" autoClose={false}>
                <Dropdown.Toggle>
                    <span>
                        <BiDotsVerticalRounded/>
                    </span>
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <div className="exibitionTable">
                        <p className="titleDropdown">Linhas por página</p>
                        
                        <Form.Check className="opitionLinesDropdown" type="checkbox" label="Padrão" onChange={isDefault} checked={showDefault}/>
                        <Form.Check className="opitionLinesDropdown" type="checkbox" label="50 linhas" onChange={isDefault} checked={!showDefault}/>
                        <hr/>
                        <p className="titleDropdown">Colunas</p>

                        <Form.Check className="opitionLinesDropdown" type="checkbox" label="Usuário" onChange={showUser} checked={user}/>
                        <Form.Check className="opitionLinesDropdown" type="checkbox" label="E-mail" onChange={showEmail} checked={email}/>
                        <Form.Check className="opitionLinesDropdown" type="checkbox" label="Cliente" onChange={showClient} checked={client}/>
                        <Form.Check className="opitionLinesDropdown" type="checkbox" label="Perfil de acesso" onChange={showProfile} checked={profile}/>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}