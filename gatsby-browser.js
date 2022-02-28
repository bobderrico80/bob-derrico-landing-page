import '@fontsource/oxygen-mono';
const sprite = require('!!raw-loader!./src/images/svg-sprites.svg').default;

const wrapper = document.createElement('div');
wrapper.innerHTML = sprite;
wrapper.style.display = 'none';

document.querySelector('body').prepend(wrapper);
