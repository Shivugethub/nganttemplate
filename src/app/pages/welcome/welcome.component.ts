import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private message: NzMessageService) { }

  ngOnInit() {
    //  loading message
    // const id = this.message.loading('Action in progress..', { nzDuration: 0 }).messageId;
    // setTimeout(() => {
    //   this.message.remove(id);
    // }, 2500);


    // custom loading message
    // tslint:disable-next-line: no-non-null-assertion
    this.message
      .loading('Action in progress', { nzDuration: 2500 })
      .onClose!.pipe(
        // tslint:disable-next-line: no-non-null-assertion
        concatMap(() => this.message.success('Loading finished', { nzDuration: 2500 }).onClose!),
      )
      .subscribe(() => {
        console.log('All completed!');
      });
  }
}
