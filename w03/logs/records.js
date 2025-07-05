var records = {
  info:function(name, age, section){
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Section: " + section);
  },
  warning: function (message) {
    console.log('Warn: ' + message);
  },
  error: function (message) {
    console.log('Error: ' + message);
  },
};

module.exports = records;