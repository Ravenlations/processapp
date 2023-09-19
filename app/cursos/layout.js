function Nest(){
    return (    
<>

<div> Test de nesting </div>

</>
)}





import '../styles/page.css'

export default function Layout({ children }) {

    return (

        <>

        {children}

        
        </>

    );
}

