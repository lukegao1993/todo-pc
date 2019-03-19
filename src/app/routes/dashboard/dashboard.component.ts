import { Component, OnInit } from '@angular/core';
import { LocalDBService } from '../../core/service/localDB/localDB.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  value = '1';
  constructor(private localDBService: LocalDBService) { }

  ngOnInit() {

  }
  get() {
    // const t = this.localDBService.get('setting');
    // console.log(JSON.stringify(t));
    this.localDBService.get('setting').then(
      data => {
        console.log(data);
        this.value = data;
      }
    )
  }

}
