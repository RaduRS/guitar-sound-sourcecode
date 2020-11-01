import React, { Component } from 'react'
import SHOP_DATA from '../../pages/shop/shop.data'
import CollectionCategory from '../collection-shop/collection-category'


class accessories extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            collections: SHOP_DATA,
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='accessories'>
                {
                    collections.filter(category => category.routeName === 'accessories')
                    .map(({id, ...otherCollectionProps}) => (
                    <CollectionCategory key={id} {...otherCollectionProps}/>
                ))
            }
            </div>
        )
    }
}

export default accessories
