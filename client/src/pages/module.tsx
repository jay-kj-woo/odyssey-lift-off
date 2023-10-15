import { useParams } from 'react-router-dom';
import { gql } from '../__generated__';
import { useQuery } from '@apollo/client';
import { Layout, ModuleDetail, QueryResult } from '../components';

const GET_MODULE_AND_PARENT_TRACK = gql(`
query GetModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      videoUrl
      content
      title
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`);

export const Module = () => {
  const { moduleId = '', trackId = '' } = useParams();
  const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
    variables: { moduleId, trackId },
  });

  return (
    <Layout fullWidth={true}>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail module={data?.module} track={data?.track} />
      </QueryResult>
    </Layout>
  );
};
