module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    // Watch scss for changes
    // Run SASS task to compile main.css from main.scss
    watch: {
      css: {
        files: 'client/**/*.scss',
        tasks: ['sass']
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'client/styles/main.css': 'client/styles/main.scss'
        }
      }
    },

    // browserSync task to setup static server for development enviroment
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'client/**/*.css',
            'client/**/*.html'
          ]
        },
        options: {
          watchTask: true,
          proxy: 'localhost:9000/'
        }
      },
      dist: {
        bsFiles: {
          src: [
            'dist/*.html'
          ]
        },
        options: {
          server: {
            baseDir: "./dist"
          }
        }
      }
    },

    copy: {
      deps: {
        files: [{
          expand: true,
          cwd: './lib',
          src: '**',
          dest: 'client/lib'
        }]
      },
      dist: {
        files: [{
          src: 'client/index.html',
          dest: 'dist/index.html'
        }, {
          src: 'client/styles/main.css',
          dest: 'dist/styles/main.css'
        }, {
          src: 'client/styles/main.css.map',
          dest: 'dist/styles/main.css.map'
        }, {
          expand: true,
          cwd: './lib',
          src: '**',
          dest: 'dist/lib'
        }]
      },
      temp: {
        files: [{
          src: '.tmp/concat/app/main.js',
          dest: 'dist/app/main.js'
        }],
      }
    },

    'useminPrepare': {
      options: {
        dest: 'dist'
      },
      html: 'client/index.html'
    },

    usemin: {
      html: ['dist/index.html']
    },

    bower: {
      install: {
        copy: false,
        targetDir: './lib',
        layout: 'byType',
        install: true,
        verbose: false,
        prune: false,
        cleanTargetDir: false,
        cleanBowerDir: false,
        bowerOptions: {}
      }
    },

    bower_concat: {
      options: {
        compress: true
      },
      all: {
        dest: 'dist/js/libs.js'
      }
    },

    ngtemplates: {
      app: {
        cwd: 'client/app',
        src: '**/*.html',
        dest: 'client/app/app.templates.js',
        options: {
          prefix: 'app/'
        }
      }
    },

    ngAnnotate: {
      options: {
        add: true
      },
      app: {
        files: {
          src: 'dist/app/main.js'
        }
      }
    },

    clean: {
      all: ['dist', '.tmp', './lib'],
      temp: ['.tmp', './lib'],
      dev: ['.client/app/*.templates.js']
    },

   nodemon: {
      dev: {
        script: 'server/server.js',
        options: {
          env: {
            NAME: 'dev',
            PORT: '9000'
          }
        }
      }
    }

  });

  grunt.registerTask('default', [
    'build'
  ]);

  grunt.registerTask('serve', [
    'clean:dev',
    'bower',
    'sass',
    'copy:deps',
    'clean:temp',
    'nodemon'
  ]);

  grunt.registerTask('sync', [
    'browserSync:dev',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean:all',
    'bower',
    'sass',
    'ngtemplates',
    'useminPrepare',
    'copy',
    'concat',
    'uglify',
    'usemin',
    'clean:temp'
  ]);

};
