import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
global.fetch = require("node-fetch");

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
});

const LOCATIONS = gql`
    query GetLocations($page: Int, $filter: FilterLocation) {
        locations(page: $page, filter: $filter) {
            results {
                id
                name
                type
                residents {
                    id
                    image
                }
            }
            info {
                next
            }
        }
    }
`;

const LOCATION = gql`
    query Location($id: ID!) {
        location(id: $id) {
            id
            name
            type
        }
    }
`;

const CHARACTERS = gql`
    query Location($id: ID!) {
        location(id: $id) {
            id
            name
            type
            residents {
                id
                name
                image
                location {
                    name
                }
                species
            }
        }
    }
`;

const CHARACTER = gql`
    query Character($id: ID!) {
        character(id: $id) {
            name
            species
            status
            image
            location {
                id
                name
            }
            origin {
                name
            }
        }
    }
`;

export { client, LOCATIONS, LOCATION, CHARACTERS, CHARACTER };
