/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-properties */
/* eslint-disable import/extensions */
/* eslint-disable import/no-absolute-path */
/* eslint-disable-next-line import/no-unresolved */
import Point from '/classes/point.js';

export function getMouseCoordsOnCanvas(e, canvas) {
  const rect = canvas.getBoundingClientRect();
  const x = Math.round(e.clientX - rect.left);
  const y = Math.round(e.clientY - rect.top);
  return new Point(x, y); // (x:x, y:y) previously
}

// This will find the distance for the drawing of the circle in the canvas
export function findDistance(point1, point2) { // coord1 ==> start, coord2 ==> finish,
  const exp1 = Math.pow(point2.x - point1.x, 2);
  const exp2 = Math.pow(point2.y - point1.y, 2);

  const distance = Math.sqrt(exp1 + exp2);

  return distance;
}

export function dragifyImage(imgElem) {
  imgElem.classList.add('selected-area-img');
  imgElem.draggable = true;
  imgElem.oncontextmenu = (ev) => {
    ev.preventDefault();
    console.log('I right clicked');
  };
  imgElem.ondragstart = (ev) => ev.dataTransfer.setDragImage(ev.target, 10, 10);
  document.getElementsByTagName('BODY')[0].appendChild(imgElem);
}

export function getImgElemFromImgData(imgData) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = imgData.width;
  canvas.height = imgData.height;
  ctx.putImageData(imgData, 0, 0);
  const imgElem = document.createElement('img');
  imgElem.src = canvas.toDataURL();
  return imgElem;
}

export function getImgDataFromImgElem(imgElem) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = imgElem.width;
  canvas.height = imgElem.height;
  context.drawImage(imgElem, 0, 0);
  return context.getImageData(0, 0, imgElem.width, imgElem.height);
}
