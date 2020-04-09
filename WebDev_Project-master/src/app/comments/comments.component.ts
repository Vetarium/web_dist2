import { Component, OnInit } from '@angular/core';
import {CommentsService} from '../comments.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment: string;
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  showToast() {
    this.toastr.error('Authorization required');
  }
}
