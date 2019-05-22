import { browser, by, element } from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get( browser.baseUrl ) as Promise<any>;
  }

  static getTitleText() {
    return element( by.css( 'body > app-root > main > section > p.title' ) ).getText() as Promise<string>;
  }
}
