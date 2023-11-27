import { GlobalStyleProps, SystemStyleObject } from '@chakra-ui/theme-tools'

import { CardsDataContainerType } from '../../../../../components/content-item/library-amplience'

export const AmplienceCardsComponentContainer = {
  baseStyle: (props: GlobalStyleProps): SystemStyleObject => {
    const { theme } = props

    return {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      '&.more-than-three-cards': {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0px, 1fr))',
        [`@media screen and (min-width: ${theme.breakpoints.lg})`]: {
          gridTemplateColumns: 'repeat(3, minmax(0px, 1fr))'
        }
      }
    }
  },
  sizes: {
    largeColumn: (props: GlobalStyleProps): SystemStyleObject => {
      const { theme } = props

      return {
        gap: '1.5rem',
        margin: '2rem 0',
        padding: '0 1.25rem',
        flexDirection: 'column',
        [`@media screen and (min-width: ${theme.breakpoints.lg})`]: {
          padding: 0,
          flexDirection: 'row'
        }
      }
    },
    largeRow: (props: GlobalStyleProps): SystemStyleObject => {
      const { theme } = props

      return {
        gap: '1.5rem',
        margin: '3.5rem 0',
        padding: '0 1.5rem',
        flexDirection: 'column',
        [`@media screen and (min-width: ${theme.breakpoints.lg})`]: {
          flexDirection: 'row'
        }
      }
    }
  },
  variants: {
    [CardsDataContainerType.CardHero]: {
      '@media screen and (min-width: 100em)': {
        px: 0
      }
    },
    [CardsDataContainerType.CardBasic]: (props: GlobalStyleProps): SystemStyleObject => {
      const { theme } = props

      return {
        display: 'grid',
        gap: 10,
        gridTemplateColumns: 'repeat(1, minmax(0px, 1fr))',
        my: 6,
        padding: '0 1.5rem',
        overflow: 'hidden',
        [`@media screen and (min-width: ${theme.breakpoints.md})`]: {
          gridTemplateColumns: 'repeat(2, minmax(0px, 1fr))'
        },
        '@media screen and (min-width: 100em)': {
          px: 0
        }
      }
    },
    [CardsDataContainerType.CardLinks]: (props: GlobalStyleProps): SystemStyleObject => {
      const { theme } = props

      return {
        overflowX: 'auto',
        flexDirection: 'row',
        p: 6,
        m: 0,
        bg: 'neutral.10',
        gap: 2,
        borderBottom: '1px solid black',
        [`@media screen and (min-width: ${theme.breakpoints.md})`]: {
          display: 'grid',
          maxW: '100%',
          gridTemplateColumns: 'repeat(2, minmax(120px, 1fr))'
        },
        [`@media screen and (min-width: ${theme.breakpoints.lg})`]: {
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr)) !important'
        }
      }
    },
    [CardsDataContainerType.CardServices]: {
      display: 'flex',
      alignItems: 'center',
      bg: 'neutral.10',
      minH: '20.5rem',
      px: 5,
      py: 8,
      m: 0,
      '.chakra-stack': {
        justifyContent: 'center',
        maxW: '75rem',
        mx: 'auto'
      }
    }
  }
}

export const AmplienceBasicCardsComponentContainer = {
  baseStyle: {
    display: 'grid',
    gap: 6,
    gridTemplateColumns: 'repeat(1, minmax(0px, 1fr))',
    my: 14,
    padding: '0 1.5rem',
    overflow: 'hidden',
    '&.has-one-card': {
      gridTemplateColumns: 'repeat(1, minmax(0px, 1fr))',
      '.chakra-link': {
        maxW: '41.5rem',
        mx: 'auto'
      }
    }
  },
  sizes: {},
  variants: {
    homepage: (props: GlobalStyleProps): SystemStyleObject => {
      const { theme } = props

      return {
        overflow: 'unset',
        [`@media screen and (min-width: ${theme.breakpoints.md})`]: {
          gridTemplateColumns: 'repeat(2, minmax(0px, 1fr))'
        },
        '@media screen and (min-width: 100em)': {
          px: 0
        }
      }
    },
    menu: (props: GlobalStyleProps): SystemStyleObject => {
      const { theme } = props

      return {
        gap: 6,
        gridTemplateColumns: 'repeat(2, minmax(0px, 1fr))',
        m: 0,
        h5: {
          fontSize: 'sm',
          lineHeight: 5,
          textTransform: 'uppercase'
        },
        [`@media screen and (min-width: ${theme.breakpoints.lg})`]: {
          gap: 7,
          gridTemplateColumns: 'repeat(1, minmax(0px, 1fr))'
        }
      }
    }
  }
}

export const AmplienceBasicCardComponentMainContainer = {
  baseStyle: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    w: 'full',
    h: 'full',
    cursor: 'pointer',
    '.image-loader-container': {
      h: '100%'
    },
    '.image-with-loader-image': {
      objectFit: 'cover',
      w: 'full',
      h: 'full',
      maxH: '41.5rem'
    }
  },
  sizes: {},
  variants: {
    homepage: {
      '.image-with-loader-image': {
        borderRadius: 8
      },
      '.content-wrapper': {
        transition: 'transform 0.4s ease',
        h: 'full'
      },
      _hover: {
        boxShadow: '0 0.125rem 0.5rem 0 #00000033',
        borderRadius: 8,
        '.content-wrapper': {
          transform: 'scale(0.95)'
        }
      }
    },
    menu: (props: GlobalStyleProps): SystemStyleObject => {
      const { theme } = props

      return {
        '.image-loader-container': {
          h: '70%'
        },
        [`@media screen and (min-width: ${theme.breakpoints.lg})`]: {
          h: 'auto'
        }
      }
    }
  }
}

export const AmplienceSkeleton = {
  baseStyle: {
    w: 'full',
    h: 96
  }
}
