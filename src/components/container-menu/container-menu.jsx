import React from 'react';

import './container-menu.styles.scss';

import MenuItem from '../menu-item/menu-item';

class ContainerMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl:
                        'https://images.unsplash.com/photo-1560774358-d727658f457c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl:
                        'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl:
                        'https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl:
                        'https://images.unsplash.com/photo-1508350552147-213c11fcede6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl:
                        'https://images.unsplash.com/photo-1519631128182-433895475ffe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    size: 'large',
                    id: 5
                }
            ]
        };
    }

    render() {
        return (
            <div className="container-menu">
                {this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem
                        key={id}
                        title={title}
                        imageUrl={imageUrl}
                        size={size}
                    />
                ))}
            </div>
        );
    }
}

export default ContainerMenu;
