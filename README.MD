### Page object based Cucumber with Protractor

## To install the dependencies

To install the dependencies issue the command `npm install`

## To run the cucumber tests

To run cucumber tests you can issue below command:

```
node_modules/.bin/protractor cucumber.config.js --baseUrl <URL> --params.common.buildIndex <buildHash>
```
You can use `--cucumberOpts.tags <Expression>` to run specific features or scenarios. E.g.

```
npm run cucumber -- --cucumberOpts.tags="@regression"
```
