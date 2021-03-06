Template[getTemplate('user_email')].helpers({
  user: function(){
    return Meteor.user();
  },
  username: function () {
    return getUserName(Meteor.user());
  }
});

Template[getTemplate('user_email')].events({
  'submit form': function(e){
    e.preventDefault();
    if(!Meteor.user()) throwError(i18n.t('you_must_be_logged_in'));
    var $target=$(e.target);
    var user=Session.get('selectedUserId')? Meteor.users.findOne(Session.get('selectedUserId')) : Meteor.user();
    var uName = Random.id(8).toLowerCase();
    var update = {
      "profile.email": $target.find('[name=email]').val(),
      "profile.city": $target.find('[name=city]').val(),
      "profile.gender": user.services.facebook.gender,
      "profile.link": user.services.facebook.link,
      "profile.availability": "May be accepting guests",
      "username": uName,
        "slug": uName 
    };

    // TODO: enable change email
    var email = $target.find('[name=email]').val();
    
    Meteor.users.update(user._id, {
      $set: update
    }, function(error){
      if(error){
        throwError(error.reason);
      } else {
        throwError(i18n.t('thanks_for_signing_up'));
        // Meteor.call('addCurrentUserToMailChimpList');
        trackEvent("new sign-up", {'userId': user._id, 'auth':'twitter'});
        Router.go('/');
      }
    });
  }

});
