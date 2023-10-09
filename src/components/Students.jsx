import { useState } from "react"
import { Card, CardHeader, CardBody, CardFooter, Button } from "react-bootstrap"
import axios from "axios";

const QuoteDisplay = () => {
    const [id, setId] = useState(1);
    const [author, setAuthor] = useState("");
    const [quotes, setQuotes] = useState("");


    const toggle = async (e) => {
        e.preventDefault();

        const { data } = await axios.get('https://dummyjson.com/quotes');
        const { quotes } = data;
        const qts = quotes.find((quotes) => quotes.id === id);
        setAuthor(qts.author);
        setQuotes(qts.quote);

        setId(id + 1);

    };

    return (

        <Card className=' m-auto mt-5 bg-light w-25 p-4 text-center'>
            <CardHeader>
                <h1>Quote Display</h1>
            </CardHeader>
            <CardBody>
                <h3>Author: {author}</h3>
                <h6>Quotes: {quotes}</h6>

            </CardBody>
            <CardFooter>
                <Button variant='primary' onClick={toggle}>Toggle</Button>


            </CardFooter>
        </Card>
    )
}

export default QuoteDisplay;