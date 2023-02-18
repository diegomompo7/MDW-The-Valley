import './_main.scss'
import firstCustomer from '../../assets/customer-1.png'
import secondCustomer from '../../assets/customer-2.png'
import thirdCustomer from '../../assets/customer-3.png'
import fourthCustomer from'../../assets/customer-4.png'
import fifthCustomer from'../../assets/customer-5.png'
import Grid from './Grid/grid'

const grid = [
    {
        box: "box-1",
        className: "review__customer-name",
        classText: "review__customer-text1",
        image : firstCustomer,
        name: "Martina García",
        desc: "Guía verificada",
        firstText: "Me habían hablado muy bien de las hamburguesas pero se quedaron cortos.",
        secondText: "Es alucinante. Me he pedido la trufada y la explosión de sabores es increíble, el punto de la carne inmejorable. La única pega que le pongo es que ahora ya no quiero ir a ningún otro sitio de hamburguesas.",
    },
    {
        box: "box-2",
        className: "review__customer-name",
        classText: "review__customer-text1",
        image : secondCustomer,
        name: "Edu Cuadrado",
        desc: "Comilón sin fronteras",
        firstText: "He pedido por la app de Glovo y el servicio fue muy rápido.",
        secondText: "La presentación del producto es muy original y la hamburguesa muy sabrosa. Lo recomiendo y quedo con muchas ganas de pedir otra vez.",
    },
    {
        box: "box-3",
        className: "review__customer-name--opposite",
        classText: "review__customer-text1--opposite",
        image : thirdCustomer,
        name: "Fede Cáceres",
        desc: "¿Dónde vamos a comer?",
        firstText: "Las hamburguesas buenísimas.",
        secondText: "Las patatas genial también , tanto las normales como las que llevan queso y bacon. Llegó toda la comida en perfectas condiciones. El packaging genial. Repetiremos muchas veces.",
    },
    {
        box: "box-2 box-2--position",
        className: "review__customer-name",
        classText: "review__customer-text1",
        image : fourthCustomer,
        name: "Lucía Smith",
        desc: "Foodie 100%",
        firstText: "Sin duda para mi son las mejores hamburguesas que he probado",
        secondText: "He pedido en varias ocasiones, porción justa y perfecta calidad - precio, por otro lado las patatas “Smoked bacon cheese fries” son el top de las patatas, insuperables, desde luego es un VICIO que no quiero dejar…",
    },
    {
        box: "box-3 box-3--position",
        className: "review__customer-name--opposite",
        classText: "review__customer-text1--opposite",
        image : fifthCustomer,
        name: "Paula Moreno",
        desc: "Viajando por restaurantes",
        firstText: "Pedimos a Vicio para comer, y la comida tuvo sus luces y sombras.",
        secondText: "Llevaba tiempo queriendo pedir a este sitio, ya que estoy en busca de las mejores hamburguesas y este delivery tenía muy buenas referencias por venir de un concursante de MasterChef. Por ejemplo las alitas, sorprende como se desprenden del hueso; los kikos que las acompañan están chulos en una primera instancia ya que les da ese toque crujiente, pero no acaban de convencer a mi criterio. En el plano de las hamburguesas, tanto la Vicio Originals como la Cheeseburger Trufada, me parecen un acierto. Sobre todo la Cheeseburger Trufada que como hamburguesa es bestial.",
    }
]


const Main = () => {
    return <main className="review">
        {grid.map(element => <Grid box={element.box} image={element.image} name={element.name} desc={element.desc} 
                                firstT ={element.firstText} secondT = {element.secondText} className={element.className} 
                                classText={element.classText}></Grid>)}
    </main>
}

export default Main