import { Flex,  Box, Text, Image } from '@chakra-ui/react'

const Header = () => {
    return (
        <Flex justifyContent="center" mt="50px">
            <Box width="50%">
                <Text fontSize= "6xl" as="b">¡Hola! Me llamo</Text>
                <br></br>
                <Text fontSize= "6xl" as="b">Meganito García</Text>
                <Text fontSize="2xl" color="gray">Soy Desarrollador Web FullStack en Madrid</Text>
            </Box>
            <Box>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' boxSize='200px' borderRadius='15px'/>
            </Box>
        </Flex>
    )
}
export default Header