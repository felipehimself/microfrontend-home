import { makeStyles, typographyStyles } from '@fluentui/react-components';

export const usePageStyles = makeStyles({
  div: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    // alignItems: 'center',
    // justifyContent: 'center',
    height: '100vh',
    padding: '2rem',

    '& ul': {
      marginLeft: '1rem',
    },
  },

  href: {},

  text: typographyStyles.body2,
});
