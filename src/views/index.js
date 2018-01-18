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
      <Route path="/github-spa-demo/" render={Home} />
      <Route path="/github-spa-demo/about" render={About} />
      <Route parent path="/github-spa-demo/topics" render={TopicsView} />
      <Route render={NoMatch} />
    </Switch>
    <hr />
    <footer>
      返回： <a href="https://leader.js.cool/#/basic/knowledge/github-pages-spa-router" target="_blank">leader.js.cool</a> 文章
    </footer>
  </div>
);
