import { useEffect, useState } from 'react';
import axios from "axios";
import { Button } from 'react-bootstrap';

function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {

            const response = await axios.get('https://dummyjson.com/products');
            setProducts(response.data.products);

        }

        fetchProducts();
    }, []);

    const deleteHandler = (e, id) => {
        e.preventDefault();
        const filteredProduct = products.filter((prod) =>
            prod.id !== id

        );
        setProducts(filteredProduct);
    }




    return (
        <>
            <h1 className='text-center mt-1'>Products</h1>

            <div className='container'>
                {
                    products.map((Data) => {
                        return (
                            <div className='card bg-dark text-light' style={{ height: 450 }} key={Data.id}>
                                <div className='card-header'>
                                    <img className="img" src={Data.thumbnail} alt=''></img>
                                </div>
                                <div className='card-body'>
                                    <h1 className='title'>{Data.title.length > 14 ? Data.title.slice(0, 13) + "..." : Data.title}</h1>
                                    <div className='price'>
                                        <h6 style={{ fontSize: 15 }}>Price: ${Data.price}</h6>
                                        <h6 style={{ fontSize: 15 }}>Discount:   {Data.discountPercentage}%</h6>
                                    </div>
                                    <p>{Data.description.slice(0, 50) + "..."}</p>
                                </div>

                                <div className='card-footer'>
                                    <Button variant="primary">View</Button>
                                    <Button variant="secondary">Edit</Button>
                                    <Button variant="danger" onClick={(e) => deleteHandler(e, Data.id)}>Delete</Button>

                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </>
    );
}

export default ProductList;
