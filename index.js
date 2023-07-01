'use strict';

const inputValue = document.querySelector('.inputValue');
const submitEl = document.getElementById('submit');
const itemListEl = document.querySelector('.list__value');

submitEl.addEventListener('click', () => {
  if (!inputValue.value) {
    alert('Please input a task');
  } else {
    itemListEl.innerHTML += `<div class="item">
          <p class="list__value_item">${inputValue.value}</p>
          <button class="delete">DELETE</button>
        </div>`;
    const current_tasks = document.querySelectorAll('.delete');
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    inputValue.value = '';
  }
});
