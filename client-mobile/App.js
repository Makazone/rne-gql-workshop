import React from "react";
import ApolloClient from "./ApolloClient";
import { ApolloProvider } from "react-apollo";
import ChatList from "./ChatList";

export default class App extends React.Component {
  render() {
    console.log(ApolloClient);
    return (
      <ApolloProvider client={ApolloClient}>
        <ChatList />
      </ApolloProvider>
    );
  }
}
