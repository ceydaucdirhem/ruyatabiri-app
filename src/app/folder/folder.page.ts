import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public kelime: string;
  public ruyalar: any=0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  ruyaBul() {
    console.log(this.kelime);
    this.http
      .get(
        'https://microwebservice.online/ecodation/12subat/ceyda/ruya_servis_api.php?kelime=' +
          this.kelime
      )
      .subscribe((data) => {
        this.ruyalar = data;
        console.log(this.ruyalar);
      });

  }
}


