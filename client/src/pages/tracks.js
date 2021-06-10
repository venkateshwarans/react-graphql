import React from 'react';
import { useQuery, gql } from '@apollo/client';


export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;


const Tracks = () => {

  const { loading, error, data } = useQuery(TRACKS);
    return (
      <ul>
        {data?.tracksForHome?.map((track, index)  => (
          <li key={track.id}>{track.title}</li>
        ))}
      </ul>
    )
}

export default Tracks;
