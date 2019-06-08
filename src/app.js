import '@webcomponents/webcomponentsjs';

import { BufferQueue } from './models/queue';
import { GameChart } from './views/chart';
import { tick } from './tick';
import { random } from './utils';

const initialBufferSize = 15;

window.customElements.define('game-chart', GameChart);

const chartDOM = document.querySelector('game-chart');
// hint: you can set the values/color/displayStyle to GameChart just like below
chartDOM.values = [1, 3, 3, 7];

const queue = new BufferQueue(initialBufferSize);

document.querySelector('#change_button').addEventListener('click', () => {
  const color = document.querySelector('#color').value;
  const bufferSize = document.querySelector('#buffer_size').value;
  document.querySelector('input[name="display_style"]').forEach(dom =>{
    if(dom.checked){
      const value = dom.value;
      chartDOM.displayStyle = value;
    }
  });
  chartDOM.color = color;
  queue.setSize(bufferSize);
});

tick(function() {
  const r = random();
  queue.push(r);
  chartDOM.values = queue.get();
});
