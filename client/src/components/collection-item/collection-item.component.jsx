import React from 'react';

import { connect } from 'react-redux';

import { addItems } from '../../redux/cart/cart.actions';

import { CollectionItemContainer ,AddButton, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer } from './collection-item.styles';

const CollectionItem = ({ item , addItems }) => {
    const { name, price, imageUrl } = item
    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{ name }</NameContainer>
                <PriceContainer>${ price }</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick = {() => addItems(item)} inverted> ADD TO CART </AddButton>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItems: (item) => dispatch(addItems(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);