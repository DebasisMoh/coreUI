$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into nopCommerce",
  "description": "",
  "id": "login-into-nopcommerce",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login with valid credentials using data driven",
  "description": "",
  "id": "login-into-nopcommerce;login-with-valid-credentials-using-data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 4,
      "value": "#When User open URL \"\u003cRequiredURL\u003e\""
    }
  ],
  "line": 5,
  "name": "User Enter email as \"\u003cUname\u003e\" and password as \"\u003cpw\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Page title should be \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 8,
      "value": "# Then Close The Browser"
    }
  ],
  "line": 10,
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
      "line": 11,
      "id": "login-into-nopcommerce;login-with-valid-credentials-using-data-driven;;1"
    },
    {
      "cells": [
        "http://admin-demo.nopcommerce.com/login",
        "admin@yourstore.com",
        "admin1",
        "Your store. Logins"
      ],
      "line": 13,
      "id": "login-into-nopcommerce;login-with-valid-credentials-using-data-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10606515948,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login with valid credentials using data driven",
  "description": "",
  "id": "login-into-nopcommerce;login-with-valid-credentials-using-data-driven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 4,
      "value": "#When User open URL \"\u003cRequiredURL\u003e\""
    }
  ],
  "line": 5,
  "name": "User Enter email as \"admin@yourstore.com\" and password as \"admin1\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Page title should be \"Your store. Logins\"",
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
      "val": "admin1",
      "offset": 59
    }
  ],
  "location": "Steps.user_Enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 2010356401,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 849852116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Logins",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "duration": 18207318,
  "error_message": "java.lang.AssertionError: expected [Your store. Login] but found [Your store. Logins]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat stepDefinations.Steps.page_title_should_be(Steps.java:114)\r\n\tat ✽.Then Page title should be \"Your store. Logins\"(./Features/Login.feature:7)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("Scenario Failed..");
formatter.after({
  "duration": 1461245606,
  "status": "passed"
});
});