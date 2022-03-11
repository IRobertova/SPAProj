import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Advertisement} from '../../models/advertisement.models';

@Component({
  selector: 'app-advertisement-item',
  templateUrl: './advertisement-item.component.html',
  styleUrls: ['./advertisement-item.component.scss']
})
export class AdvertisementItemComponent{
  @Input() advertisement!:Advertisement;

  constructor() { }

  @Output() advClicked: EventEmitter<Advertisement> = new EventEmitter<Advertisement>();
  @Output() advDeleted: EventEmitter<number> = new EventEmitter<number>();

  onApplyClick(): void{
    this.advClicked.emit(this.advertisement);
  }
  onDeleteClick(): void{
    this.advDeleted.emit(this.advertisement.id);
  }

}
