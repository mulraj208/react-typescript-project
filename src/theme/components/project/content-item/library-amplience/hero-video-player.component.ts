const commonIconStyles = {
  color: 'white',
  border: 'none',
  w: 6,
  h: 6
}

export const AmplienceHeroVideoPlayer = {
  baseStyle: {
    container: {
      flexDirection: 'column',
      justifyContent: 'center',
      pos: 'relative',
      h: 'full'
    },
    player: {
      w: 'full'
    },
    controlsContainer: {
      pos: 'absolute',
      top: '0',
      left: '0',
      zIndex: 2,
      color: 'white',
      w: 'full',
      p: 4
    },
    icon: {
      alignItems: 'center',
      justifyContent: 'center',
      bg: 'white',
      borderRadius: '100%',
      boxSize: '1.125rem'
    },
    playIconBtnStyle: {
      mt: '0.125rem'
    },
    muteIconBtnStyle: {
      ...commonIconStyles,
      mr: 3
    },
    fullScreenIconBtnStyle: {
      ...commonIconStyles
    },
    progressBarContainer: {
      w: 'full',
      pos: 'absolute',
      left: 0,
      bottom: 0,
      zIndex: 2,
      bg: 'rgba(255, 255, 255, 0.20)'
    },
    progressBarTrackContainer: {
      pos: 'relative',
      h: 1
    },
    progressBarTrack: {
      pos: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      transform: 'translateY(-50%)',
      w: '100%',
      h: '100%',
      appearance: 'none',
      bg: 'transparent',
      outline: 'none',
      zIndex: 1,
      '::-webkit-slider-thumb': {
        appearance: 'none'
      }
    },
    progressBarCompletedTrack: {
      pos: 'absolute',
      top: 0,
      left: 0,
      h: 'full',
      bg: 'white',
      transition: 'width 0.3s ease'
    }
  }
}
