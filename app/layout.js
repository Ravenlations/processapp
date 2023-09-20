import Head from 'next/head'

function ZonaMenu(){

    const MenuData = [
        ["Cursos","/cursos"],
        ["Inscripcion","/inscripcion"],
        ["Sobre Nosotros","/sobre-nosotros"],
        ["Instalaciones","/instalaciones"],
        ["Alquier de Aulas","/alquiler-de-aulas"],
        ["Medio Ambiente","/medio-ambiente"],
        ["Contacto","/contacto"]
    ];
        
    const RenderingMenu = MenuData.map((Data, i) => {
        return (
            <div id={"MenuElement" + i} className="FlexboxColumn LinkBanner">
                <a href={"" + Data[1]} className="FlexboxRow" > <span> {Data[0]}  </span> </a>    
            </div>
        );
    });

    return (

    <>
        <div id="ZonaMenu" className="FlexboxColumn">
                <div id="MenuElementContainer" className="FlexboxRow">
                    {RenderingMenu}
                </div>
        </div>
            
    </>
    );  
}

function ZonaIconosContacto(){
    return (    
    <div id="ZonaIconosContacto" className="FlexboxRow">
        <div id="ZonaIconos">
            <a href='https://www.facebook.com/people/ProcessControl-Formacion-%C3%81vila/100063921164806/'><i className="fa-brands fa-facebook" /></a>
        </div>
        <div id="ZonaContacto" className="FlexboxRow">
            <div id="ZonaContacto1">
                <i className="fa-solid fa-phone" /> 920 251 058
            </div>
            <div id="ZonaContacto2">
                <i className="fa-solid fa-envelope" /> <a id="MailProcessBanner" href="mailto:processformacion@gmail.com"> processformacion@gmail.com </a>
            </div>

            <a href="/cursos/submit"> <i className='fa-solid fa-person' /></a>
        </div>
    </div>
)}

function ZonaLogo(){

    return(
        <a href='/' className='CajaEnlaceLogo'>
        <div id="ZonaLogo" className="FlexboxRow">
            
                <div id="Logo"></div>
            

            <div id="ZonaTextoLogo" />
        </div>
        </a>
    )

}

function ZonaBanner(){
    return (

        <div id="NavBarPrincipal" className="FlexboxColumn">
                   
            <ZonaLogo />

            <ZonaIconosContacto />

            <ZonaMenu />

        </div>
    );
}

{/*Zona del Footer*/}
function ZonaFooterMenu(){

    const MenuData = [
        ["Aula Virtual","/aula-virtual"],
        ["Poitica de cookies","/politica-de-cookies"],
        ["Aviso Legal","/aviso-legal"],
        ["Buzon de Sugerencias","/buzon-de-sugerencias"],
        ["Mision y Valores","/mision-y-valores"],
        ["Medio Ambiente","/medio-ambiente"],
        ["Convenios","/convenios"]
    ];


    const RenderingMenu = MenuData.map((Data, i) => {
        return (
            <div id={"MenuElement" + i} className="FlexboxColumn FooterElement">
                <a href={Data[1]}> <span>{Data[0]}</span></a>
            </div>
        );
    });

    return (
        <>
            <span className="TituloFooterMenu">Menu</span>
            {RenderingMenu}
        </>

    ) 
}

function ZonaFooterCursos(){

    const CursosData = [
        ["Administracion y Gestion","/cursos/administracion-y-gestion"],
        ["Hosteleria y Turismo","/cursos/hosteleria-y-turismo"],
        ["Informatica y Comunicaciones","/cursos/informatica-y-comunicaciones"],
        ["Sanidad","/cursos/sanidad"],
        ["Servicios Socioculturales y a la Comunidad","/cursos/servicios-socioculturales"],
    ];


    const RenderingMenu = CursosData.map((Data, i) => {
        return (
            <div id={"CursoElement" + i} className="FlexboxColumn FooterElement">
                <a href={Data[1]}> <span>{Data[0]}</span> </a>
            </div>
        );
    });

    return (
        <>
            <span className="TituloFooterMenu">Cursos</span>
            {RenderingMenu}
        </>

    )
}
        
function ZonaFooterExtra(){

    const ExtraData = [
        ["solid","user","Censo Nº5-30005"],
        ["solid","building","Process Control"],
        ["solid","location-pin","Valle del Corneja 18 - Avila"],
        ["solid","phone","920 251 058"],
     
    ];

    const RenderingMenu = ExtraData.map((Data, i) => {
        return (
            <>

            <span className="ExtraElement">
                <i className={"fa-" + Data[0] + " fa-" + Data[1]} /> {Data[2]}
            </span>
            
            
            </>
        );
    });

    return (

        <>

        <span className="TituloFooterMenu">Donde Estamos</span>
        {RenderingMenu}
        <span className='ExtraElement'> <i className='fa-solid fa-envelope'></i><a id="MailProcessBanner" href="mailto:processformacion@gmail.com">&nbsp;processformacion@gmail.com </a> </span>
        </>

    )
}

function ZonaCopyRight(){
    return(
        <div id="TextosCopyright" className="FlexboxRow">
            2023 Process Control S.L. Todos los derechos reservados
        </div>
    )
} 

function ZonaFooter(){
    return (  
        <div id="FooterPrincipal" className="FlexboxColumn">

            <div id="ElementosMenuCursos" className="FlexboxRow">

                <div id="FooterMenu" className="FlexboxColumn FooterWrapper"> <ZonaFooterMenu /> </div>

                <div id="FooterCursos" className="FlexboxColumn FooterWrapper"> <ZonaFooterCursos /> </div>

                <div id="FooterExtra" className="FlexboxColumn ExtraWrapper"> <ZonaFooterExtra /> </div>
            
            </div>

            <ZonaCopyRight />

        </div>
     );
}

import './styles/banner.css';
import './styles/normalize.css';
import './styles/FontAwesome/css/all.min.css';
import './styles/footer.css';


{/*Funcion para hacer el render principal del Layout*/}
export default function Layout({ children }) {

    return (

        <>
        
        <html>
            <head>

                <title>ProcessApp</title>
                
            </head> 

            <body>

                <ZonaBanner />
    
                {children}
                
                <ZonaFooter />

            </body>

        </html>
        
        
        </>

    );
}






       