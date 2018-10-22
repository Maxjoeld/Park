const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  animation: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  slideView: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity:0.8,
  },
  slider: {
    width: 130,
    opacity:0.8,
    height: 30,
  },
  slideText: {
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    opacity:0.8,
  },
};

export default styles;