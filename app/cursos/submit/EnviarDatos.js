"use client";

import React, { useState } from 'react';


export default function EnviarDatos() {

    const [NombreCurso, setNombreCurso] = useState('');
    const [TipoCurso, setTipoCurso] = useState('');
    const [CodPlan, setCodPlan] = useState('');
    const [CodEspecial, setCodEspecial] = useState('');
    const [Alumnos, setAlumnos] = useState('');
    const [Horas, setHoras] = useState('');
    const [FechaInicio, setFechaInicio] = useState('');
    const [Horario, setHorario] = useState('');
    const [Descripcion, setDescripcion] = useState('');
    const [ImagenCurso, setImagenCurso] = useState('');

  

    const createEntry = async () => {
        console.log (ImagenCurso);
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
                    Descripcion,
                    ImagenCurso
                }),
            
            });
        } catch (error) {
            
            console.log(error);
            
        }
        
        setNombreCurso(''); 
        setTipoCurso('');
        setCodPlan('');
        setCodEspecial('');
        setAlumnos('');
        setHoras('');
        setFechaInicio('');
        setHorario('');
        setDescripcion('');
        setImagenCurso('');

    }


    return (

<>
        
            <form className='FlexboxColumn'>

            <label>Nombre del Curso</label>
                <input 
                    name='NombreCurso'
                    type="text"
                    value={NombreCurso}
                    onChange={(e) => setNombreCurso(e.target.value)}
                />

            <label>Tipo de Curso</label>
                <input
                    name='TipoCurso'
                    type="list"
                    list="TipoCurso"
                    value={TipoCurso}
                    onChange={(e) => setTipoCurso(e.target.value)}
                />

            <datalist id="TipoCurso">
                <option value="Sanidad" />
                <option value="Informatica" />
                <option value="Administracion" />
                <option value="Hosteleria" />
                <option value="Servicios Socioculturales" />
            </datalist>

            <label>Codigo del Plan</label>

                <input
                    name='CodPlan'
                    type="text"
                    value={CodPlan}
                    onChange={(e) => setCodPlan(e.target.value)}
                />

            <label>Codigo Especial</label>

                <input
                    name='CodEspecial'
                    type="text"
                    value={CodEspecial}
                    onChange={(e) => setCodEspecial(e.target.value)}
                />
            
            <label>Alumnos</label>

                <input
                    name='Alumnos'
                    type="text"
                    value={Alumnos}
                    onChange={(e) => setAlumnos(e.target.value)}
                />

            <label>Horas</label>

                <input
                    name='Horas'
                    type="text"
                    value={Horas}
                    onChange={(e) => setHoras(e.target.value)}
                />

            <label>Fecha de Inicio</label>

                <input
                    name='FechaInicio'
                    type="text"
                    value={FechaInicio}
                    onChange={(e) => setFechaInicio(e.target.value)}
                />

            <label>Horario</label>

                <input
                    name='Horario'
                    type="text"
                    value={Horario}
                    onChange={(e) => setHorario(e.target.value)}
                />

            <label>Descripcion</label>

                <input
                    name='Descripcion'
                    type="text"
                    value={Descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

            <label>Imagen del Curso</label>

                <input
                    name='ImagenCurso'
                    type="file"
                    value={ImagenCurso}
                    onChange={(e) => setImagenCurso(e.target.value)}
                />

            <br></br>
            
            </form>

            <button onClick={createEntry}>
                Enviar
            </button>
</>
    
    );
}
