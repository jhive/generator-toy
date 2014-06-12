'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('underscore');


var ToyGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Toy generator.'));

    var prompts = [{
      name: 'title',
      message: 'What do you want to call your toy?'
    }];

    this.prompt(prompts, function (props) {
      this.title = props.title;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('src');
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_gruntfile.js', 'gruntfile.js');
    this.copy('_jshintrc', '.jshintrc');
    this.copy('_bowerrc', '.bowerrc');

    this.copy('_empty.file', 'src/' + this.title + '.js');
    this.template('_test.spec.js', 'src/' + this.title + '.spec.js');
  }
});

module.exports = ToyGenerator;