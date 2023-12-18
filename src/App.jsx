import "./App.css";
import { Landing } from "./modules/Landing";
import { Main } from "./modules/main";

function App() {
  return (
    <>
   
  
     {/* 
        Seccion donde se decide que componente de la app que se va a mostrar
        Si el usuario estara autenticado se mostrara el componente de la main de la app
        y si no se mostrara el componente landing.

      */}

      <Landing />

      <Main />
    </>
  );
}

export default App;
