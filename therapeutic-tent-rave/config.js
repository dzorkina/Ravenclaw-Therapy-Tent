'use strict';

window.TENT_CONFIG = {
  // Положи карты в images и назови 01.png, 02.png, ... 88.png.
  // Поддерживаются также WebP, JPG и JPEG; форматы можно смешивать.
  cardCount: 88,
  folder: 'images',
  extensions: ['png', 'webp', 'jpg', 'jpeg'],

  // Если хочешь сохранить произвольные имена, перечисли их здесь.
  // Например: files: ['орёл.png', 'ворон.webp', 'my-card.jpg']
  // Тогда cardCount и extensions не используются.
  files: [],
};
