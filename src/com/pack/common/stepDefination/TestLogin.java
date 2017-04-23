package com.pack.common.stepDefination;

import java.util.ArrayList;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.pack.common.pages.LoginPage;
import com.sun.jna.platform.win32.Netapi32Util.User;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestLogin extends StepsBase {

	@Given("^Open web browser and start with url \"([^\"]*)\"$")
	public void open_web_browser_and_start_with_url(String url) throws Throwable {
		driver.get(url);

	}

	@When("^I login with my valid username with password$")
	public void i_login_with_my_valid_username_with_password(DataTable table) throws Throwable {
		System.out.println("Sign in functionality details...");
		LoginPage page = new LoginPage(driver);
		List<String> row = table.raw().get(1);

		page.enterName(row.get(0));
		page.enterPwd(row.get(1));
		page.clickLogin();

	}

	@When("^I login with my invalid username with password$")
	public void i_login_with_my_invalid_username_with_password(DataTable table) throws Throwable {
		LoginPage page = new LoginPage(driver);
		List<String> row = table.raw().get(1);

		page.enterName(row.get(0));
		page.enterPwd(row.get(1));
		page.clickLogin();

	}

	@Then("^the vaild user login successfully$")
	public void the_vaild_user_login_successfully() throws Throwable {
		LoginPage page = new LoginPage(driver);
		Assert.assertTrue("Unable to sign in", page.verifyLoginSuccessfulMsg());
		Assert.assertTrue("Page title not matching", page.verifySignInPageTitle());
		Assert.assertTrue("Page Footer not displaying correctly", page.verifyFooter());

	}

	@Then("^the invaild user can not login successfully$")
	public void the_invaild_user_can_not_login_successfully() throws Throwable {
		LoginPage page = new LoginPage(driver);
		Assert.assertTrue("Invalid user can login,Please check!", page.errorSingIn());
	}
}
