import Card from './banner/card'
import Cards from './banner/cards'
import imagen from '/public/img/img1.jpg'
import nba from '/public/img/nba.png'
import ImagenCalendarioDeTorneos from '/public/img/ImagenCalendarioDeTorneos.jpg'

export default function Banner()
{
  return (
    <div>
      <div className="h-auto bg-gradient-to-r from-slate-900 from-0%  to-emerald-500 to-60%">
        <div className="h-64 flex">
          <div className="font-bold align-middle text-white m-auto text-6xl">
            Bienvenido a La Zona Basketball
          </div>
        </div>
        <Cards>
          <Card 
            title="Generador de torneos" 
            imagen={imagen} 
            path="/generador_de_torneos"
          />
          <Card 
            title="NBA" 
            imagen={nba} 
            path="/nba"
          />
          <Card 
            title="Calendario de torneos" 
            imagen={ImagenCalendarioDeTorneos}  
            path="/calendario_de_torneos"
          />
        </Cards>
      </div>
    </div>
  )
}