import React from 'react';
import './css/App.css';
import './css/AppTabletClosedMenu.css';
import './css/AppTabletOpenMenu.css';
import './css/AppTabletClosedMenuScroll.css';

import './css/AppMobileClosedMenu.css';
import './css/AppMobileOpenMenu.css';
import './css/AppMobileClosedMenuScroll.css';

import SideBar from './components/SideBar/SideBar'
import Search from './components/Search/Search'
import Body from './components/Body/Body'

class App extends React.Component {
  state = {
    checkedButton1: true,
    checkedButton2: false,
    checkedButton3: false,
    checkedButton4: false,
    checkedButton5: false,
    searchValue: "",
    checkedBurgerMenu: false,
    pageYOffset: 0,
    resizeWindow: window.innerWidth
  }

  acceptMenuItem1 = event => {
    this.setState({
      checkedButton1: true,
      checkedButton2: false,
      checkedButton3: false,
      checkedButton4: false,
      checkedButton5: false,
    })
  }
  acceptMenuItem2 = event => {
    this.setState({
      checkedButton1: false,
      checkedButton2: true,
      checkedButton3: false,
      checkedButton4: false,
      checkedButton5: false,
    })
  }
  acceptMenuItem3 = event => {
    this.setState({
      checkedButton1: false,
      checkedButton2: false,
      checkedButton3: true,
      checkedButton4: false,
      checkedButton5: false,
    })
  }
  acceptMenuItem4 = event => {
    this.setState({
      checkedButton1: false,
      checkedButton2: false,
      checkedButton3: false,
      checkedButton4: true,
      checkedButton5: false,
    })
  }
  acceptMenuItem5 = event => {
    this.setState({
      checkedButton1: false,
      checkedButton2: false,
      checkedButton3: false,
      checkedButton4: false,
      checkedButton5: true,
    })
  }

  textInputChange = (field) => event => {
    this.setState({ [field]: event.target.value });
  }

  changeIndicator = field => event => {
    this.setState({ [field]: !event.target.checked });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.findScroll)
    window.addEventListener("resize", this.handleResizeWindow)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.findScroll)
    window.removeEventListener("resize", this.handleResizeWindow);
  }

  findScroll = () => {
    this.setState({pageYOffset: document.documentElement.scrollTopt})
  }

  handleResizeWindow = () => {
    this.setState({resizeWindow: window.innerWidth})
  }


  render () {
    let expandMenuButton
    var scrollTop = document.documentElement.scrollTop;
    var windowX = document.documentElement.clientWidth;
    console.log(scrollTop)
    if (windowX <= 868) {
      expandMenuButton =
      <div className="expandMenuButton">
        <div className={this.state.checkedBurgerMenu ? "burgerMenu burgerMenu--active" : "burgerMenu"} checked={this.state.checkedBurgerMenu} onClick={this.changeIndicator("checkedBurgerMenu")}>
        </div>
      </div>}
    let wrapperClass

    if (windowX<420) {
      if (!this.state.checkedBurgerMenu) {
        if (scrollTop>0) {
          {wrapperClass="wrapperMobile wrapperMobileScroll"}
        } else {wrapperClass="wrapperMobile"}
      } else {wrapperClass="wrapperMobile--active"}
    }

    if (windowX>420 && windowX<=868) {
      if (!this.state.checkedBurgerMenu) {
        if (scrollTop>0) {
            {wrapperClass="wrapperTablet wrapperTabletScroll"}
        } else {wrapperClass="wrapperTablet"}
      } else {wrapperClass="wrapperTablet--active"}
    }

    if (windowX>868) {wrapperClass="wrapper"}

    return (
      <div className={wrapperClass}>
        <div className="sideBar">
          <SideBar
            checkedButton1={this.state.checkedButton1}
            checkedButton2={this.state.checkedButton2}
            checkedButton3={this.state.checkedButton3}
            checkedButton4={this.state.checkedButton4}
            checkedButton5={this.state.checkedButton5}
            acceptMenuItem1={this.acceptMenuItem1}
            acceptMenuItem2={this.acceptMenuItem2}
            acceptMenuItem3={this.acceptMenuItem3}
            acceptMenuItem4={this.acceptMenuItem4}
            acceptMenuItem5={this.acceptMenuItem5}
            checkedBurgerMenu={this.state.checkedBurgerMenu}
            changeIndicator={this.changeIndicator("checkedBurgerMenu")}
            resizeWindow={this.state.resizeWindow}
            pageYOffset={this.state.pageYOffset}
          />
        </div>
        {expandMenuButton}
        <div className="header">
          <Search
            value={this.state.searchValue}
            textInputChange={this.textInputChange("searchValue")}
            checkedButton1={this.state.checkedButton1}
            checkedButton2={this.state.checkedButton2}
            checkedButton3={this.state.checkedButton3}
            checkedButton4={this.state.checkedButton4}
            checkedButton5={this.state.checkedButton5}
          />
        </div>
        <div className="body">
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
