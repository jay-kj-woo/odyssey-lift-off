import { RESTDataSource } from '@apollo/datasource-rest';

class TrackAPI extends RESTDataSource {
  baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(authorId: string) {
    return this.get(`author/${authorId}`);
  }

  getTrack(trackId: string) {
    return this.get(`track/${trackId}`);
  }
  getTrackModule(trackId: string) {
    return this.get(`track/${trackId}/modules`);
  }
  getModule(moduleId: string) {
    return this.get(`module/${moduleId}`);
  }
}

export default TrackAPI;
