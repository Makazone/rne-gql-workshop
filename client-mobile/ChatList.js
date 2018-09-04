import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Query, Mutation, Subscription } from "react-apollo";
import gql from "graphql-tag";

const GetChats = gql`
  query {
    getChats {
      id
    }
  }
`;

const CreateMessage = gql`
  mutation {
    postMessage(body: "another massage", chatId: "cjlnt0fj95s8y0b72z7isx34l") {
      id
    }
  }
`;

export default class ChatList extends React.Component {
  render() {
    return (
      <Query query={GetChats}>
        {({ loading, error, data, refetch }) => {
          if (loading) return <Text>Loading!</Text>;
          if (error) return <Text>{error}</Text>;

          return (
            <View>
              {chats.map(chat => {
                const { id } = chat;
                return <Text key={id}>{id}</Text>;
              })}
            </View>
          );
        }}
      </Query>
    );
  }
}
