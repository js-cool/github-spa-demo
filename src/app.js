import { app } from 'hyperapp';
import { location } from '@hyperapp/router';
import state from './state';
import actions from './actions';
import views from './views';

const main = app(state, actions, views, document.getElementById('app'));
location.subscribe(main.location);
