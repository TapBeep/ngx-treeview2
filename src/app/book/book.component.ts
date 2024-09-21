import {Component, OnInit, ViewChild} from '@angular/core';
import {DropdownTreeviewComponent, TreeviewConfig, TreeviewItem} from 'ngx-treeview2';
import {BookService} from './book.service';

@Component({
  selector: 'ngx-book',
  templateUrl: './book.component.html',
  providers: [
    BookService
  ]
})
export class BookComponent implements OnInit {
  dropdownEnabled = true;
  items: TreeviewItem[];
  values: number[];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });

  buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];

  @ViewChild('dropdownTreeview') dropdownTreeview: DropdownTreeviewComponent;
  closeOnSelection = false;

  constructor(
    private service: BookService
  ) { }

  ngOnInit(): void {
    this.items = this.service.getBooks();
  }

  onFilterChange(value: string): void {
    console.log('filter:', value);
  }

  onSelectedChange(event: any[]) {
    this.values = event;
    if (this.closeOnSelection) {
      this.dropdownTreeview.dropdownDirective.close();
    }
  }
}
