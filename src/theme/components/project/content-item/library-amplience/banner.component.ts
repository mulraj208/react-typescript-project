const defaultColor = 'blackProject.100'

export const AmplienceBannerComponentButton = {
  variants: {
    homepage: {
      color: defaultColor,
      fontSize: '1rem',
      fontWeight: 571,
      textDecoration: 'underline'
    }
  }
}

export const AmplienceBannerComponentDescription = {
  variants: {
    homepage: {
      color: defaultColor,
      fontSize: '0.75rem',
      fontWeight: 400,
      fontFamily: 'fonts.mcm.regular'
    }
  }
}

export const AmplienceBannerComponentInnerContainer = {
  baseStyle: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    px: 5
  },
  sizes: {
    homepage: {
      gap: '1.5rem',
      width: '100%'
    }
  },
  variants: {
    centered: {
      justifyContent: 'center'
    },
    spaceAround: {
      justifyContent: 'space-around'
    }
  }
}

export const AmplienceBannerComponentLeftSideContainer = {
  baseStyle: {
    display: 'flex'
  },
  variants: {
    column: {
      alignItems: 'left',
      flexDirection: 'column'
    },
    row: {
      alignItems: 'center',
      flexDirection: 'row',
      gap: '1.5rem'
    }
  }
}

export const AmplienceBannerComponentOuterContainer = {
  baseStyle: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  sizes: {
    homepageLarge: {
      height: '6.25rem'
    },
    homepageSmall: {
      height: '5.75rem'
    }
  },
  variants: {
    homepage: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      gap: '1.5rem',
      justifyContent: 'center',
      width: '100%'
    }
  }
}

export const AmplienceBannerComponentTitle = {
  variants: {
    homepage: {
      color: defaultColor,
      fontSize: '1.25rem',
      fontWeight: 400,
      fontFamily: 'fonts.mcm.regular'
    }
  }
}
