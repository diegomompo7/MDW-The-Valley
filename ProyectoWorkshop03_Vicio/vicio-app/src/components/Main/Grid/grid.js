import '../_main.scss'

const Grid = (props) => {
    return <div className={"review__box " + props.box}>
        <div className="review__customer">
                <div className="review__customer-img">
                    <img src={props.image} alt=""></img>
                </div>
                <div className="review__customer-info">
                    <p className={props.className}>{props.name}</p>
                    <p className="review__customer-desc">{props.desc}</p>
                </div>
        </div>
        <div className="review__customer-text">
                <p className={props.classText}>{props.firstT}</p>
                <p className="review__customer-text2">{props.secondT}</p>
            </div>
    </div>
}

export default Grid

/*
<main class="review">
        <div class="review__box box-1">
            <div class="review__customer">
                <div class="review__customer-img">
                    <img src="assets/customer-1.png" alt="">
                </div>
                <div class="review__customer-info">
                    <p class="review__customer-name">Martina García</p>
                    <p class="review__customer-desc">Guía verificada</p>
                </div>
            </div>
            <div class="review__customer-text">
                <p class="review__customer-text1">Me habían hablado muy bien de las hamburguesas pero se quedaron
                    cortos.</p>
                <p class="review__customer-text2">Es alucinante. Me he pedido la trufada y la explosión de sabores es
                    increíble,
                    el punto de la carne inmejorable. La única pega que le pongo es que ahora ya no quiero
                    ir a ningún otro sitio de hamburguesas.</p>
            </div>
        </div>
        <div class="review__box box-2">
            <div class="review__customer">
                <div class="review__customer-img">
                    <img src="assets/customer-2.png" alt="">
                </div>
                <div class="review__customer-info">
                    <p class="review__customer-name">Edu Cuadrado</p>
                    <p class="review__customer-desc">Comilón sin fronteras</p>
                </div>
            </div>
            <div class="review__customer-text">
                <p class="review__customer-text1">He pedido por la app de Glovo y el servicio fue muy rápido.</p>
                <p class="review__customer-text2">La presentación del producto es muy original y la hamburguesa muy
                    sabrosa.
                    Lo recomiendo y quedo con muchas ganas de pedir otra vez.</p>
            </div>
        </div>
        <div class="review__box box-3">
            <div class="review__customer">
                <div class="review__customer-img">
                    <img src="assets/customer-3.png" alt="">
                </div>
                <div class="review__customer-info">
                    <p class="review__customer-name--opposite">Fede Cáceres</p>
                    <p class="review__customer-desc">¿Dónde vamos a comer?</p>
                </div>
            </div>
            <div class="review__customer-text">
                <p class="review__customer-text1--opposite">Las hamburguesas buenísimas.</p>
                <p class="review__customer-text2">Las patatas genial también , tanto las normales como las que llevan
                    queso y bacon.
                    Llegó toda la comida en perfectas condiciones. El packaging genial. Repetiremos muchas veces.</p>
            </div>
        </div>
        <div class="review__box box-2 box-2--position">
            <div class="review__customer">
                <div class="review__customer-img">
                    <img src="assets/customer-4.png" alt="">
                </div>
                <div class="review__customer-info">
                    <p class="review__customer-name">Lucía Smith</p>
                    <p class="review__customer-desc">Foodie 100%</p>
                </div>
            </div>
            <div class="review__customer-text">
                <p class="review__customer-text1">Sin duda para mi son las mejores hamburguesas que he probado.</p>
                <p class="review__customer-text2">He pedido en varias ocasiones, porción justa y perfecta calidad -
                    precio,
                    por otro lado las patatas “Smoked bacon cheese fries” son el top de las patatas,
                    insuperables, desde luego es un VICIO que no quiero dejar…</p>
            </div>
        </div>
        <div class="review__box box-3 box-3--position">
            <div class="review__customer">
                <div class="review__customer-img">
                    <img src="assets/customer-5.png" alt="">
                </div>
                <div class="review__customer-info">
                    <p class="review__customer-name--opposite">Paula Moreno</p>
                    <p class="review__customer-desc">Viajando por restaurantes</p>
                </div>
            </div>
            <div class="review__customer-text">
                <p class="review__customer-text1--opposite">Pedimos a Vicio para comer, y la comida tuvo sus luces y sombras.</p>
                <p class="review__customer-text2">Llevaba tiempo queriendo pedir a este sitio, ya que estoy en busca de
                    las mejores hamburguesas y e
                    ste delivery tenía muy buenas referencias por venir de un concursante de MasterChef.
                    Por ejemplo las alitas, sorprende como se desprenden del hueso; los kikos que las acompañan están
                    chulos en una primera instancia
                    ya que les da ese toque crujiente, pero no acaban de convencer a mi criterio. En el plano de las
                    hamburguesas, tanto la Vicio Originals
                    como la Cheeseburger Trufada, me parecen un acierto. Sobre todo la Cheeseburger Trufada que como
                    hamburguesa es bestial.
                </p>
            </div>
        </div>
    </main>
*/