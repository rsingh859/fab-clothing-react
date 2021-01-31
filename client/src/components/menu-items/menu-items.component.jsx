import React from 'react';
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu-items.styles';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer className='background-image' imageUrl={imageUrl} />
            <ContentContainer className='content'>
                <ContentTitle className='title'>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle className='subtitle'>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    );
}

export default withRouter(MenuItem);