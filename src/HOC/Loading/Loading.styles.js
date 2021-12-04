const styles = {
  loadingContainer: (isLoading) => ({
    display:  isLoading ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0, 
    left: 0,
    width: '100vw',
    height: '100vh'
  }),
  container: { position: 'relative' },
  logo: {width: '140px', height: '140px'}
};

export default styles;
