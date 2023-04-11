import { AppProps } from 'next/app';
import { Amplify } from "aws-amplify";
import '@aws-amplify/ui-react/styles.css'

import '../styles/global.css';

const awsExports = require('../aws-exports').default

Amplify.configure({ ...awsExports, ssr: true });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
