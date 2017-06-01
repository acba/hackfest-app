import { Component, OnInit } from '@angular/core';
import { DownloadService } from './download.service';
import * as FileSaver from 'file-saver'; 


@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

  constructor(private downloadService: DownloadService) { }

  ngOnInit() {
  }

  onDownload(){
    console.log("realizando download");
    
    this.downloadService.downloadFile()
        .subscribe( data => {
                              console.log(data);

                              let fileBlob = data.blob();
                              let blob = new Blob([fileBlob], { type: 'application/pdf' });
                              let filename = 'mypdf.pdf';
                              FileSaver.saveAs(blob, filename);
        },
        error => console.log("Error downloading the file."))
  }

}
