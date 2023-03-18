import { Center, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NewsItems = (props) => {
    return (
        <Center width='33%'>
            <Link to={"/noticias/" + props.navigate}>{props.link}</Link>
            <Text>
                {props.text}
            </Text>
        </Center>
    )
}

export default NewsItems