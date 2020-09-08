import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from "../../redux/directory/directory.selector"



import './directory.styles.scss'

import ItemMenu from '../item-menu/item-menu.component'


const Directory = ({sections}) => (
  <div className="directory-menu">
    {
      sections.map(({ id, ...OtherSectionProps }) => (
        <ItemMenu key={id} {...OtherSectionProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})


export default connect(mapStateToProps)(Directory);