
import '../../styles/page.css'; 

export default function Page() {
    return (
        
        
<>
        
    <div id="PageTitle" className="FlexboxColumn"> <span> Convenios </span> </div>

    <div id="PageTextContainer" className="FlexboxColumn">

        <div>
        Nuestros distintos convenios con instituciones reafirman la calidad de nuestro programa formativo, así como la variedad en las distintas materias ofertadas por Process Control.
        </div>

        <div id='ConvenioContainer' className='FlexboxRow'>

            <div id='ConvenioTxtContainer'>
                <ul>
                    <li>Gobierno de España</li>
                    <li>Fundación Tripartita</li>
                    <li>ECYL (Empleo Castilla y Leon)</li>
                    <li>Junta de Castilla y Leon</li>
                    <li>Fondo Social Europeo</li>
                    <li>Miembro de Agrupación Vertice</li>
                </ul>
            </div>

            <div id='ConvenioImgContainer'>
                <img src='/img/Convenios/logos1.webp' />
            </div>

        </div>
        
    </div>



</>
        
        
        

        
        
);
}