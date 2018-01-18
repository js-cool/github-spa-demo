import { h } from 'hyperapp';

export default ({ match }) => <h3>{match.params.topicId}</h3>;
