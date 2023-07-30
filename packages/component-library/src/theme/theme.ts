const colors = {
  primary: 'hsl(212,76%,41%)',
  secondary: 'hsl(0, 0%, 28%)',
  warning: 'hsl(40,77%,42%)',
  success: 'hsl(128,75%,43%)',
  error: 'hsl(7,74%,45%)',
  info: 'hsl(211,76%,45%)',
  white: 'hsl(0,0%,100%)',
  black: 'hsl(0,0%,0%)',
}

const shades = {
  primary: {
    100: 'hsl(215,80%,90%)',
    200: 'hsl(212,70%,77%)',
    300: 'hsl(212,72%,66%)',
    400: 'hsl(212,74%,39%)',
    500: 'hsl(212,76%,41%)',
    600: 'hsl(212,80%,32%)',
    700: 'hsl(212,83%,25%)',
    800: 'hsl(212,92%,20%)',
    900: 'hsl(212,98%,15%)',
  },
  secondary: {
    100: 'hsl(214,36%,91%)',
    200: 'hsl(210,5%,60%)',
    300: 'hsl(210,6%,49%)',
    400: 'hsl(212,7%,41%)',
    500: 'hsl(210,11%,37%)',
    600: 'hsl(213,16%,22%)',
    700: 'hsl(213,29%,13%)',
    800: 'hsl(212,59%,9%)',
    900: 'hsl(210,72%,7%)',
  },
}

// .color-primary-0 { color: #2E4272 }
// .color-primary-1 { color: #031640 }
// .color-primary-2 { color: #0F2659 }
// .color-primary-3 { color: #58678B }
// .color-primary-4 { color: #8D94A4 }

/*
--- error
100
#FFCDD2
200
#EF9A9A
300
#E57373
400
#EF5350
500
#F44336
600
#E53935
700
#D32F2F
800
#C62828
900
#B71C1C

--- warning
100
#FFECB3
200
#FFE082
300
#FFD54F
400
#FFCA28
500
#FFC107
600
#FFB300
700
#FFA000
800
#FF8F00
900
#FF6F00

--- success
100
#C8E6C9
200
#A5D6A7
300
#81C784
400
#66BB6A
500
#4CAF50
600
#43A047
700
#388E3C
800
#2E7D32
900
#1B5E20

--- info



 */

const theme = {
  colors,
  button: {
    height: '50px',
    padding: '0 16px',
    borderRadius: '10px',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    primary: {
      color: colors.white,
      backgroundColor: colors.primary,
      border: `2px solid ${colors.primary}`,
    },
    secondary: {
      color: colors.white,
      backgroundColor: colors.secondary,
      border: `2px solid ${colors.secondary}`,
    },
    tertiary: {
      color: colors.primary,
      backgroundColor: colors.white,
      border: `2px solid ${colors.primary}`,
    },
    link: {
      color: colors.primary,
      backgroundColor: 'transparent',
      border: 'none',
    },
  },
  anchor: {
    color: colors.primary,
    fontWeight: 500,
    '&:visited': {
      color: colors.primary,
    },
  },
  h1: {
    fontSize: '60px',
    lineHeight: '90px',
    color: colors.primary,
  },
  h2: {
    fontSize: '50px',
    lineHeight: '75px',
    color: colors.primary,
  },
  h3: {
    fontSize: '40px',
    lineHeight: '60px',
    color: colors.primary,
  },
  h4: {
    fontSize: '32px',
    lineHeight: '48px',
    color: colors.primary,
  },
  h5: {
    fontSize: '24px',
    lineHeight: '36px',
    color: colors.primary,
  },
  h6: {
    fontSize: '16px',
    lineHeight: '24px',
    color: colors.secondary,
  },
  p: {
    fontSize: '16px',
    lineHeight: '24px',
    color: colors.black,
  },
  label: {
    fontSize: '16px',
    lineHeight: '24px',
    color: colors.primary,
  },
}

export default theme
