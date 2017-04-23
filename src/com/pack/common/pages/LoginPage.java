package com.pack.common.pages;

import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {

	private WebDriver driver;

	private By username = By.xpath("//input[@ng-model='user.name']");
	private By Pwd = By.xpath("//input[@ng-model='user.password']");
	private By signTile = By.xpath("//p[@id='greetings']");
	private By submitBtn = By.xpath("//button[@type='submit']");
	private By errorMsg = By.xpath("//p[contains(text(),'Invalid username or password!')]");
	private By angularJS = By.linkText("AngularJS");
	private By coffeeScript = By.linkText("CoffeeScript");
	private By bourbon = By.linkText("Bourbon");
	private By rails = By.linkText("Rails");
	private By jensKrause = By.linkText("Jens Krause");

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	public void enterName(String userName) {
		new WebDriverWait(driver, 30).until(ExpectedConditions.visibilityOfElementLocated(username));
		WebElement loginName = driver.findElement(username);
		if (loginName.isDisplayed())
			loginName.sendKeys(userName);

	}

	public void enterPwd(String password) {

		new WebDriverWait(driver, 20).until(ExpectedConditions.visibilityOfElementLocated(Pwd));
		WebElement loginPwd = driver.findElement(Pwd);
		if (loginPwd.isDisplayed())
			loginPwd.sendKeys(password);
	}

	public void login(String userName, String password) {

		WebElement loginName = driver.findElement(username);
		WebElement loginPwd = driver.findElement(Pwd);
		loginName.sendKeys(userName);
		loginPwd.sendKeys(password);
	}

	public String getSignTitle() {

		WebElement pageTitle = driver.findElement(signTile);
		String title = pageTitle.getText();
		return title;

	}

	public void clickLogin() {

		WebElement loginBtn = driver.findElement(submitBtn);
		loginBtn.submit();

	}

	public boolean verifyLoginSuccessfulMsg() {
		String expectedTitle = "Hello";
		return getSignTitle().contains(expectedTitle);

	}

	public boolean verifySignInPageTitle() {
		String expectedTitle = "CafeTownsend-AngularJS-Rails";
		return driver.getTitle().contains(expectedTitle);

	}

	public boolean errorSingIn() {

		enterName("errorUserName");
		enterPwd("errorPwd");
		clickLogin();
		return getErrorMessage().contains("Invalid");

	}

	public String getErrorMessage() {
		String strErrorMsg = null;
		WebElement errorMessage = driver.findElement(errorMsg);
		if (errorMessage.isDisplayed() && errorMessage.isEnabled())
			strErrorMsg = errorMessage.getText();
		return strErrorMsg;

	}

	public boolean verifyFooter() {

		WebElement eleAngularJS = driver.findElement(angularJS);

		WebElement eleCoffeeScript = driver.findElement(coffeeScript);

		WebElement eleBourbon = driver.findElement(bourbon);

		WebElement eleRails = driver.findElement(rails);

		WebElement eleJensKrause = driver.findElement(jensKrause);

		if (eleAngularJS.isDisplayed() && eleCoffeeScript.isDisplayed() && eleBourbon.isDisplayed()
				&& eleRails.isDisplayed() && eleJensKrause.isDisplayed()) {

			return true;
		}

		return false;

	}
}
