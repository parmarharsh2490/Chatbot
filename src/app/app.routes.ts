import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { TalkHistoryComponent } from './pages/talk-history/talk-history.component';
import { TalkReportComponent } from './components/talk-report/talk-report.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'profile',
    component: ProfilepageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'talk-history',
    component: TalkHistoryComponent,
  },
  {
    path: 'talk-details',
    component: TalkReportComponent,
  },
];
