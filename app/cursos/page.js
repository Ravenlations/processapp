
import '../styles/page.css'



function Cursos() {


    const MenuData = [
        ["Administracion y Gestion","/cursos/administracion-y-gestion"],
        ["Hosteleria y Turismo", "/cursos/hosteleria-y-turismo"],
        ["Informatica y Comunicaciones", "/cursos/informatica-y-comunicaciones"],
        ["Sanidad", "/cursos/sanidad"],
        ["Servicios Socioculturales y a la Comunidad", "/cursos/servicios-socioculturales"]
    ];


    const RenderingMenu = MenuData.map((Data) => {

        return (

            <div key={Data[0]} className='FlexboxColumn CursoEnlaceContainer'>

                <a className="CursoEnlace" href={Data[1]}> {Data[0]} </a>
        
            </div>
        
        )


    });



    return (
        <>
        
                <div id='TituloFooterMenu' className='FlexboxColumn'>
                {RenderingMenu}
                </div>
            
        </>
 


    )

}







export default function Page() {


    return (
    
    <>

    <div id="PageTitle" className="FlexboxColumn"> <span> Categoria de Cursos </span> </div>
    
    
    <div id="PageTextContainer" className="FlexboxColumn">

        <span>PROCESS CONTROL CENTRO DE FORMACIÓN, S.L., es una centro de formación profesional para el empleo que comenzó su andadura en la provincia de Ávila en el año 1997.

Durante todos estos años lleva impartiendo cursos tanto para trabajadoras/es como desempleadas/os en las ramas de Informática y comunicaciones, artes gráficas, sanidad, servicios sociculturales y sanidad entre otros.</span>

        <span className="TituloFooterMenu">Cursos Disponibles</span>

        <Cursos />

    </div>
    
    
    </>
        );
}