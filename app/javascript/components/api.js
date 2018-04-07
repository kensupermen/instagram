const prefixURL = '/api/v1/';

class Api {
  constructor() {
  }

  static createComment(postId) {
    return prefixURL + 'posts/' + postId + '/comments/create';
  }

  static getPost(postId){
    return prefixURL + 'posts/' + postId;
  }

  static like(postId) {
    return prefixURL + 'posts/' + postId + '/like';
  }

  static getPosts() {
    return prefixURL + 'posts';
  }

  static getUser(userId) {
    return prefixURL + 'users/' + userId;
  }
}

export default Api;
