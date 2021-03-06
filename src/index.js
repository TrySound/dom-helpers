'use strict';
import style from './style'
import events from './events'
import query from './query'
import activeElement from './activeElement'
import ownerDocument from './ownerDocument'
import ownerWindow from './ownerWindow'
import requestAnimationFrame from './util/requestAnimationFrame';

export {
  style,
  events,
  query,
  activeElement,
  ownerDocument,
  ownerWindow,
  requestAnimationFrame,
}

export default {
  ...events,
  ...query,
  style,
  activeElement,
  ownerDocument,
  ownerWindow,
  requestAnimationFrame,
}
