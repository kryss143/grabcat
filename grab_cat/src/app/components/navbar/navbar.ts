import { Component, inject } from '@angular/core';
import { ThemeService } from '../../theme/controller';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private themeService = inject(ThemeService);

  toggleTheme(event?: Event): void {
    if (!event) {
      this.themeService.toggleTheme();
      return;
    }

    const target = event.target as HTMLInputElement | null;
    if (!target) {
      this.themeService.toggleTheme();
      return;
    }

    const themeValue = target.value || null;
    const enabled = target.checked;
    if (themeValue) {
      this.themeService.toggleTheme(themeValue, enabled);
    } else {
      this.themeService.toggleTheme();
    }
  }
}
