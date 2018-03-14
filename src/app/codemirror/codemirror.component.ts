import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-codemirror',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.scss']
})
export class CodemirrorComponent implements OnInit {

  @ViewChild('code_mirror') code_mirror;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
    this.setValue(this.content);
  }


  setValue(content: string) {
    this.code_mirror.writeValue(content);
  }

  getValue(): string {
    return this.code_mirror._value;
  }

}
