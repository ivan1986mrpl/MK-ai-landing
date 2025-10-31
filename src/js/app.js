import ExpandableContentCollection from './modules/ExpandableContent.js';
import Header from './modules/Header.js';
import TabsCollection from './modules/Tabs.js';
import VideoPlayerCollection from './modules/VideoPlayer.js';
import InputMaskCollection from './modules/InputMask.js';
import SelectCollection from './modules/Select.js';
import defineScrollBarWidthCSSVar from './utils/defineScrollBarWidthCSSVar.js';

window.addEventListener('DOMContentLoaded', () => {
  new Header();
  new TabsCollection();
  new VideoPlayerCollection();
  new ExpandableContentCollection();
  new InputMaskCollection();
  new SelectCollection();
  defineScrollBarWidthCSSVar();
});
