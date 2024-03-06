import './App.css';
import ComposanteA from './composantes/ComposanteA';
import ComposanteB from './composantes/ComposanteB';
import Film from './composantes/Film';
import Voiture from './composantes/Voiture';
import Personne from '../semaine06/composantes/Personne';

export default function App() {
  return ( 
    <>
      <div className='exemple-composabilite'>
        <h2 className='grey'>Exemple composabilité</h2>
        <ComposanteA />
        <ComposanteB /> 
      </div>
      <div className='exemple-manipulation-objets'>
        <h2 className='grey'>Exemple de manipulation d'objets</h2>
        <h3>Objet voiture :</h3>
        <Voiture />
        <h3>Plusieurs objets Films :</h3>
        <Film />
      </div>
      <div className='exemple-manipulation-objet-complexe'>
        <h2 className='grey'>Exemple de manipulation d'objets complexes (objet personne)</h2>
        <Personne />
      </div>
    </>
  ); 
}