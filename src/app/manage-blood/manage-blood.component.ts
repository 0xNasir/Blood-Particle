import {Component, OnInit, ViewChild} from '@angular/core';
import {DonationHistory, Donor} from '../plain-object/donor';
import {BloodService} from '../service/blood.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {HistoryComponent} from '../dialog/history/history.component';

@Component({
  selector: 'app-manage-blood',
  templateUrl: './manage-blood.component.html',
  styleUrls: ['./manage-blood.component.css']
})
export class ManageBloodComponent implements OnInit {
  donors: Donor[];
  bloodGroup: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  districtName: string[] = ['Dhaka', 'Cumilla', 'Chittagong', 'Narsingdi', 'Gazipur'];
  filter: string;
  displayedColumns: string[] = ['name', 'email', 'group', 'history', 'district', 'address', 'action'];
  bloodDonors: MatTableDataSource<Donor>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private bloodService: BloodService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getAllBloodDonors();
  }

  applyFilter(filterValue: string) {
    this.bloodDonors.filter = filterValue.trim().toLowerCase();

    if (this.bloodDonors.paginator) {
      this.bloodDonors.paginator.firstPage();
    }
  }

  getAllBloodDonors() {
    this.bloodService.getAllDonor().subscribe(data => {
      this.donors = data;
      this.bloodDonors = new MatTableDataSource(this.donors);
      this.bloodDonors.paginator = this.paginator;
      this.bloodDonors.sort = this.sort;
      console.log(this.bloodDonors);
    });
  }

  setEmptyInSearchField() {
    this.filter = '';
    this.applyFilter('');
  }

  filterByGroup(groupName) {
    let tempDonor = this.donors;
    tempDonor = tempDonor.filter(donor => {
      return (donor.donorBloodGroup === groupName);
    });
    this.bloodDonors = new MatTableDataSource(tempDonor);
  }

  filterByDistrict(districtName) {
    let tempDonor = this.donors;
    tempDonor = tempDonor.filter(donor => {
      return (donor.donorLocation.donorDistrict === districtName);
    });
    this.bloodDonors = new MatTableDataSource(tempDonor);
  }

  viewDonationHistory(history: DonationHistory[], donorName: string) {
    const tableData = new MatTableDataSource(history);
    const dialogRef = this.dialog.open(HistoryComponent, {
      width: '800px',
      data: {
        'history': history,
        'donorName': donorName
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
