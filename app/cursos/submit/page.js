import EnviarDatos from "./EnviarDatos";
export default function Page() {


    return (

<>

        <div id="PageTitle" className="FlexboxColumn"> <span> Envio de Datos </span> </div>

        <div id="PageTextContainer" className="FlexboxColumn">      
         <EnviarDatos />
        </div>
</>
    
    );
}
