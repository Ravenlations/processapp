
import CursoComponent from '../CursoComponent.js'


async function getCourses(idEnlace) {

    const res = await fetch ('https://process-control.pockethost.io' + '/api/collections/Cursos/records/' + idEnlace, 
    {
        next: {revalidate: 10},
    }
    );

    const data = await res.json();
 
    console.log(data.Imagen);


    return data;

}



export default async function Page({params}) {


    const courseId = params.id;

    const courses = await getCourses(courseId);

        return (
    
    <>
    

        <div id="PageTextContainer" className="FlexboxColumn">
        
            <div id="PageText" className="FlexboxRow Wrap">

                <CursoComponent
                    Titulo={courses.NombreCurso}
                    CodPlan={courses.CodPlan}
                    IdPlan={courses.CodEspecial}
                    Horas={courses.Horas}
                    Alumnos={courses.Alumnos}
                    FechaInicio={courses.FechaInicio}
                    Horario={courses.Horario}
                    Descripcion={courses.Descripcion}
                    id={courses.id}
                    Imagen={courses.Imagen}
                />

            </div>
            
        </div>
        
    
    </>

    );
  };

