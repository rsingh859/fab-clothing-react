import ShopActionTypes from './shop.types';

export const updateCollections = (collectionMap) => ({
    type: ShopActionTypes.UPDATE_SHOP_DATA,
    payload: collectionMap
});