import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../menu-items/menu-items.component';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = () => {

  const { sections } = useSelector(createStructuredSelector({ sections: selectDirectorySections }));

    return(
        <div className='directory-menu'>
            {sections.map(({id , ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    );
}

export default Directory;