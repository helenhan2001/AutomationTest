$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myApplication.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: hailihan2001@gamil.com"
    }
  ],
  "line": 2,
  "name": "QA Technical Test for LEAP",
  "description": "",
  "id": "qa-technical-test-for-leap",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "login website with valid user",
  "description": "",
  "id": "qa-technical-test-for-leap;login-website-with-valid-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open web browser and start with url \"http://cafetownsend-angular-rails.herokuapp.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I login with my valid username with password",
  "rows": [
    {
      "cells": [
        "name",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "Luke",
        "Skywalker"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the vaild user login successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cafetownsend-angular-rails.herokuapp.com/login",
      "offset": 37
    }
  ],
  "location": "TestLogin.open_web_browser_and_start_with_url(String)"
});
formatter.result({
  "duration": 6710830385,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.i_login_with_my_valid_username_with_password(DataTable)"
});
formatter.result({
  "duration": 525512157,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.the_vaild_user_login_successfully()"
});
formatter.result({
  "duration": 256777971,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "login website with invaild user",
  "description": "",
  "id": "qa-technical-test-for-leap;login-website-with-invaild-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@LoginInvaildUser"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Open web browser and start with url \"http://cafetownsend-angular-rails.herokuapp.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I login with my invalid username with password",
  "rows": [
    {
      "cells": [
        "name",
        "password"
      ],
      "line": 16
    },
    {
      "cells": [
        "E(*dcrf@",
        "WSEDCVF$%^\u0026"
      ],
      "line": 17
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the invaild user can not login successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cafetownsend-angular-rails.herokuapp.com/login",
      "offset": 37
    }
  ],
  "location": "TestLogin.open_web_browser_and_start_with_url(String)"
});
formatter.result({
  "duration": 542012307,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.i_login_with_my_invalid_username_with_password(DataTable)"
});
formatter.result({
  "duration": 822307352,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.the_invaild_user_can_not_login_successfully()"
});
formatter.result({
  "duration": 345000246,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Create Employee",
  "description": "",
  "id": "qa-technical-test-for-leap;create-employee",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@CreatedUser"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Open web browser and start with url \"http://cafetownsend-angular-rails.herokuapp.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I login with my valid username with password",
  "rows": [
    {
      "cells": [
        "name",
        "password"
      ],
      "line": 24
    },
    {
      "cells": [
        "Luke",
        "Skywalker"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the vaild user login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Create createEmployee successfully",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "startdate",
        "email",
        "status"
      ],
      "line": 28
    },
    {
      "cells": [
        "Tom001",
        "Pasdid",
        "2009-09-09",
        "test01@test.com",
        "passed"
      ],
      "line": 29
    },
    {
      "cells": [
        "Tom002",
        "shelda",
        "2008-09-09",
        "test02@test.com",
        "passed"
      ],
      "line": 30
    },
    {
      "cells": [
        "@WSX#$%%^\u0026",
        "QA$%^\u0026*(",
        "2011-09-09",
        "test03@test.com",
        "failed"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I fill in blank data I can see the tip message",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cafetownsend-angular-rails.herokuapp.com/login",
      "offset": 37
    }
  ],
  "location": "TestLogin.open_web_browser_and_start_with_url(String)"
});
formatter.result({
  "duration": 566713669,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.i_login_with_my_valid_username_with_password(DataTable)"
});
formatter.result({
  "duration": 787762661,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.the_vaild_user_login_successfully()"
});
formatter.result({
  "duration": 203825508,
  "status": "passed"
});
formatter.match({
  "location": "TestCreateUser.create_createEmployee_successfully(DataTable)"
});
formatter.result({
  "duration": 3556494616,
  "status": "passed"
});
formatter.match({
  "location": "TestCreateUser.i_fill_in_blank_data_I_can_see_the_tip_message()"
});
formatter.result({
  "duration": 1105763472,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Edit Employee and delete Employee",
  "description": "",
  "id": "qa-technical-test-for-leap;edit-employee-and-delete-employee",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@EditdAndDelUser"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Open web browser and start with url \"http://cafetownsend-angular-rails.herokuapp.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I login with my valid username with password",
  "rows": [
    {
      "cells": [
        "name",
        "password"
      ],
      "line": 38
    },
    {
      "cells": [
        "Luke",
        "Skywalker"
      ],
      "line": 39
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I select one user and click the Edit Btn to Edit User",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I select one user and delete the user when edit",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select the test user and click to delete the user",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cafetownsend-angular-rails.herokuapp.com/login",
      "offset": 37
    }
  ],
  "location": "TestLogin.open_web_browser_and_start_with_url(String)"
});
formatter.result({
  "duration": 782192850,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.i_login_with_my_valid_username_with_password(DataTable)"
});
formatter.result({
  "duration": 771426276,
  "status": "passed"
});
formatter.match({
  "location": "TestEditAndDelete.i_select_one_user_and_click_the_Edit_Btn_to_Edit_User()"
});
formatter.result({
  "duration": 5339275148,
  "status": "passed"
});
formatter.match({
  "location": "TestEditAndDelete.i_select_one_user_and_delete_the_user_when_edit()"
});
formatter.result({
  "duration": 1470586030,
  "status": "passed"
});
formatter.match({
  "location": "TestEditAndDelete.i_select_the_test_user_and_click_to_delete_the_user()"
});
formatter.result({
  "duration": 2927764714,
  "status": "passed"
});
});