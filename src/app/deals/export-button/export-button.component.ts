import { Component, OnInit } from '@angular/core';
import {ExportExcelService} from '../../shared/services/export-excel.service';
import {formatDate} from '@angular/common';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-export-button',
  templateUrl: './export-button.component.html',
  styleUrls: ['./export-button.component.css']
})
export class ExportButtonComponent implements OnInit {

  constructor(public exportExcel: ExportExcelService) { }

  ngOnInit() {
  }

  public downloadFile() {
    this.exportExcel.getDealsExcelFile().subscribe(data => {
      const myBlob: Blob = new Blob([data], {type: 'application/vnd.ms-excel'});
      saveAs(myBlob, 'deals-pip-' + formatDate(new Date(), 'yyyy/MM/dd hh:mm:ss', 'en') + '.xls');
    });
  }

}
