export const paddingX = {
  paddingLeft: '40px',
  paddingRight: '40px'
};

export const paddingY = {
  paddingTop: '22px',
  paddingBottom: '22px'
};

export const paragraph = {
  margin: '0',
  lineHeight: '2'
};

export const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY
  },
  paragraphWithBold: { ...paragraph, fontWeight: 'bold' },
  heading: {
    fontSize: '32px',
    lineHeight: '1.3',
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: '-1px'
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: '#747474',
    fontWeight: '500'
  },
  button: {
    border: '1px solid #929292',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '10px 0px',
    width: '220px',
    display: 'block',
    textAlign: 'center',
    fontWeight: 500,
    color: '#000'
  } as React.CSSProperties,
  hr: {
    borderColor: '#E5E5E5',
    margin: '0'
  }
};

export const main = {
  backgroundColor: '#eaeaec',
  padding: '16px 0',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};

export const container = {
  margin: '10px auto',
  width: '600px',
  border: '1px solid #E5E5E5',
  padding: '16px',
  backgroundColor: '#ffffff'
};

export const top = {
  container: {
    padding: '32px 0px',
    backgroundColor: '#000'
  },
  coloredLine: {
    height: '8px'
  }
};

export const message = {
  padding: '40px 74px',
  textAlign: 'center'
} as React.CSSProperties;

export const adressTitle = {
  ...paragraph,
  fontSize: '15px',
  fontWeight: 'bold'
};

export const footer = {
  policy: {
    width: '166px',
    margin: 'auto'
  },
  text: {
    margin: '0',
    color: '#AFAFAF',
    fontSize: '13px',
    textAlign: 'center'
  } as React.CSSProperties
};

export const html = {
  backgroundColor: '#ffffff'
};
