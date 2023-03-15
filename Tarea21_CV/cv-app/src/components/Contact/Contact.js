import { Text, Button, Image, Popover } from '@chakra-ui/react'
import {FaLinkedin} from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <Text fontSize="2xl" textAlign="center" mt="100px">Puedes contactar conmigo a través de las siguientes vías:</Text>
            <Button>
                <FaLinkedin></FaLinkedin>
            </Button>
        </div>
    )
}
export default Contact