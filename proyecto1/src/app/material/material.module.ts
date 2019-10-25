import { NgModule } from '@angular/core';
import { MatButtonModule, MatExpansionModule, MatGridListModule, MatSidenavModule, MatToolbarModule, MatButtonToggleModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material'
import { MatBadgeModule } from '@angular/material/badge';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatGridListModule,
  MatExpansionModule
 ];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
