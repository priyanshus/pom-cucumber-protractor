### Page object based Cucumber with Protractor

## To install the dependencies
Before installing the dependencies make sure you have node 4 or above running on your system. At the time of updating this readme, I am using v5.12.0 of node.

To install the dependencies issue the command `npm install`

## To run the cucumber tests

To run cucumber tests you can issue below command:

```
node_modules/.bin/protractor cucumber.config.js
```
# Learnings

* When I started using Protractor, I was considering everything asynchronous and was writing code with a lot of then blocks like this:
    ```
    openExploreToggleNavigation: {
        value: function () {
            var exploreToggleNavigationElement = element(by.css(selectors.exploreToggleNavigation)),
                democratesLinkElement = element(by.css(selectors.democratesLink));

            return exploreToggleNavigationElement.click()
                .then(function () {
                        return democratesLinkElement.click();
                    });
        }
    }
    ```
Thanks to all who cleared confusion here https://github.com/angular/protractor/issues/909. Actually you can write protractor tests in synchronous way considering the fact that protractor itself takes care of promises.

* Next learning for me is that, no need to handle promises using callback in cucumber step-definitions files. You can simply return them using return statement.

    
