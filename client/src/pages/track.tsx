import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { gql } from '../__generated__';
import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';

const TRACK = gql(`
    query GetTrack($trackId:ID!) {
        track(id:$trackId) {
            id
            title
            thumbnail
            length
            modulesCount
            author {
              id
              name
              photo
            }
            numberOfViews
            description
            modules {
                id
                title
                length
            }

        }
    }
`);

export const Track = () => {
  const { trackId } = useParams();
  if (!trackId) return null;
  const { loading, error, data } = useQuery(TRACK, { variables: { trackId } });
  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};
