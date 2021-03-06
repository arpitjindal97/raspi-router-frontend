import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @ViewChild('code_mirror') code_mirror;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
    this.setContentValue(this.content);
  }


  setContentValue(content: string) {
    this.code_mirror.writeValue(content);
  }

  getContentValue(): string {
    return this.code_mirror.value;
  }

}
