## Intro

Project Lighthouse for RBS

## Getting started - Running Locally

    git clone git@github.ibm.com:rbs-lighthouse/lighthouse-app.git
    npm install
    bower install
    grunt
    npm start (start local server)

## TODO's

    Create unit tests for angular components

    Create Grunt task to serve client folder for testing

    Create Grunt task to serve static dist content

## Grunt Tasks

Currently Grunt compiles a dist folder for the application code. It concats and minifies the anuglar application and copies all package dependencies into a lib folder.

## Deployment
## Jenkins and Docker

Detailed instructions about the Docker and Jenkins setups can be found [here](https://github.ibm.com/rbs-lighthouse/lighthouse-docker)

## Builds

Any commits that are pushed to branches matching the pattern `origin/feature/**` will trigger the dev-build job.

When you create a pull request your code will automatically get build and deploying by the lighthouse-test-build job. The results will be reported back in to the pull request. If you want to request another build once you've added more code comment on the PR with the words `build please`.

Once you merge your code into `develop` the pre-prod build will run and deploy your code to the pre-prod app.

## Contributing

Please read the [Contributing guidelines](.github/CONTRIBUTING.md) before starting to write code for Project Lighthouse.

## The Hackathon Code

The original code for the hackathon was stored in 3 repositories on http://hub.jazz.net. We sinced moved the code to Github to make
it easier to manage and integrate with Jenkins.
You can get back to the version of the code that was delivered by checking out the `v1` tag.
