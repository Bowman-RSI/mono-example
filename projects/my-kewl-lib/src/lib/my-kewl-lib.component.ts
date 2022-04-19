import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-kewl-lib',
  template: `
    <p>
      my-kewl-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MyKewlLibComponent implements OnInit {

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
