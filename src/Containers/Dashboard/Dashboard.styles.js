const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column'
  },
  containerProfile: { height: '400px', width: '30%' },
  containerItem: { border: 'solid 1px grey', borderRadius: '8px', width: '40%', display: 'flex', justifyContent: 'space-between', padding: '20px', flexDirection: 'column', height: '70px', marginRight: '10px', marginBottom: '10px' },
  logo: {
    width: '200px',
    marginRight: '120px'
  },
   navbar: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingRight: '20px'
  },
  profileImage: { width: '300px', height: '300px', borderRadius: '50%' },
  plainText: { marginBottom: 0, lineHeight: 1 },
  grey: { color: 'grey' },
  normal: { fontWeight: 'normal' },
  mb2: { marginBottom: '20px' },
  btnLogout: { padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'center', backgroundColor: 'blue',color: 'white', justifyContent: 'center', fontWeight: 'bold', marginBottom: '15px', cursor: 'pointer' },
  nav: { marginRight: '20px', paddingBottom: '15px', cursor: 'pointer' },
  navTitle: (title, menu) => ({ fontWeight: 'bold', lineHeight: 0, color: menu === title ? 'grey' : 'black' }),
  underline: { borderWidth: '1px', width: '100%', borderColor: 'grey', borderStyle: 'solid' },
  visibility: { padding: '5px', border: 'solid 1px grey', borderRadius: '8px', display: 'flex', alignItems: 'center' },
  p: { marginRight: '20px', lineHeight: 1, marginBottom: 0 },
  subContent: { height: '400px', width: '70%', paddingLeft: '10px' }
};

export default styles;
