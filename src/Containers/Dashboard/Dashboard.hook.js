import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import allAction from "../../Store/Actions";
import { useAuthContext } from '../../Contexts/Auth';

const useDashboard = (props) => {
  const [menu, setMenu] = React.useState('Repositories');

  const { user, items } = useSelector(state => state.user);
  const auth = useAuthContext();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    auth.logout();
    navigate('/login')
  }

  React.useEffect(() => {
    let url;

    switch (menu) {
      case 'Repositories':
        url = user.repos_url
        break;
      default:
        url = user.repos_url
        break;
    }

    dispatch(allAction.user.getItems(url))
  }, [menu]);

  return {
    ...props,
    profileImage: user.avatar_url,
    name: user.name,
    username: user.login,
    bio: user.bio,
    menu,
    setMenu,
    items,
    logout
  };
};

export default useDashboard;
