// Fixture data

if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two new users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman'}
  });

  var jeffId = Meteor.users.insert({
    profile: { name: 'Jeff Doge' }
  });

  var tom = Meteor.users.findOne(tomId);
  var jeff = Meteor.users.findOne(jeffId);

  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: jeff._id,
    author: jeff.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: new Date(now - 7 * 3600 * 1000)
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project!'
  });

  Comments.insert({
    postId: telescopeId,
    userId: jeff._id,
    author: jeff.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'Thanks bro!'
  });

  // Posts.insert({
  //   title: 'Meteor',
  //   userId: tom._id,
  //   author: tom.profile.name,
  //   url: 'http://meteor.com',
  //   submitted: new Date(now - 10 * 3600 * 1000)
  // });

  // Posts.insert({
  //     title: 'The Meteor Book',
  //     userId: tom._id,
  //     author: tom.profile.name,
  //     url: 'http://themeteorbook.com',
  //     submitted: new Date(now - 12 * 3600 * 1000)
  //   });
}