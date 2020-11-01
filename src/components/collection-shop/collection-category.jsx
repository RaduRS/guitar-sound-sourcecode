import React from 'react'
import './collection-shop.styles.scss'
import CollectionItem from '../collection-shop-item/collection-shop-item.component'

function CollectionCategory({title, items}) {
    return (
        <div className='collection-guitar'>
            <h1 className='title'>{title}</h1>
                <div className='preview'>
                    {items
                        .map(({id, ...otherItemProps}) => (
                        <CollectionItem key={id} {...otherItemProps}/>
                    ))}
                </div>
        </div>
    )
}

export default CollectionCategory
