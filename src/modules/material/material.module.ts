import { NgModule } from "@angular/core";

// material componets
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatProgressBarModule,
    ]
})
export class MaterialModules {}

