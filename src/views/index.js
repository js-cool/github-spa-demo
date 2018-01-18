import { h } from 'hyperapp';
import { Route, Switch } from '@hyperapp/router';
import Home from './home';
import About from './about';
import TopicsView from './topics';
import Navigator from '../component/navigator';
import NoMatch from './404';

export default () => (
  <div>
    <Navigator />
    <hr />
    <Switch>
      <Route path="/" render={Home} />
      <Route path="/about" render={About} />
      <Route parent path="/topics" render={TopicsView} />
      <Route render={NoMatch} />
    </Switch>
  </div>
);
