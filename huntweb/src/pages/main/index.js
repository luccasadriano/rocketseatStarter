import React, { Component } from 'react'
import api from '../../services/api'
import {Link} from 'react-router-dom'

import './styles.css'

export default class Main extends Component{
    //conceito state -> é sempre um objeto
    state = {
        products: [],
        productInfo: {},
        page: 1,

    }

    componentDidMount(){
        this.loadProducts()
    }

    loadProducts = async (page = 1) =>{
        const response = await api.get(`/products?page=${page}`)

        //rest operator
        const { docs, ...productInfo } = response.data

        console.log(response.data.docs)
        this.setState({products: docs, productInfo, page})//atualizando o obj product com os objetos da api
    }

    prevPage = () => {
       const { page, productInfo } = this.state

       if(page === 1) return

       const pageNumber = page - 1

       this.loadProducts(pageNumber)
    }

    nextPage = () =>{
        const { page, productInfo } = this.state

        if(page === productInfo.pages) return

        const pageNumber = page + 1

        this.loadProducts(pageNumber)
    }

    render(){//sempre com uma variavel state o metodo render vai ficar escutando a alteração da variavel, se tiver alteração o render será executado trazendo as alterações

        const { products, page, productInfo } = this.state
        
        return(
            <div className='product-list'>
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className='actions'>
                    <button disabled={page === 1} onClick={this.prevPage}>
                        Anterior
                    </button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>
                        Proximo
                    </button>

                </div>
            </div>

        )
    }
}