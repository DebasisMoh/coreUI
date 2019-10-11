$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/CustomerOperation.feature");
formatter.feature({
  "line": 1,
  "name": "Customer Operation",
  "description": "",
  "id": "customer-operation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8432830937,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Below are the common steps for each below scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#Given User launch Chrome browser"
    },
    {
      "line": 6,
      "value": "#When User open URL \"http://admin-demo.nopcommerce.com/login\""
    }
  ],
  "line": 7,
  "name": "User Enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should land on the Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 21
    },
    {
      "val": "admin",
      "offset": 59
    }
  ],
  "location": "Steps.user_Enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 1081955386,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 6902473423,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_land_on_the_Dashboard_page()"
});
formatter.result({
  "duration": 76125623,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Add a new customer in customer page",
  "description": "",
  "id": "customer-operation;add-a-new-customer-in-customer-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "user should click on customer which is on the left sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on Customer submenu of Customer menubar",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click on Add New button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User should fill all the details and save it",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User can see the confirmation message as \"The new customer has been added successfully\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "click on logout",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_should_click_on_customer_which_is_on_the_left_sidebar()"
});
formatter.result({
  "duration": 4115704740,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Customer_submenu_of_Customer_menubar()"
});
formatter.result({
  "duration": 68211731,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d77.0.3865.90)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DEBASISLTOP\u0027, ip: \u0027192.168.0.140\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\DEBASI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53116}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 38a81a63474cb724be8c301802ab4a1c\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat pageObjects.CustomerOperation.clickonCustomerMenuItem(CustomerOperation.java:58)\r\n\tat stepDefinations.Steps.click_on_Customer_submenu_of_Customer_menubar(Steps.java:192)\r\n\tat ✽.Then Click on Customer submenu of Customer menubar(./Features/CustomerOperation.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.click_on_Add_New_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_should_fill_all_the_details_and_save_it()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The new customer has been added successfully",
      "offset": 42
    }
  ],
  "location": "Steps.user_can_see_the_confirmation_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("Scenario Failed..");
formatter.after({
  "duration": 1247155757,
  "status": "passed"
});
formatter.before({
  "duration": 7383024981,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Below are the common steps for each below scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#Given User launch Chrome browser"
    },
    {
      "line": 6,
      "value": "#When User open URL \"http://admin-demo.nopcommerce.com/login\""
    }
  ],
  "line": 7,
  "name": "User Enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should land on the Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 21
    },
    {
      "val": "admin",
      "offset": 59
    }
  ],
  "location": "Steps.user_Enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 693990562,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 6823708226,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_land_on_the_Dashboard_page()"
});
formatter.result({
  "duration": 15626736,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search Customer By emailID",
  "description": "",
  "id": "customer-operation;search-customer-by-emailid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "user should click on customer which is on the left sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click on Customer submenu of Customer menubar",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Enter Customer EmailID",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User should found Email on the search table",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_should_click_on_customer_which_is_on_the_left_sidebar()"
});
formatter.result({
  "duration": 4118466270,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Customer_submenu_of_Customer_menubar()"
});
formatter.result({
  "duration": 3541441671,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_Customer_EmailID()"
});
formatter.result({
  "duration": 378542173,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Search_button()"
});
formatter.result({
  "duration": 5122016895,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_found_Email_on_the_search_table()"
});
formatter.result({
  "duration": 101171386,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.write("Scenario Passed..");
formatter.after({
  "duration": 1198046522,
  "status": "passed"
});
formatter.uri("./Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into nopCommerce",
  "description": "",
  "id": "login-into-nopcommerce",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login with valid credentials using data driven",
  "description": "",
  "id": "login-into-nopcommerce;login-with-valid-credentials-using-data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#When User open URL \"\u003cRequiredURL\u003e\""
    }
  ],
  "line": 6,
  "name": "User Enter email as \"\u003cUname\u003e\" and password as \"\u003cpw\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Page title should be \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 9,
      "value": "# Then Close The Browser"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-into-nopcommerce;login-with-valid-credentials-using-data-driven;",
  "rows": [
    {
      "cells": [
        "RequiredURL",
        "Uname",
        "pw",
        "title"
      ],
      "line": 12,
      "id": "login-into-nopcommerce;login-with-valid-credentials-using-data-driven;;1"
    },
    {
      "cells": [
        "http://admin-demo.nopcommerce.com/login",
        "admin@yourstore.com",
        "admin",
        "Dashboard / nopCommerce administration"
      ],
      "line": 13,
      "id": "login-into-nopcommerce;login-with-valid-credentials-using-data-driven;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7331489294,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login with valid credentials using data driven",
  "description": "",
  "id": "login-into-nopcommerce;login-with-valid-credentials-using-data-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#When User open URL \"\u003cRequiredURL\u003e\""
    }
  ],
  "line": 6,
  "name": "User Enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 21
    },
    {
      "val": "admin",
      "offset": 59
    }
  ],
  "location": "Steps.user_Enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 746779623,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 6736132578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "duration": 66780251,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.write("Scenario Passed..");
formatter.after({
  "duration": 3197330481,
  "status": "passed"
});
});