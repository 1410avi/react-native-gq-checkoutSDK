import React from 'react';
import { WebView } from 'react-native-webview';

const MyWebView: React.FC = () => {
  return <WebView source={{ uri: "https://grayquest.com" }} />;
};

export default MyWebView;

