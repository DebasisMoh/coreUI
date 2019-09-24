$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/CustomerOperation.feature");
formatter.feature({
  "line": 1,
  "name": "Customer Operation",
  "description": "",
  "id": "customer-operation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14427609944,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the common steps for each below scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "comments": [
    {
      "line": 4,
      "value": "#Given User launch Chrome browser"
    },
    {
      "line": 5,
      "value": "#When User open URL \"http://admin-demo.nopcommerce.com/login\""
    }
  ],
  "line": 6,
  "name": "User Enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
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
  "duration": 2569675078,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 10930043886,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_land_on_the_Dashboard_page()"
});
formatter.result({
  "duration": 71761271,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Add a new customer in customer page",
  "description": "",
  "id": "customer-operation;add-a-new-customer-in-customer-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user should click on customer which is on the left sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on Customer submenu of Customer menubar",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on Add New button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should fill all the details and save it",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User can see the confirmation message as \"The new customer has been added successfully\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click on logout",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_should_click_on_customer_which_is_on_the_left_sidebar()"
});
formatter.result({
  "duration": 4252521332,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Customer_submenu_of_Customer_menubar()"
});
formatter.result({
  "duration": 5057344779,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_New_button()"
});
formatter.result({
  "duration": 4314278176,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_fill_all_the_details_and_save_it()"
});
formatter.result({
  "duration": 18583597114,
  "status": "passed"
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
  "duration": 713488617,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_logout()"
});
formatter.result({
  "duration": 7683110688,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("Scenario Passed..");
formatter.after({
  "duration": 1483848688,
  "status": "passed"
});
formatter.before({
  "duration": 12286147333,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the common steps for each below scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "comments": [
    {
      "line": 4,
      "value": "#Given User launch Chrome browser"
    },
    {
      "line": 5,
      "value": "#When User open URL \"http://admin-demo.nopcommerce.com/login\""
    }
  ],
  "line": 6,
  "name": "User Enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
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
  "duration": 1218283750,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 10484372123,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_land_on_the_Dashboard_page()"
});
formatter.result({
  "duration": 243741273,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search Customer By emailID",
  "description": "",
  "id": "customer-operation;search-customer-by-emailid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user should click on customer which is on the left sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on Customer submenu of Customer menubar",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Enter Customer EmailID",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on Search button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should found Email on the search table",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_should_click_on_customer_which_is_on_the_left_sidebar()"
});
formatter.result({
  "duration": 4272490336,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Customer_submenu_of_Customer_menubar()"
});
formatter.result({
  "duration": 5842834952,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_Customer_EmailID()"
});
formatter.result({
  "duration": 762606958,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Search_button()"
});
formatter.result({
  "duration": 5276137475,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_found_Email_on_the_search_table()"
});
formatter.result({
  "duration": 183896443,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.write("Scenario Passed..");
formatter.after({
  "duration": 1426551000,
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
        "admin",
        "Dashboard / nopCommerce administration"
      ],
      "line": 12,
      "id": "login-into-nopcommerce;login-with-valid-credentials-using-data-driven;;2"
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
  "duration": 12246786491,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login with valid credentials using data driven",
  "description": "",
  "id": "login-into-nopcommerce;login-with-valid-credentials-using-data-driven;;2",
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
  "name": "User Enter email as \"admin@yourstore.com\" and password as \"admin\"",
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
  "duration": 1252233352,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 9162013008,
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
  "duration": 22398418,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.write("Scenario Passed..");
formatter.after({
  "duration": 3366440529,
  "status": "passed"
});
formatter.before({
  "duration": 11122154088,
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
  "duration": 1231352110,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 976160477,
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
  "duration": 53279255,
  "error_message": "java.lang.AssertionError: expected [Your store. Login] but found [Your store. Logins]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat stepDefinations.Steps.page_title_should_be(Steps.java:116)\r\n\tat ✽.Then Page title should be \"Your store. Logins\"(./Features/Login.feature:7)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.write("Scenario Failed..");
formatter.after({
  "duration": 1368830096,
  "status": "passed"
});
});