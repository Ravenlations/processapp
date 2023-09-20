

import '../../styles/page.css'; 
import Image from 'next/image'

export default function Page() {
    return (

<>
        
    <div id="PageTitle" className="FlexboxColumn"> <span> Alquiler de Aulas </span> </div>
            
    <div id="PageTextContainer" className="FlexboxColumn">

        <p> Consulta nuestros precios y horarios poniéndote en contacto con el centro de formación. </p>

        <p> El centro cuenta con un sistema de climatización y ventilación que permite mantener las instalaciones en las condiciones
            óptimas para el desarrollo de las actividades formativas. </p>
        
        
        <div id="PageImgContainer" className="FlexboxRow">
            <Image src='/img/AlquilerAulas/AlquilerAulas.jpg' alt='Fotos de las aulas' />  
        </div>


        </div>
                
   


        
</>
    );
}