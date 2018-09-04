import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GetChats = gql`
  query {
    _
  }
`;

export default class ChatList extends React.Component {
  render() {
    return (
      <Query query={GetChats}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading!</Text>;
          if (error) return <Text>{error}</Text>;
          console.log(data);
          return <Text>data but which</Text>;
        }}
      </Query>
    );
  }
}
