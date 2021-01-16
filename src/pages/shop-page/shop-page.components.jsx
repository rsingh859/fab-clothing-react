import React from 'react';
import { createStructuredSelector } from 'reselect';

import { selectShopCollections } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/collection-preview/collection-preview.components';
import { useSelector } from 'react-redux';

const ShopPage = () => {

    const {collections} = useSelector(createStructuredSelector({ collections: selectShopCollections }));
    return(
        <div className='shop-page'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={ id } {...otherCollectionProps } />
                ))
            }
        </div>
    );
}

export default ShopPage;