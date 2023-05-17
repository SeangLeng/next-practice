'use client'
import Link from "next/link"
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

async function fetchProduct(id) {
    const resp = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    return resp.json()
}

// call generateMetadata()
export async function generateMetadata({params}) {
    const product = await fetchProduct(params.id)
    return {
        title: product.title,
        description: product.description,
        thumbnail: product.images[0],
        metadataBase: new URL('https://istad.co'),
        alternates: {
            canonical: '/',
            languages: {
                'en-US': '/en-US',
                'de-DE': '/de-DE'
            }
        },
        openGraph: {
            images: product.images[0],
            title: product.title,
            description: product.description
        }
    }
}

export default async function ProductDetail({params}) {
    const {id} = params
    const product = await fetchProduct(id)
    return (
        <div className='container'>
            <div className='row justify-content-center align-item-center d-flex'>
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
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
