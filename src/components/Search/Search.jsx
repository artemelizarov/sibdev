import React from 'react';
import './css/Search.css';
import './css/SearchTabletOpenMenu.css';
import './css/SearchTabletClosedMenu.css';
import './css/SearchTabletClosedMenuScroll.css';

import './css/SearchMobileClosedMenu.css';
import './css/SearchMobileOpenMenu.css';
import './css/SearchMobileClosedMenuScroll.css';

function Search (props) {
  let heading="Каталог"
  if (props.checkedButton1) {heading="Каталог"}
  if (props.checkedButton2) {heading="Здоровье"}
  if (props.checkedButton3) {heading="Красота"}
  if (props.checkedButton4) {heading="Развлечения"}
  if (props.checkedButton5) {heading="Авто"}
  return (
    <div className="searchMarkup">
      <div className="heading">
      {heading}
      </div>
      <div className="searchLine">
        <input className="searchLine__line" type="text" value={props.value} onChange={props.textInputChange}/>
      </div>
      <div className="leadLine">
      </div>
    </div>
  )
}

export default Search
