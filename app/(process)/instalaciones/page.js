

import '../../styles/page.css'; 
import Image from 'next/image'

export default function Page() {
    return (
        
<>

    <div id="PageTitle" className="FlexboxColumn"> <span> Instalaciones </span> </div>
            
    <div id="PageTextContainer" className="FlexboxColumn">


            <div id="PageImgContainer" className="FlexboxRow">
                <Image src='/img/Instalaciones/Instalaciones.jpg' alt='Fotos de las aulas'/>  
            </div>

            <div id="MinusvalidoImgText" className='FlexboxRow'> 

                <Image src='/img/Instalaciones/minusvalido.png' alt='Logo de los minusvalidos' />

                <div id="MinusvalidoTextContainer" className='FlexboxColumn'>
                    <p> Con el entorno mejor dotado para el aprendizaje de las distintas materias.  </p>
                    <p> Nuestras instalaciones cuentan con aulas de formación, aulas de informática, aulas de prácticas, aulas de reuniones,
                        aulas de descanso, aseos, etc. </p>
                    <p> Todas las aulas están dotadas de los medios necesarios para el desarrollo de las distintas materias. </p>
                    <p> El centro cuenta con un sistema de climatización y ventilación que permite mantener las instalaciones en las condiciones
                        óptimas para el desarrollo de las actividades formativas. </p>
                </div>

            </div>
        
    </div>
        
        
        
        
</>
        
    );
        
}