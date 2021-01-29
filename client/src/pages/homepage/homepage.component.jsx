import React from 'react';
import Directory from '../../components/Directory/Directory.component';
import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
    return(
        <HomePageContainer>
            <Directory />    
        </HomePageContainer>
    );
}

export default HomePage;