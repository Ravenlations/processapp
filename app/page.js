import CursoComponent from './CursoComponent.js';
import './styles/page.css'
/**
 * recoger los datos de la API
 * y sacar los ultimos 6 datos enteros para meterlos en la pagina
 */

/* Get data from the API and JSONify*/
async function getCourses() {

    const res = await fetch ('https://process-control.pockethost.io' + '/api/collections/Cursos/records' + '?page=1&perPage=6', 
    {cache: 'no-store'}
    );

    const data = await res.json();
 
    return data;

}

export async function NodoCursos() {
    const courses = await getCourses();

    /*Renderizamos todo lo que tiene que ir en el tag*/

    const RenderedItems = courses?.items.map((item,i) => (    

        <div key={item.id}>
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
        </div>


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



        <div id="BannerPaginaPrincipal" className='FlexboxColumn'>
            <span className='FlexboxRow Bold'>PROCESS CONTROL CENTRO DE FORMACION SL</span>
        </div>
        
        <div id="PageTextContainer">

           <div id="TextoPaginaPrincipal">
                <span> <span className='Bold'>PROCESS CONTROL CENTRO DE FORMACIÓN, S.L.</span>, es una centro de formación profesional para el 
                    empleo que comenzó su andadura en la provincia de Ávila en el año 1997.
                    Durante todos estos años lleva impartiendo cursos tanto para trabajadoras/es como 
                    desempleadas/os en las ramas de Informática y comunicaciones, artes gráficas, sanidad, 
                    servicios sociculturales y sanidad entre otros.
                </span>
            </div>
            <div id="PageTitle" className="FlexboxColumn"> <span> Cursos disponibles </span> </div>  

        </div>

        <div id="PageTextContainer" className="FlexboxColumn">
        
            <NodoCursos />
        
        </div>
        

</>
    
    );
}