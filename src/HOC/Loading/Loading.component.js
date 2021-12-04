import React from "react";

import styles from "./Loading.styles";
import images from '../../Assets';
import './Loading.styles.css';

const Loading = (Component) => {
  const WrappedComponent = () => {
    const [isLoading, setLoading] = React.useState(false);

    return (
      <div style={styles.container}>
        <div 
          style={styles.loadingContainer(isLoading)}
        >
          <div style={{ position: 'relative' }}>
            <div className='loading' />
            <img style={styles.logo} src={images.loading} />
          </div>
        </div>
        <Component setLoading={setLoading} />
      </div>
    );
  };

  return WrappedComponent;
};

export default Loading