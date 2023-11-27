const mdSize = { height: 11, h: 11, borderRadius: 'base' }

export default {
  sizes: {
    md: {
      field: mdSize
    }
  },
  variants: {
    white: {
      field: {
        borderColor: '#8A8D96 !important',
        border: '0.075rem solid',
        backgroundColor: 'white !important',

        _focus: {
          borderColor: 'gold.100',
          boxShadow: 'none'
        },
        _filled: {
          borderColor: 'neutral.80'
        },
        _hover: {
          borderColor: 'none'
        }
      }
    },
    outline: {
      field: {
        borderColor: 'neutral.80',
        border: '0.075rem solid',
        _focus: {
          borderColor: 'gold.100',
          boxShadow: 'none'
        },
        _filled: {
          borderColor: 'gold.100'
        },
        _hover: {
          borderColor: 'none'
        },
        _disabled: {
          cursor: 'not-allowed',
          border: 'none',
          backgroundColor: 'neutral.10'
        },
        _invalid: {
          borderColor: 'system_redish.100',
          boxShadow: 'none'
        }
      }
    }
  }
}
