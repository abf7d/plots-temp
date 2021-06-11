import { NgModule } from '@angular/core';
import { ExplorerComponent } from './explorer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SelectedChartComponent } from './components/selected-chart/selected-chart.component';
import { NavChartComponent } from './components/nav-chart/nav-chart.component';



@NgModule({
  declarations: [
    ExplorerComponent,
    LayoutComponent,
    SelectedChartComponent,
    NavChartComponent
  ],
  imports: [
  ],
  exports: [
    ExplorerComponent
  ]
})
export class ExplorerModule { }
