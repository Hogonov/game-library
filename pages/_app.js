import '../styles/globals.css';
import { wrapper } from '../modules/GameList/index';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
