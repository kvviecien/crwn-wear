import React from 'react';

import SHOP_DATA from './shop.data';
import './shop.styles.scss';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        return <div>SHOP PAGE</div>;
    }
}

export default ShopPage;
