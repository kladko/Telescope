var thumbnailProperty = {
  propertyName: 'thumbnailUrl',
  propertySchema: {
    type: String,
    optional: true,
    label: 'thumbnail',
    autoform: {
      type: 'bootstrap-postthumbnail'
    }
  }
}
addToPostSchema.push(thumbnailProperty);

var mediaProperty = {
  propertyName: 'media',
  propertySchema: {
    type: Object,
    optional: true,
    blackbox: true,
    hidden: true,
    autoform: {
      omit: true
    }
  }
}
addToPostSchema.push(mediaProperty);


postModules.push({
  template: 'postThumbnail', 
  position: 'center-left'
});

var embedlyKeyProperty = {
  propertyName: 'embedlyKey',
  propertySchema: {
    type: String,
    defaultValue:'56a7bb803a3644c490eb0ec404f1d767',
    optional: true,
    autoform: {
      group: 'embedly'
    }
  }
}
addToSettingsSchema.push(embedlyKeyProperty);

var thumbnailWidthProperty = {
  propertyName: 'thumbnailWidth',
  propertySchema: {
    type: Number,
    optional: true,
    autoform: {
      group: 'embedly'
    }
  }
}
addToSettingsSchema.push(thumbnailWidthProperty);

var thumbnailHeightProperty = {
  propertyName: 'thumbnailHeight',
  propertySchema: {
    type: Number,
    optional: true,
    autoform: {
      group: 'embedly'
    }
  }
}
addToSettingsSchema.push(thumbnailHeightProperty);
