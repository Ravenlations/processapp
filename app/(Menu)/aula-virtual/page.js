

import '../../styles/page.css'

export default function Page() {
    return (
<>
    <div id="PageTitle" className="FlexboxColumn"> <span> Aula Virtual </span> </div>

    <div id="PageTextContainer" className="FlexboxColumn">

        <p>Descarga la Aplicacion de Moodle para aprender en linea</p>

        <p>Con la aplicacion de Moodle podras</p>

        <div id="VirtualClassroomImgText" className="FlexboxRow">
            
            <ul>
                <li>Acceso Rapido al contenido del curso</li>
                <li>Descargar los materiales de los cursos</li>
                <li>Mantenerte al dia con las notificaciones instantaneas</li>
                <li>Ver las tareas de los cursos</li>
                <li>Ver las calificaciones de los cursos</li>
                <li>Ver los foros de los cursos</li>
            </ul>

            <img src='/img/AulaVirtual/moodle-mobile.png' />

        </div>

        <div id="VirtualClassroomDownloadButtons" className='FlexboxRow'>
            
            <div id="VirtualClassroomAndroidButton" className='FlexboxColumn DownloadButton'>
                <a href="https://play.google.com/store/apps/details?id=com.moodle.moodlemobile&hl=es&gl=US">
                    <img src='/img/AulaVirtual/google-play.png' />
                </a>
                <p>Descarga la aplicacion para Android</p>
            </div>

            <div id="VirtualClassroomAppleButton" className='FlexboxColumn DownloadButton'>
                <a href="https://apps.apple.com/es/app/moodle/id633359593">
                    <img src='/img/AulaVirtual/app-store.svg' />
                </a>
                <p>Descarga la aplicacion para Apple</p>
            </div>

        </div>


    </div>









</>
                
);
}