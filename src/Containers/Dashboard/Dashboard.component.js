import React from "react";

import config from './Dashboard.config';
import styles from './Dashboard.styles';
import images from '../../Assets';

const _renderProfileImage = ({ profileImage }) => (
  <div>
    <img src={profileImage} style={styles.profileImage} />
  </div>
);

const _renderUsername = ({ name, username }) => (
  <div style={styles.mb2}>
    <h1 style={styles.plainText}>{name}</h1>
    <h2 style={{...styles.grey, ...styles.normal}}>{username}</h2>
  </div>
);

const _renderBio = ({ bio }) => (
  <div style={styles.mb2}>
    <h2 style={styles.grey}>{bio}</h2>
  </div>
);

const _renderButtonLogout = ({ logout }) => (
  <div style={styles.btnLogout} onClick={logout} >
    <span style={styles.plainText}>Logout</span>
  </div>
);

const _renderProfile = ({ profileImage, name, username, bio }) => (
  <div style={styles.containerProfile}>
    {_renderProfileImage({ profileImage })}
    {_renderUsername({ name, username })}
    {_renderBio({ bio })}
  </div>
);

const _renderNav = (title, index, menu, setMenu) => (
  <div key={index} style={styles.nav} onClick={() => setMenu(title)}>
    <h2 style={styles.navTitle(title, menu)}>{title}</h2>
    {menu === title && <div style={styles.underline} />}
  </div>
);

const _renderItem = (item) => (
  <div key={item.id} style={styles.containerItem}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <a style={{ textDecoration: 'none' }} href={item.html_url}>{item.full_name}</a>
      </div>
      <div style={styles.visibility}>
        <span style={styles.plainText}>{item.visibility}</span>
      </div>
    </div>
    <div style={{ display: 'flex' }}>
      <p style={styles.p}>
        {item.language}
      </p>
      {item.fork && item.forks_count > 0 && <p style={styles.p}>
        {`Forks ${item.forks_count}`}
      </p>}
    </div>
  </div>
);

const _renderSubContent = ({ menu, setMenu, items }) => (
  <div style={styles.subContent}>
    <div style={{  display: 'flex'}}>
      {['Repositories'].map((title, index) => _renderNav(title, index, menu, setMenu))}
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
      {items.length > 0 && items.map((item) => _renderItem(item))}
    </div>
  </div>
);

const _renderContent = ({ profileImage, name, username, bio, menu, setMenu, items }) => (
  <div style={{ display: 'flex', padding: '15px' }}>
    {_renderProfile({ profileImage, name, username, bio })}
    {_renderSubContent({ menu, setMenu, items })}
  </div>
);

const _renderLogo = () => (
  <img src={images.logo} style={styles.logo} />
);

const _renderNavbar = ({ logout }) => (
  <div style={styles.navbar}>
    {_renderLogo()}
    {_renderButtonLogout({ logout })}
  </div>
);

const DashboardComponent = (props) => {
  const {
    bio,
    name,
    menu,
    items,
    logout,
    setMenu,
    username,
    profileImage,
  } = props;

  console.log({ props })

  return (
    <div style={styles.container}>
      {_renderNavbar({ logout })}
      {_renderContent({ profileImage, name, username, bio, menu, setMenu, items })}
    </div>
  )
};

DashboardComponent.displayName = config.component.displayName;

export default DashboardComponent;
