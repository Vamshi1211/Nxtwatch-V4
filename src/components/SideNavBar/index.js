import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  SideBarNavContainer,
  SideBarContainer,
  SideBarItem,
  SideBarTrendingItem,
  SideBarGamingItem,
  SideBarSavedItem,
  SideBarText,
  HomeIcon,
  NavLink,
  TrendingIcon,
  GamingIcon,
  SavedIcon,
  FooterSection,
  ContactUsHeading,
  SocialMediaContacts,
  SocialMediaImage,
  FooterDes,
} from './styledComponents'

// import SideBarItemsList from '../SideBarItemsList'

// const sideBarMenu = [
//   {displayId: 'HOME', displayText: 'Home'},
//   {displayId: 'TRENDING', displayText: 'Trending'},
//   {displayId: 'GAMING', displayText: 'Gaming'},
//   {displayId: 'SAVED', displayText: 'Saved Videos'},
// ]

class SideNavBar extends Component {
  state = {home: true, trending: false, gaming: false, saved: false}

  homeClicked = () => {
    this.setState({home: true, trending: false, gaming: false, saved: false})
  }

  trendingClicked = () => {
    this.setState({home: false, trending: true, gaming: false, saved: false})
  }

  gamingClicked = () => {
    this.setState({home: false, trending: false, gaming: true, saved: false})
  }

  savedClicked = () => {
    this.setState({home: false, trending: false, gaming: false, saved: true})
  }

  render() {
    const {home, trending, gaming, saved} = this.state
    const {match} = this.props
    const {path} = match

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <SideBarNavContainer isDarkTheme={isDarkTheme}>
              <SideBarContainer>
                <NavLink to="/">
                  <SideBarItem
                    onClick={this.homeClicked}
                    home={home}
                    isDarkTheme={isDarkTheme}
                    path={path}
                  >
                    <HomeIcon path={path} />
                    <SideBarText isDarkTheme={isDarkTheme}>Home</SideBarText>
                  </SideBarItem>
                </NavLink>

                <NavLink to="/trending">
                  <SideBarTrendingItem
                    onClick={this.trendingClicked}
                    trending={trending}
                    isDarkTheme={isDarkTheme}
                    path={path}
                  >
                    <TrendingIcon trending={trending.toString()} path={path} />
                    <SideBarText isDarkTheme={isDarkTheme}>
                      Trending
                    </SideBarText>
                  </SideBarTrendingItem>
                </NavLink>

                <NavLink to="/gaming">
                  <SideBarGamingItem
                    onClick={this.gamingClicked}
                    gaming={gaming}
                    isDarkTheme={isDarkTheme}
                    path={path}
                  >
                    <GamingIcon gaming={gaming.toString()} path={path} />
                    <SideBarText isDarkTheme={isDarkTheme}>Gaming</SideBarText>
                  </SideBarGamingItem>
                </NavLink>

                <NavLink to="/saved-videos">
                  <SideBarSavedItem
                    onClick={this.savedClicked}
                    saved={saved}
                    isDarkTheme={isDarkTheme}
                    path={path}
                  >
                    <SavedIcon saved={saved.toString()} path={path} />
                    <SideBarText isDarkTheme={isDarkTheme}>
                      Saved Videos
                    </SideBarText>
                  </SideBarSavedItem>
                </NavLink>
              </SideBarContainer>
              <FooterSection>
                <ContactUsHeading isDarkTheme={isDarkTheme}>
                  CONTACT US
                </ContactUsHeading>
                <SocialMediaContacts>
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaContacts>
                <FooterDes isDarkTheme={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations
                </FooterDes>
              </FooterSection>
            </SideBarNavContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(SideNavBar)
