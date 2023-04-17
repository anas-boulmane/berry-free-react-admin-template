export default {
  title: 'User',
  version: 0,
  primaryKey: 'uid',
  type: 'object',
  properties: {
    uid: {
      type: 'string',
      maxLength: 200
    },
    displayName: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    photoURL: {
      type: 'string'
    },
    isCurrentUser: {
      type: 'boolean',
      default: false
    }
  },
  required: ['uid', 'displayName', 'email', 'photoURL']
};
