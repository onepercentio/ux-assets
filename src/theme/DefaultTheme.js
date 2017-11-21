const core = {
  white: '#fff',

  black: '#282828',
  black_1: '#3c3c3c',

  gray: '#757575',
  gray_1: '#8e8e8e',  
  gray_2: '#cacccd',
  gray_3: '#f2f2f2',

  primary: '#051f31',
  secondary: '#ff00d2',
  thirdy: '#343493',

  yellow: '#ffce71',
  yellow_1: '#ffe8bc',

  red: '#E94E3D',
};

export default {
  aeroPay: {

    zIndex: 0,

    border: {
      input: {
        borderTop: 0,
        borderRight: 0,
        borderLeft: 0,
        borderBottom: '2px solid transparent',
      },
      inputFocused: {
        borderTop: 0,
        borderRight: 0,
        borderLeft: 0,
        borderBottom: `2px solid ${core.thirdy}`,        
      },
    },

    color: {
      core,

      disabled: core.gray_3,

      background: core.primary,
      backgroundCounter: core.white,

      text: core.white,
      textCounter: core.black,
      textFocused: core.secondary,

      placeholder: core.gray,
    },

    spacing: {
      captionPaddingTop: 22,
      captionPaddingBottom: 37,
      inputPadding: 0,
      inputMarginBottom: 72, // spacing in between the input and the picker
      displayTextPaddingVertical: 12,
      displayTextPaddingHorizontal: 12,
    },

    sizing: {
      inputWidth: 130,
    },

    font: {
      caption: {
        size: '1.5rem',
      },
      input: {
        size: '1.5rem',
        lineHeight: '2rem',
      },
    },
  },
};
