
import '../styles/plantillaCursos.css'
import Image from 'next/image'


export default function CursoComponent( {Titulo, Imagen, CodPlan, IdPlan, Horas, Alumnos, FechaInicio, Horario, Descripcion, id}){
    
    const ElementoData = [

        ['solid', 'clock'   , 'Horas: '         , Horas],
        ['solid', 'person'  , 'Alumnos: '       , Alumnos],
        ['solid', 'calendar', 'Fecha Inicio: '  , FechaInicio],
        ['solid', 'sun'     , 'Horario: '       , Horario],

    ]

    const RenderElementos = ElementoData.map((item) => (
    
        <div key={item[3]} className="ElementoCurso FlexboxRow">

            <div className="IconoElementoCurso"><i className={"fa-" + item[0] + " fa-" + item[1]} ></i> {item[2]} </div>
            <div className="TextoElementoCurso">{item[3]}</div>

        </div>
    ));

return (    

<>  

<div className='CursoContainerEnlace'>

    <a href={`/cursos/${id}`} className='EnlaceCurso'> 
        <div id="CursoContainer1" className="FlexboxRow CursoContainer">

            <div className="FotoCursoContainer">
                <Image src={"https://process-control.pockethost.io/api/files/zvcer496dtdgkpm/"+ id + "/" + Imagen} alt='Imagen del folleto del curso'/> 
            </div>

            <div className="TextoInfoCursoContainer FlexboxColumn">

                <div className="TituloCursoContainer FlexboxColumn">
                    
                    <div className="TituloCurso"><span>{Titulo}</span></div>

                    <div className="TituloInfoExtra FlexboxRow">
                        <div className="CodPlan">{CodPlan}</div>
                        <div className="IdPlan">{IdPlan}</div>
                    </div>

                </div>

                <div className="ElementosCursoContainer FlexboxColumn">
                    
                    {RenderElementos}

                    <div className="CursoDescripcion FlexboxRow">
                        <span>{Descripcion}</span>
                    </div>
            
                </div>

            </div>

        </div>       
                
    </a>

</div>

</>




)}


