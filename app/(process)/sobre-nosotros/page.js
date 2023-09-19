
import '../../styles/page.css'; 

export default function Page() {
    return (
    
<>
  <div id="PageTitle" className="FlexboxColumn"> <span> Sobre Nosotros </span> </div>

  <div id="PageTextContainer" className="FlexboxColumn">
    <p>
      <span className="Bold"> PROCESS CONTROL CENTRO DE FORMACIÓN, S.L. </span>,
      comenzó a desarrollar su actividad como academia de informática en Ávila
      el año 1997.
    </p>
    <p>
      Más tarde, en el año 2000 el centro fué homologado por el Servicio Público
      de Empleo de Castilla y León para la impartición de cursos de Formación
      Profesional para el Empleo de la familia profesional de la Informática y
      las comunicaciones y de artes gráficas, para todos aquellos desempleados
      que querían iniciarse en las nuevas tecnologías y aquellos que necesitaban
      ampliar su formación para tener una mayor facilidad a la hora de encontrar
      un puesto de trabajo, así como impartición de formación diversa para
      trabajadores ocupados y cursos organizados para administraciones públicas
      y empresas privadas.
    </p>
    <p>
      En la actualidad, Process Control está inscrito en el Registro de Centros
      y entidades de Formación Profesional para el Empleo de Castilla y León y
      dedica el 90% de su actividad a la impartición de formación asociada a
      Certificados de Profesionalidad de diversas especialidades formativas.
      Process Control también imparte cursos para trabajadores ocupados, así
      como cursos organizados para administraciones públicas y empresas
      privadas.
    </p>

    <div id="PageTitle" className="FlexboxColumn"> <span> Certificados de Profesionalidad </span> </div>

    <div id="PageiFrameContainer" className="FlexboxRow">
      <iframe width="560" height="100%" src="https://www.youtube.com/embed/fD_qa26pUMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    </div>


  </div>

  
</>

    
        );
}