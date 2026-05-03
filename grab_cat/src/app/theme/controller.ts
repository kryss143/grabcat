// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly THEME_KEY = 'theme';

  constructor() {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      this.applyTheme(savedTheme);
    }
  }

  toggleTheme(theme?: string, enabled?: boolean): void {
    if (theme) {
      if (enabled) {
        this.setTheme(theme);
      } else {
        this.clearTheme();
      }
      return;
    }

    // legacy toggle: switch between 'dark' and no theme
    const current = this.getTheme();
    if (current && current !== 'light') {
      this.clearTheme();
      localStorage.setItem(this.THEME_KEY, 'light');
    } else {
      this.setTheme('dark');
      localStorage.setItem(this.THEME_KEY, 'dark');
    }
  }

  setTheme(name: string): void {
    this.applyTheme(name);
    localStorage.setItem(this.THEME_KEY, name);
  }

  getTheme(): string | null {
    return document.documentElement.getAttribute('data-theme') || localStorage.getItem(this.THEME_KEY);
  }

  isTheme(name: string): boolean {
    return this.getTheme() === name;
  }

  private applyTheme(name: string): void {
    if (name === 'light' || name === null) {
      this.clearTheme();
      return;
    }
    document.documentElement.setAttribute('data-theme', name);
  }

  private clearTheme(): void {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem(this.THEME_KEY, 'light');
  }
}
