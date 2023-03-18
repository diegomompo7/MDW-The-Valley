import { Heading, Text, Image, Box, Link } from '@chakra-ui/react'

const Home = () => {

    return (
        <div className='home'>
            <Heading mt="55px" ml="20px">Bienvenido a periódico digital</Heading>
            <Box borderBottom="1px solid gray" ml="20px">
                <Image width='500px' mt="20px" mb="20px" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                <Text fontSize='20px' pb="20px">Nuestra misión es proporcionarte noticias objetivas y precisas de todo el mundo.
                Fundado en 2023 por Fulanito y Menganito, nuestro equipo está dedicado a brindarte las últimas
                noticias de política, negocios, tecnolgía, deportes y más</Text>
            </Box>
            <Box>
                <Text>Conecta con nosotros</Text>
                <Link>@periódico_digital</Link>
                <br></br>
                <Link>Periódico Digital</Link>
            </Box>
    
        </div>
    )

}
export default Home