import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
              <footer class="app-footer">
                  <a href="#">SIAP</a> &copy; 2017 - LABLD/MPPB.
              </footer>
            `
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
