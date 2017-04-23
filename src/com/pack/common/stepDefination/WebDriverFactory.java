package com.pack.common.stepDefination;

import org.openqa.selenium.UnexpectedAlertBehaviour;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
//import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.gargoylesoftware.htmlunit.BrowserVersion;

public class WebDriverFactory {
	public static WebBrowserTypes BrowserType = WebBrowserTypes.Firefox;

	public static WebDriver createWebDriver() throws Throwable {
		switch (BrowserType) {
		case Chrome:
			return CreateChromeDriver();
		case Firefox:
			return createFirefoxDriver();
		case Headless:
			return CreateHeadlessDriver();
		default:
			throw new Exception("The web broswer is not supported for now");
		}
	}

	private static WebDriver createFirefoxDriver() {
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\selenium\\geckodriver.exe");

		FirefoxProfile firefoxProfile = new FirefoxProfile();

		DesiredCapabilities capabilities = DesiredCapabilities.firefox();
		capabilities.setCapability(CapabilityType.UNEXPECTED_ALERT_BEHAVIOUR, UnexpectedAlertBehaviour.ACCEPT);
		return new FirefoxDriver(capabilities);
	}

	private static WebDriver CreateChromeDriver() {

		System.setProperty("webdriver.chrome.driver", "C:\\Users\\selenium\\chromedriver.exe");
		DesiredCapabilities dc = new DesiredCapabilities();
		dc.setCapability(CapabilityType.UNEXPECTED_ALERT_BEHAVIOUR, UnexpectedAlertBehaviour.IGNORE);
		return new ChromeDriver(dc);
	}

	private static WebDriver CreateHeadlessDriver() {

		HtmlUnitDriver driver = new HtmlUnitDriver(BrowserVersion.CHROME);
		driver.setJavascriptEnabled(true);

		return driver;
	}
}
