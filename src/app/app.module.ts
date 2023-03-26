import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CommonService } from './services/common.service';
import { FundListComponent } from './pages/fund-list/fund-list.component';
import { AselAgentsComponent } from './pages/agents/asel-agents/asel-agents.component';
import { AgentSearchComponent } from './pages/agents/agent-search/agent-search.component';
import { AgentDashboardComponent } from './pages/agents/agent-dashboard/agent-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule

    ],
    declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, AboutusComponent, FundListComponent, AselAgentsComponent, AgentSearchComponent, AgentDashboardComponent],
    providers: [CommonService],
    bootstrap: [AppComponent]
})
export class AppModule { }
