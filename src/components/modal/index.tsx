import React, {useContext} from "react";

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.css'

import {TableContext} from '../../context/tableContext'

export default function ModalEditClient(){
    const{edit, show, setShow} = useContext(TableContext);
    const closeModal = () =>{
        setShow(!show)
    }
        
    return(
        <div>
            <Modal
                show={show} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
            <Modal.Header/>
                <Modal.Title id="contained-modal-title-vcenter">
                    Editar Cliente
                </Modal.Title>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label column sm="2">
                                Usuário
                            </Form.Label>
                            <Form.Control name="nome" type="text"  placeholder={edit.name} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Form.Control  type="text" name="email" placeholder={edit.email} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label column sm="2">
                                Cliente
                            </Form.Label>
                            <Form.Control type="text" name="company" placeholder={edit.company.name} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label column sm="2">
                                Perfil de Acesso
                            </Form.Label>
                            <Form.Control type="text" placeholder={edit.name} />
                        </Form.Group>
                        <div className="editButtonsModal">
                            <Button variant="info" type='submit'>Editar</Button>
                            <Button variant="danger" onClick={closeModal}>Cancelar</Button>
                        </div>
                    </Form>
                    
                </Modal.Body>
            </Modal>
        </div>
    )
}