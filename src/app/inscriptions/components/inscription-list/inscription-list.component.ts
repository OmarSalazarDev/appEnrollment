import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Inscription } from 'src/app/models/inscription';
import { InscriptionsService } from '../../services/inscriptions.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-inscription-list',
  templateUrl: './inscription-list.component.html',
  styleUrls: ['./inscription-list.component.scss']
})
export class InscriptionListComponent implements OnInit {
  inscriptions$!: Observable<Inscription[]>;

  constructor(
    private inscriptionsService: InscriptionsService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.inscriptions$ = this.inscriptionsService.getInscriptions();
  }

  navigationRoute(route: string) {
    this.router.navigate([route]);
  }

  delete(id: string) {
    this.inscriptionsService.deleteInscription(id).subscribe((inscription) => {
      alert(`${inscription.id} - ${inscription.nameCourses} eliminado satisfactoriamente.`);
      this.ngOnInit();
    });
  }

  openDialog(inscription: Inscription) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '300px',
      data: inscription
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        alert(`${inscription.id} - ${inscription.nameCourses} fue editado satisfactoriamente.`);
        this.ngOnInit();
      }
    });
  }
}
