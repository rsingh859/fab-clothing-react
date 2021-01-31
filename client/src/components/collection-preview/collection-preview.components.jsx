import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, routeName }) => {
    const history = useHistory();
    const routeMatch = useRouteMatch();
    return(
    <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${routeMatch.url}/${routeName}`)}>{ title.toUpperCase() }</TitleContainer>
        <PreviewContainer>
            {items.filter((item,idx) => idx < 4)
                  .map((item) => (
                  <CollectionItem key={ item.id } item={item} />
            ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
    );
}

export default CollectionPreview;