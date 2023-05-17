'use client';
import Image from 'next/image'
import Link from 'next/link'
import styles from './../page.module.css'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


// static metadata object
export const metadata = {
    title: 'ISTAD - Products',
    description: 'Listing all products'
}

// create async function to getProducts
async function fetchProducts() { // similar to getServerSideProps
    const resp = await fetch("https://api.escuelajs.co/api/v1/products", {cache: "no-store"})
    return resp.json()
}

export default async function Products() {
    const products = await fetchProducts()
    return (
        <main className={
            styles.main
        }>
            <div className='container'>
                <div className='row justify-content-center align-item-center d-flex'>
                    {
                    products.map(product => (
                        <Card className='col-12 col-xlg-3 col-lg-3 col-sm-12 col-md-6'>
                            <Card.Img variant="top"
                                src={
                                    product.images[0]
                                }/>
                            <Card.Body>
                                <Card.Title>{
                                    product.title
                                }</Card.Title>
                                <Card.Text> {
                                    product.description
                                } </Card.Text>
                                <Link variant="primary"
                                    href={
                                        `/products/${
                                            product.id
                                        }`
                                }>View detail</Link>
                            </Card.Body>
                        </Card>
                    ))
                } </div>
            </div>
        </main>
    )
}
