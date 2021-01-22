import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverviewContainer from '../../components/collection-overview/collections-overview.container';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action.creators';
import CollectionContainer from '../collection/collection.container';

class ShopPage extends React.Component {
    
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render(){
        const { match, isCollectionLoaded } = this.props;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={ CollectionOverviewContainer } />
                <Route path = {`${match.path}/:categoryId`} component={ CollectionContainer } />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);