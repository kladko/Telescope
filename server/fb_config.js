// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "facebook"
});
ServiceConfiguration.configurations.insert({
  service: "facebook",
  appId: "696039293828437",
  secret: "05b3ad8d25be612d73734425b7dc085e"
});

