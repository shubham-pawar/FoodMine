import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  @Input() visible = false;
  @Input() notFoundMessage = "Nothing found!";
  @Input() resetLinkText = "Reset";
  @Input() resetLinkRoute = "/";
}