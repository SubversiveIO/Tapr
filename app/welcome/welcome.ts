import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { WelcomeModule } from './welcome.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(WelcomeModule);