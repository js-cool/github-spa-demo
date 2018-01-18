import { h } from 'hyperapp';
import { Link } from '@hyperapp/router';

export default () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/404">404</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
  </ul>
);
