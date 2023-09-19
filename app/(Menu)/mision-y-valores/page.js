

import '../../styles/page.css';

export default function Page() {
    return (
    
<>

    <div id="PageTitle" className="FlexboxColumn"> <span> Mision y Valores </span> </div>

    <div id="PageTextContainer" className="FlexboxColumn">


    <div id="PageTitle" className="FlexboxColumn"> <span> Mision </span> </div>

        <div>
        Ser un grupo de referencia en Ávila y en la provincia, tanto en los cursos de formación profesional para el empleo, como en la formación interna a empresas, y en la formación a particulares o ampas. Con un equipo de profesionales debidamente capacitado y con el soporte tecnológico adecuado para la correcta impartición de las acciones formativas y conseguir la satisfacción de nuestros clientes.
        </div>
    
    
    <div id="PageTitle" className="FlexboxColumn"> <span> Vision </span> </div>
        
        <div>
        Convertirnos en el mejor grupo de formación no reglada de Ávila y provincia, con las mejores instalaciones, equipamiento y equipo de profesionales y lograr el reconocimiento de nuestros clientes, competidores y resto de la sociedad como prestadores de servicios de formación altamente eficaces y garantizando la plena satisfacción de los clientes.
        </div>


    <div id="PageTitle" className="FlexboxColumn"> <span> Valores </span> </div>

        <div id='GraphListContainer' className='FlexboxRow'>
            <div id='MisionGraph'>
                <img src='/img/MisionValores/Graph.png' />
            </div>

            <div id='MisionText'>
                <ul>
                    <li>Compromiso</li>
                    <li>Profesionalidad</li>
                    <li>Comportamiento ético</li>
                    <li>Actitud positiva</li>
                    <li>Trabajo en equipo</li>
                </ul>
            </div>
        </div>
    </div>





</>

        
        );
}