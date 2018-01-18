import { h } from 'hyperapp';
import { Link } from '@hyperapp/router';

export default () => (
  <ul>
    <li>
      <Link to="/github-spa-demo/">Home</Link>
    </li>
    <li>
      <Link to="/github-spa-demo/about">About</Link>
    </li>
    <li>
      <Link to="/github-spa-demo/404">404</Link>
    </li>
    <li>
      <Link to="/github-spa-demo/topics">Topics</Link>
    </li>
  </ul>
);
