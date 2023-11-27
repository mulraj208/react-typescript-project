import { GlobalStyleProps, SystemStyleObject } from '@chakra-ui/theme-tools'

export const AmplienceHeroComponentButtonsContainer = {
  baseStyle: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  sizes: {
    homepage: (props: GlobalStyleProps): SystemStyleObject => {
      const { theme } = props

      return {
        gap: '1rem',
        marginBottom: 0,
        mx: 8,
        [`@media screen and (min-width: ${theme.breakpoints.lg})`]: {
          marginBottom: '3.5rem'
        }
      }
    }
  },
  variants: {
    column: {
      flexDirection: 'column'
    },
    row: {
      flexDirection: 'row'
    }
  }
}

export const AmplienceHeroComponentContentContainer = {
  baseStyle: {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'end',
    position: 'relative'
  },
  variants: {
    homepage: (props: GlobalStyleProps): SystemStyleObject => {
      const { theme } = props

      return {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        bg: 'transparent',
        p: 6,
        [`@media screen and (min-width: ${theme.breakpoints.lg})`]: {
          p: 0
        }
      }
    }
  }
}

export const AmplienceHeroComponentMainContainer = {
  baseStyle: {
    display: 'flex'
  },
  sizes: {
    homepageLarge: {},
    homepageSmall: {},
    marketingInterstitialLarge: { height: '23.688rem' },
    marketingInterstitialSmall: { height: '33.111rem' }
  },

  variants: {
    marketingInterstitial: {
      width: '100%'
    },
    homepage: {
      maxWidth: 'container.xxxl',
      width: '100%',
      position: 'relative',
      flexDirection: 'column'
    }
  }
}

export const AmplienceHeroComponentMediaAsset = {
  baseStyle: {
    // position: 'absolute'
  },
  sizes: {
    homepageLarge: {},
    homepageSmall: {},
    marketingInterstitialLarge: {
      maxWidth: 'container.xxxl',
      height: '23.688rem',
      position: 'relative',
      '.image-with-loader-image': {
        objectFit: 'cover',
        height: '23.688rem',
        minHeight: '23.688rem'
      }
    },
    marketingInterstitialSmall: {
      height: '33.111rem',
      position: 'relative',
      '.image-with-loader-image': {
        objectFit: { base: 'scale-down', md: 'cover' },
        height: '33.111rem'
      }
    }
  },
  variants: {
    homepage: {
      maxWidth: 'container.xxxl',
      width: '100%',
      '.image-with-loader-image': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      },
      '::-webkit-media-controls-timeline': {
        display: 'none'
      }
    },
    marketingInterstitial: {
      width: '100%',
      '.image-with-loader-image': {
        width: '100%'
      },
      '::-webkit-media-controls-timeline': {
        display: 'none'
      }
    }
  }
}

export const AmplienceHeroComponentTitle = {
  variants: {
    homepage: (props: GlobalStyleProps): SystemStyleObject => {
      const { theme } = props

      return {
        color: 'white',
        fontWeight: 400,
        fontSize: 'xl',
        textAlign: 'center',
        fontFamily: 'fonts.mcm.boldExtended',
        textTransform: 'uppercase',
        mb: 4,
        [`@media screen and (min-width: ${theme.breakpoints.lg})`]: {
          fontSize: '2.25rem'
        }
      }
    }
  }
}
