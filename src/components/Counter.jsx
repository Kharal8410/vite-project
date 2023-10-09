import { useState } from "react"
import { Card, CardHeader, CardBody, CardFooter, Button } from "react-bootstrap"

const Counter = () => {
    const [count, setCount] = useState(0);
    const increament = (e) => {
        e.preventDefault();
        setCount(count + 1)
    }
    const decreament = (e) => {
        e.preventDefault();
        setCount(count - 1)
    }
    const reset = (e) => {
        e.preventDefault();
        setCount(0)
    }
    return (
        <Card className=' m-auto mt-5 bg-light w-25 p-4 text-center'>
            <CardHeader>
                <h1>Counter</h1>
            </CardHeader>
            <CardBody>
                <h1>{count}</h1>
            </CardBody>
            <CardFooter>
                <Button variant='primary me-1' onClick={increament}>Increament</Button>
                <Button variant='secondary me-1' onClick={decreament}>Decreament</Button>
                <Button variant='danger' onClick={reset}>Reset</Button>
            </CardFooter>
        </Card>


    )
}

export default Counter;