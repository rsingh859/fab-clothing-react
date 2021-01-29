import React from 'react';
import './collection-overview.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.components';
import { useSelector } from 'react-redux';

const CollectionOverview = () => {

    const {collections} = useSelector(createStructuredSelector({ collections: selectCollectionsForPreview }));

    return(
    <div className='collection-overview'>
    {
        collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={ id } {...otherCollectionProps } />
        ))
    }
    </div>
    );
}

export default CollectionOverview;