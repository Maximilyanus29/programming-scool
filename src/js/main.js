import '../scss/main.scss';
import '../index.html';
import '../about.html';

import mymodal from "./modules/mymodal";

import sliders from './modules/sliders';

document.addEventListener('DOMContentLoaded', () => {
    mymodal();
    sliders();
});