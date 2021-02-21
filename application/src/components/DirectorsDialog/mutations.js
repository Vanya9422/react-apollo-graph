import { gql } from 'apollo-boost';

export const deleteDirectorMutation = gql`
  mutation deleteDirector($id: ID) {
    deleteDirector(id: $id) {
      id
      name
    }
  }
`;

export const updateDirectorMutation = gql`
  mutation updateDirector($id: ID, $name: String!, $age: Int!) {
    updateDirector(id: $id, name: $name, age: $age) {
      name
      age
    }
  }
`;
