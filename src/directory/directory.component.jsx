import React, { Component } from 'react'
import MenuItem from '../components/menu-item/menu-item.component';
import './directory.styles.scss'

class Directory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            section: [
            {
                title: "GUITARS",
                imageURL: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                id: 1
            },
            {
                title: "BASSES",
                imageURL: 'https://images.unsplash.com/photo-1543060749-aa3f115aad09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                id: 2
            },
            {
                title: "AMPLIFIERS",
                imageURL: 'https://images.unsplash.com/photo-1588440331458-d1303d56528b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                id: 3
            },
            {
                title: "FX PEDALS",
                imageURL: 'https://images.unsplash.com/photo-1550602003-c89e9c05f972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                size: 'large',
                id: 4
            },
            {
                title: "ACCESSORIES",
                imageURL: 'https://images.unsplash.com/photo-1589533530156-bbaae2d31c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                size: 'large',
                id: 5
            },
        ]
        }
    }
    


    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.section.map(({title, imageURL, id, size}) => (
                        <MenuItem key={id} title={title} imageURL={imageURL} size={size}/>
                    ))
                }
            </div>

        )
    }
}

export default Directory;
