const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.color = "red";
container.appendChild(para);

const title = document.createElement('h3');
title.textContent = "I'm a blue h3";
title.style.color = "blue";
container.appendChild(title);

const box = document.createElement('div');
box.style.cssText = 'width: 200px; height: 200px; border-style: solid; border-color: black; border-width: 2px; background: pink;';

const boxTitle = document.createElement('h1');
boxTitle.textContent = "I'm in a div";
const boxPara = document.createElement('p');
boxPara.textContent = "ME TOO!";

box.appendChild(boxTitle);
box.appendChild(boxPara);

container.appendChild(box);
