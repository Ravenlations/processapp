"use client";

import "../../styles/page.css"

import React, { useState } from 'react';




export default function EnviarDatos() {

    const [Nombre, setNombre] = useState('');
    const [Apellidos, setApellidos] = useState('');
    const [DNI, setDNI] = useState('');
    const [sSocial, setsSocial] = useState('');
    const [FechaNacimiento, setFechaNacimiento] = useState('');
    const [Direccion, setDireccion] = useState('');
    const [email, setEmail] = useState('');
    const [Titulacion, setTitulacion] = useState('');
    const [Curso, setCurso] = useState('');
    const [comentarios, setComentarios] = useState('');
    const [AplicacionMovil, setAplicacionMovil] = useState('');


    /*
    Aplicacion Movil   
    Situacion Laboral
    Adjuntar CV
    */

  

    const createEntry = async () => {

      console.log(AplicacionMovil);

        /*Meter la API del nodemailer*/ 
        /*       
        try {
            await fetch('https://process-control.pockethost.io' + '/api/collections/Cursos/records', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    NombreCurso,
                    TipoCurso,
                    CodPlan,
                    CodEspecial,
                    Alumnos,
                    Horas,
                    FechaInicio,
                    Horario,
                    Descripcion
                }),
            
            });
        } catch (error) {
            
            console.log(error);
            
        }
*/
        deleteInfo();
    }

    function deleteInfo() {
        
        setNombre('');
        setApellidos('');
        setDNI('');
        setsSocial('');
        setFechaNacimiento('');
        setDireccion('');
        setEmail('');
        setTitulacion('');
        setCurso('');
        setComentarios('');
        setAplicacionMovil('');
    }


    return (

<>          

    <div id="PageTitle" className="FlexboxColumn"> <span> Inscripcion </span> </div>
        
    <div id="PageTextContainer" className="FlexboxColumn">

            <form className='FlexboxColumn'>



            <div className="FlexboxColumn FormElement"> 

            <label>Nombre</label>

                <input 
                    name='Nombre'
                    type="text"
                    value={Nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

            </div>

            <div className="FlexboxColumn FormElement"> 

            <label>Apellidos</label>

                <input
                    name='Apellidos'
                    type="text"
                    value={Apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                />

            </div>


            <div className="FlexboxColumn FormElement"> 
            <label>DNI</label>

                <input
                    name='DNI'
                    type="text"
                    value={DNI}
                    onChange={(e) => setDNI(e.target.value)}
                />
            </div>

            <div className="FlexboxColumn FormElement"> 
            <label>Numero de la Seguridad Social</label>

                <input
                    name='sSocial'
                    type="text"
                    value={sSocial}
                    onChange={(e) => setsSocial(e.target.value)}
                />
            </div>

            <div className="FlexboxColumn FormElement"> 
            <label>Fecha de Nacimiento</label>

                <input
                    name='FechaNacimiento'
                    type="text"
                    value={FechaNacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                />
            </div>

            <div className="FlexboxColumn FormElement"> 
            <label>Direccion</label>

                <input
                    name='Direccion'
                    type="text"
                    value={Direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                />
            </div>

            <div className="FlexboxColumn FormElement">
            <label>Email</label>

                <input
                    name='email'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            
            <div className="FlexboxColumn FormElement">
            <label>Titulacion</label>   

                <input
                    name='Titulacion'
                    type="text"
                    value={Titulacion}
                    onChange={(e) => setTitulacion(e.target.value)}
                />
            </div>

            <div className="FlexboxColumn FormElement">

            <label>Curso</label>

                <input
                    name='Curso'
                    type="text"
                    value={Curso}
                    onChange={(e) => setCurso(e.target.value)}
                />
            </div>

            <div className="FlexboxColumn FormElement">

            <label>Comentarios</label>  

                <input
                    name='comentarios'
                    type="text"
                    value={comentarios}
                    onChange={(e) => setComentarios(e.target.value)}

                />
            </div>

            <div className="FlexboxColumn FormElement">
            
                <label>Aplicacion Movil</label>

            
                <div className='FlexboxRow InputElement'>

                    <input
                        name='AplicacionMovil'
                        type="radio"
                        value="Ninguna"
                        id='Ninguna'
                        onChange={(e) => setAplicacionMovil(e.target.value)}
                            
                    />
                    <span>Ninguna</span>

                </div>

                    <div className='FlexboxRow InputElement'>

                    <input
                        name='AplicacionMovil'
                        type="radio"
                        value="Whatsapp"
                        id='Whatsapp'
                        onChange={(e) => setAplicacionMovil(e.target.value)}
                    
                    />
                    <span>Whatsapp</span>

                </div>
               
                <div className='FlexboxRow InputElement'>

                    <input
                        name='AplicacionMovil'
                        type="radio"
                        value="Line"
                        id='Line'
                        onChange={(e) => setAplicacionMovil(e.target.value)}
                    />

                    <span>Line</span>

                </div>

            </div>

            <div className="FlexboxColumn FormElement">
            <label>Situacion Laboral</label>

                <div className='FlexboxRow InputElement'>
       
                    <input
                        name='SituacionLaboral'
                        type="radio"
                        value="Trabajando"
                        id='Trabajando'
                        onChange={(e) => setAplicacionMovil(e.target.value)}
                    />

                    <span>Trabajando</span>

                </div>

                <div className='FlexboxRow InputElement'>

                    <input
                        name='SituacionLaboral'
                        type="radio"
                        value="Desempleado"
                        id='Desempleado'
                        onChange={(e) => setAplicacionMovil(e.target.value)}
                    />

                    <span>Desempleado</span>

                </div>
                
                <div className='FlexboxRow InputElement'>

                    <input
                        name='SituacionLaboral'
                        type="radio"
                        value="Autonomo"
                        id='Autonomo'
                        onChange={(e) => setAplicacionMovil(e.target.value)}
                    />

                    <span>Autonomo</span>

                </div>
            </div>

            <div className="FlexboxColumn FormElement">
            <label>Adjuntar CV</label>

                <input
                    name='AdjuntarCV'
                    type="file"
                    id='AdjuntarCV'
                />

            </div>

            <div className="FlexboxColumn FormElement">

                <div className='FlexboxRow InputElement'>
                <input
                    name='Checkboxterminos'
                    type="checkbox"
                    id='Checkboxterminos'
                />
                <label>Acepto los <a href="../aviso-legal" class="FormLink"> terminos y condiciones</a></label>

                </div>
            </div>
           
            
            </form>

            <div className="FlexboxRow FormButtonContainer">
                <button onClick={createEntry} className="FormButton">
                    Enviar
                </button>
                &nbsp;
                <button onClick={deleteInfo} className="FormButton">
                    Restablecer
                </button>
            </div>

    </div>
</>
    
    );
}
