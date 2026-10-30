import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings = {
    darkMode: false
  };

  setDarkMode(enabled: boolean) {
    this.settings.darkMode = enabled;

    document.body.classList.toggle('dark', enabled);
  }
}