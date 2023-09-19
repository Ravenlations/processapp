

"use client";

import "../../styles/page.css"

import React, { useState } from 'react';




export default function EnviarDatos() {

    const [Nombre, setNombre] = useState('');
    const [Email, setEmail] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [Asunto, setAsunto] = useState('');
    const [comentarios, setComentarios] = useState('');

    const [AdjuntarCV, setAdjuntarCV] = useState('');
    const [Checkboxterminos, setCheckboxterminos] = useState('');


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
        setEmail('');
        setTelefono('');
        setAsunto('');
        setComentarios('');

        setAdjuntarCV('');
        setCheckboxterminos('');
    }


    return (

<>          

    <div id="PageTitle" className="FlexboxColumn"> <span> Contacto </span> </div>
        
    <div id="PageTextContainer" className="FlexboxColumn">

        <div id="ContactContainer" className="FlexboxRow Wrap">

            <div className="FlexboxColumn ContactForm">
                <form className='FlexboxColumn'>

                <div className="FlexboxColumn FormElement"> 

                <label>Nombre y apellidos</label>

                    <input 
                        name='Nombre'
                        type="text"
                        value={Nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

                </div>

                <div className="FlexboxColumn FormElement"> 
                <label>Email</label>

                    <input
                        name='email'
                        type="text"
                        value={Email}
                        onChange={(e) => setDNI(e.target.value)}
                    />
                </div>



                <div className="FlexboxColumn FormElement"> 
                <label>Telefono</label>

                    <input
                        name='Telefono'
                        type="text"
                        value={Telefono}
                        onChange={(e) => setDireccion(e.target.value)}
                    />
                </div>
                
                <div className="FlexboxColumn FormElement">
                <label>Asunto</label>   

                    <input
                        name='Asunto'
                        type="text"
                        value={Asunto}
                        onChange={(e) => setTitulacion(e.target.value)}
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
                <label>Adjuntar CV</label>

                    <input
                        name='AdjuntarCV'
                        type="file"
                        id='AdjuntarCV'
                        value={AdjuntarCV}
                    />

                </div>

                <div className="FlexboxColumn FormElement">

                    <div className='FlexboxRow InputElement'>
                    <input
                        name='Checkboxterminos'
                        type="checkbox"
                        id='Checkboxterminos'
                        value={Checkboxterminos}
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

            <div className="FlexboxColumn ContactMap">

                <iframe loading="lazy" src="https://maps.google.com/maps?q=C%2F%20Valle%20del%20Corneja%2018&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" title="Process Control Formacion" aria-label="C/ Valle delrewr Corneja 18"></iframe>
            
            </div>
        </div>
    </div>
</>
    
    );
}
