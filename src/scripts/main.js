'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const note = document.createElement('div');

  note.classList.add('notification');

  if (['success', 'error', 'warning'].includes(type)) {
    note.classList.add(type);
  }

  const topPx = `${Number(posTop) || 0}px`;
  const rightPx = `${Number(posRight) || 0}px`;

  // ВАЖЛИВО: все в один рядок, як очікує тест
  // eslint-disable-next-line prettier/prettier
  note.setAttribute('style', `position: fixed; top: ${topPx}; right: ${rightPx};`);

  const h2 = document.createElement('h2');

  h2.classList.add('title');
  h2.textContent = String(title ?? '');

  const p = document.createElement('p');

  p.textContent = String(description ?? '');

  note.append(h2, p);
  document.body.appendChild(note);

  setTimeout(() => {
    note.style.visibility = 'hidden';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
