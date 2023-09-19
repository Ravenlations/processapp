import CursoComponent from '../CursoComponent.js'

/**
 * recoger los datos de la API
 * y sacar los ultimos 6 datos enteros para meterlos en la pagina
 */

/* Get data from the API and JSONify*/
async function getCourses() {
    const res = await fetch ('https://process-control.pockethost.io' + '/api/collections/Cursos/records' + '?page=1&perPage=6&filter=(TipoCurso="Informatica")', 
    {cache: 'no-store'}
    );

    const data = await res.json();
 
    return data;

}

export async function NodoCursos() {
    const courses = await getCourses();

    /*Renderizamos todo lo que tiene que ir en el tag*/

    const RenderedItems = courses?.items.map((item,i) => (    

        <CursoComponent
            Titulo={item.NombreCurso}
            CodPlan={item.CodPlan}
            IdPlan={item.CodEspecial}
            Horas={item.Horas}
            Alumnos={item.Alumnos}
            FechaInicio={item.FechaInicio}
            Horario={item.Horario}
            Descripcion={item.Descripcion}
            id={item.id}
            Imagen={item.Imagen}
        />


    ));



    return (
        <>
        
        <div id="PageText" className="FlexboxRow Wrap ">
         {RenderedItems}
        </div>

        </>
    );
}



export default async function Page() {
    return (

<>
        
        <div id="PageTitle" className="FlexboxColumn"> <span> Informatica y comunicaciones </span> </div>  
        
        <div id="PageTextContainer" className="FlexboxColumn">
        
        <NodoCursos />
        
        </div>
        

</>
    
    );
}