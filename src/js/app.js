import Header from './modules/Header.js';
import TabsCollection from './modules/Tabs.js';
import VideoPlayerCollection from './modules/VideoPlayer.js';

window.addEventListener('DOMContentLoaded', () => {
  new Header();
  new TabsCollection();
  new VideoPlayerCollection();
});
