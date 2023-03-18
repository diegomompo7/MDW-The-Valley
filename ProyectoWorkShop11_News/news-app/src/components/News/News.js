import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { Button, Heading, Image, Text, Box , Input} from '@chakra-ui/react';
const API_URL = "https://raw.githubusercontent.com/The-Valley-School/react-w5-newspaper/main/api/"

const News = () => {

    const [page, setPage] = React.useState(1)
    const [getNewsList, setGetNewsList] = React.useState([])
    const [filteredList, setFilteredList] = React.useState([])
    let { topic } = useParams()

    React.useEffect(() => {
        fetch(API_URL + topic + "/" + page + ".json")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setGetNewsList(data.articles)
                setFilteredList(data.articles)
            })
    }, [page, topic])

    const lookNews = (event) => {

        if(event.target.value.length > 0){
            let filtered = getNewsList.filter((look) => look.title.includes(event.target.value.toLowerCase()))
            setFilteredList(filtered)
        }else{
            setFilteredList(getNewsList)
        }
    }


    return (
        <div>
            <Input placeholder='look a new' onChange={lookNews}/>
            {
                
                filteredList.map((news) => (
                <div>
                    {console.log(news)}
                    <Box>
                        <Image src={news.media}></Image>
                        <Heading>{news.title}</Heading>
                        <Text>{news.summary}</Text>
                        <Text>{news.published_date} - {news.topic}</Text>
                        <Link>Leer noticia completa</Link>
                    </Box>
                </div>
                ))
            }
                    <Button onClick={() => (page > 1 && setPage(page - 1))}>Pagína Anterior</Button>
                    <Text>Página {page} de 5</Text>
                    <Button onClick={() => (page < 5 && setPage(page + 1))}>Siguiente Página</Button>
        </div>
    )
}
export default News