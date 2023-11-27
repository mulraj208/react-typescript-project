import { GlobalStyleProps, SystemStyleObject } from '@chakra-ui/theme-tools'

import { CardsDataContainerType } from '../../../../../components/content-item/library-amplience'

export const AmplienceHeroCardComponentButtonsContainer = {
  baseStyle: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  sizes: {
    homepage: {
      gap: '1rem'
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

export const AmplienceHeroCardComponentContentContainer = {
  baseStyle: {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    p: 4,
    gap: '1rem',
    height: '100%',
    width: '100%',
    bg: 'rgb(34 34 34 / 20%)'
  },
  variants: {
    homepage: {}
  }
}

export const AmplienceHeroCardComponentMainContainer = {
  baseStyle: {
    display: 'flex',
    position: 'relative',
    w: 'full',
    h: 'full'
  },
  sizes: {
    homepageLarge: {},
    homepageSmall: {}
  },
  variants: {}
}

export const AmplienceHeroCardComponentMediaAsset = {
  baseStyle: {
    position: 'relative',
    w: 'full',
    pt: '100%',
    overflow: 'hidden',
    '.image-with-loader-image': {
      w: 'full',
      h: 'full',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      objectFit: 'cover'
    }
  },
  sizes: {
    homepageLarge: {},
    homepageSmall: {}
  }
}

export const AmplienceHeroCardComponentTitle = {
  baseStyle: {
    color: 'white',
    fontSize: '2.25rem',
    fontWeight: 400,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'fonts.mcm.boldExtended'
  },
  variants: {
    [CardsDataContainerType.CardBasic]: {
      color: 'blackProject.100',
      fontSize: 'xs',
      lineHeight: 4,
      mb: 2,
      mt: 3,
      letterSpacing: '0.008rem',
      fontWeight: 700,
      textAlign: 'left',
      textTransform: 'capitalize'
    },
    [CardsDataContainerType.CardServices]: {
      fontSize: 'md',
      fontWeight: 700,
      lineHeight: 5,
      letterSpacing: '0.01em',
      textTransform: 'uppercase',
      color: 'blackProject.100',
      mb: 4
    },
    [CardsDataContainerType.CardHero]: (props: GlobalStyleProps): SystemStyleObject => {
      const { theme } = props

      return {
        fontSize: '1.75rem',
        [`@media screen and (min-width: ${theme.breakpoints.lg})`]: {
          fontSize: '2.25rem'
        }
      }
    }
  }
}

export const AmplienceHeroCardComponentDescription = {
  baseStyle: {
    fontSize: 'xl',
    lineHeight: 7
  },
  variants: {
    [CardsDataContainerType.CardBasic]: {
      textTransform: 'uppercase'
    },
    [CardsDataContainerType.CardServices]: {
      fontSize: 'sm',
      lineHeight: 6,
      color: 'blackProject.100',
      mb: 4
    }
  }
}

export const AmplienceLinksCardComponentMainContainer = {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    w: 'full',
    border: 'none',
    minWidth: '8.125rem',
    position: 'relative',
    '.chakra-link': {
      w: 'full',
      h: 'full',
      borderRadius: 4,
      justifyContent: 'center',
      py: 4,
      px: 3,
      border: '0.063rem solid',
      borderColor: 'neutral.30',
      _hover: {
        boxShadow: '0 0.125rem 0.5rem 0 #00000033',
        color: 'blackProject.100'
      },
      _active: {
        borderColor: 'gold.130',
        color: 'gold.130'
      },
      _focus: {
        outline: '0.125rem solid',
        outlineColor: 'MCM.100'
      }
    }
  },
  sizes: {
    homepageLarge: {
      minH: '5.625rem'
    },
    homepageSmall: {
      minH: '4.813rem'
    }
  },
  variants: {
    [CardsDataContainerType.CardServices]: (props: GlobalStyleProps): SystemStyleObject => {
      const { theme } = props

      return {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        bg: 'white',
        border: 16,
        p: 5,
        textAlign: 'center',
        borderRadius: 16,
        w: { base: 'full', xl: '16.75rem' },
        '.image-with-loader-image': {
          objectFit: 'cover',
          w: 6,
          h: 6,
          mb: 4
        },
        [`@media screen and (min-width: ${theme.breakpoints.lg})`]: {
          minH: '13.563rem'
        }
      }
    }
  }
}
