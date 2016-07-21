`use strict`;

var selectors = {
    emailTextInput: "input[name='email']",
    passwordTextInput: "input[name='password']",
    loginButton: "input[name='login']",
    wrongPasswordErrorText: ".j-error[style='display: block;']"
},

    LoginPage = function () {};

LoginPage.prototype = Object.create({}, {
    wrongPasswordErrorText: {
        value: selectors.wrongPasswordErrorText,
        writable: false
    },

    login: {
        value: function (email, password) {
            var emailTextInputElement = element.all(by.css(selectors.emailTextInput)).last(),
                passwordTextInputElement = element.all(by.css(selectors.passwordTextInput)).last(),
                loginButtonElement = element.all(by.css(selectors.loginButton)).last();

            emailTextInputElement.sendKeys(email);
            passwordTextInputElement.sendKeys(password);
            return loginButtonElement.click();
        }
    }
});

module.exports = LoginPage;
