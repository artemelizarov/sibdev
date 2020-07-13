import React from 'react';
import './css/SideBar.css';
import './css/SideBarTabletClosedMenu.css';
import './css/SideBarTabletOpenMenu.css';

import './css/SideBarMobileClosedMenu.css';
import './css/SideBarMobileOpenMenu.css';

function SideBar (props) {
  return (
    <div className="sideBarMarkup">
      <div className="mainLogo">
        <div className="mainLogo__coupon">
        </div>
        <div className="mainLogo__beco">BECO</div>
      </div>
      <div
        className={props.checkedButton1 ? "miniLogo1 miniLogo1--active" : "miniLogo1"}
        checked={props.checkedButton1}
        onClick={props.acceptMenuItem1}>
      </div>
      <div
        className={props.checkedButton1 ? "categoryName categoryName--active" : "categoryName"}
        checked={props.checkedButton1}
        onClick={props.acceptMenuItem1}>
        Каталог
      </div>
      <div
        className={props.checkedButton2 ? "miniLogo2 miniLogo2--active" : "miniLogo2"}
        checked={props.checkedButton2}
        onClick={props.acceptMenuItem2}>
      </div>
      <div
        className={props.checkedButton2 ? "categoryName categoryName--active" : "categoryName"}
        checked={props.checkedButton2}
        onClick={props.acceptMenuItem2}>
        Здоровье
      </div>
      <div
        className={props.checkedButton3 ? "miniLogo3 miniLogo3--active" : "miniLogo3"}
        checked={props.checkedButton3}
        onClick={props.acceptMenuItem3}>
      </div>
      <div
        className={props.checkedButton3 ? "categoryName categoryName--active" : "categoryName"}
        checked={props.checkedButton3}
        onClick={props.acceptMenuItem3}>
        Красота
      </div>
      <div
        className={props.checkedButton4 ? "miniLogo4 miniLogo4--active" : "miniLogo4"}
        checked={props.checkedButton4}
        onClick={props.acceptMenuItem4}>
      </div>
      <div
        className={props.checkedButton4 ? "categoryName categoryName--active" : "categoryName"}
        checked={props.checkedButton4}
        onClick={props.acceptMenuItem4}>
        Развлечения
      </div>
      <div
        className={props.checkedButton5 ? "miniLogo5 miniLogo5--active" : "miniLogo5"}
        checked={props.checkedButton5}
        onClick={props.acceptMenuItem5}>
      </div>
      <div
        className={props.checkedButton5 ? "categoryName categoryName--active" : "categoryName"}
        checked={props.checkedButton5}
        onClick={props.acceptMenuItem5}>
        Авто
      </div>
    </div>
  )
}

export default SideBar
