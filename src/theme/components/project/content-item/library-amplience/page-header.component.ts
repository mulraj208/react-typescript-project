export const AmpliencePageHeader = {
  parts: ['container', 'video', 'image', 'contentContainer', 'title', 'description', 'ctaButton'],
  baseStyle: {
    container: {
      textAlign: 'center'
    },
    video: {
      mb: 6
    },
    image: {
      mb: 6,
      '.image-with-loader-image': {
        maxHeight: '22.5rem',
        width: 'full',
        objectFit: 'cover'
      }
    },
    contentContainer: {
      maxW: '34rem',
      mx: 'auto',
      px: 5
    },
    title: {
      fontSize: '2xl',
      lineHeight: 7,
      letterSpacing: '-0.031rem',
      textTransform: 'uppercase',
      mb: 4
    },
    description: {
      fontSize: 'sm',
      fontWeight: 500,
      lineHeight: 6,
      mb: 4
    },
    ctaButton: {
      textTransform: 'capitalize'
    }
  }
}
