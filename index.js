import React from 'react';
import {render} from 'react-dom';
import Media from './src/playlist/components/media';

console.log('hol');
const app = document.getElementById('app');

render(<Media
        type='video' 
        image="./images/covers/responsive.jpg" 
        title='¿Que es responsive Desing?' 
        author='Danny Rivadeneira'/>,
        
        app);