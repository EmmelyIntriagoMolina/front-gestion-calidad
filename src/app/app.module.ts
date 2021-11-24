import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderListComponent } from './componentes/order-list/order-list.component';
import { OrderFormComponent } from './componentes/order-form/order-form.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterProveedorPipe } from './pipes/filter-proveedor/filter-proveedor.pipe';
import { FilterLotePipe } from './pipes/filter-lote/filter-lote.pipe';
import { OrderClienteListComponent } from './componentes/order-cliente-list/order-cliente-list.component';
import { FilterNumeroPipe } from './pipes/filter-numero/filter-numero.pipe';
import { FilterClientePipe } from './pipes/filter-cliente/filter-cliente.pipe';
import { FilterDestinoPipe } from './pipes/filter-destino/filter-destino.pipe';
import { FilterReferenciaPipe } from './pipes/filter-referencia/filter-referencia.pipe';
import { OrderClienteFormComponent } from './componentes/order-cliente-form/order-cliente-form.component';
import { FilterEstadoCalidadPipe } from './pipes/filter-estadoCalidad/filter-estado-calidad.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { OrderEditComponent } from './componentes/order-edit/order-edit.component';
import { OrderClienteEditComponent } from './componentes/order-cliente-edit/order-cliente-edit.component';
import { GuiaListComponent } from './componentes/guia-list/guia-list.component';
import { GuiaFormComponent } from './componentes/guia-form/guia-form.component';
import { AprobacionComponent } from './componentes/aprobacion/aprobacion.component';
import {MatDialogModule} from '@angular/material/dialog';
import { VerOTComponent } from './componentes/ver-ot/ver-ot.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderFormComponent,
    FilterPipe,
    FilterProveedorPipe,
    FilterLotePipe,
    OrderClienteListComponent,
    FilterNumeroPipe,
    FilterClientePipe,
    FilterDestinoPipe,
    FilterReferenciaPipe,
    OrderClienteFormComponent,
    FilterEstadoCalidadPipe,
    OrderEditComponent,
    OrderClienteEditComponent,
    GuiaListComponent,
    GuiaFormComponent,
    AprobacionComponent,
    VerOTComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  entryComponents:[MatDialogModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
