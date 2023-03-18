import { Flex} from '@chakra-ui/react'
import NewsItems from './NewItems/NewItems'

const NewsHome = (props) => {
    return (
        <div className='news__home'>
            <Flex>
                <NewsItems
                    link="Deportes"
                    text="Encuentra las últimnas noticias sobre tus deportes favoritos, desde fútbol hasta tenis,
                baloncesto, golf y mucho más."
                    navigate="sport">
                </NewsItems>
                <NewsItems
                    link="Tecnología"
                    text="Mantente al día con las últimas tendencias tecnológicas, desde dispositivos móviles hasta
            inteligencia artificial, robótica y mucho más"
                    navigate="tech">
                </NewsItems>
                <NewsItems
                    link="Economía"
                    text="Descubre las últimas noticias económicas, desde mercados financieros hasta empresas, negocios
            política fiscal y mucho más."
                    navigate="economics">
                </NewsItems>
            </Flex>
        </div>
    )
}

export default NewsHome