import { Component, OnInit } from '@angular/core';
import { Doc } from 'src/app/interfaces/Doc';
import { DocumentService } from 'src/app/services/document.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  titleModal: string = 'Crear nuevo Documento';
  actionButton: string = 'Create';
  modalCreateDocument: boolean = false;
  titleModalInfo: string = 'Informacion de Documento';
  modalInfoDocument: boolean = false;
  tableDocuments: Doc[] = [];
  documen!: Doc;
  links: any[] = [];
  requestSearch = {
    doc_nombre: '',
  };

  constructor(private documentService: DocumentService) {}

  /**
   * Función inicial
   */
  ngOnInit() {
    this.loadTable();
  }

  /**
   * Función que detecta el cambio del modal usado para guardar
   * @param resultChange
   */
  modalCreateDocumentChange(resultChange: boolean) {
    this.modalCreateDocument = resultChange;
    if (!this.modalCreateDocument) {
      this.loadTable();
    }
  }

  /**
   * Función Inicia propiedades, crea nuevo docuemnto
   * @param
   */
  createNewDocument() {
    this.titleModal = 'Crear nuevo';
    this.actionButton = 'Create';
    this.modalCreateDocument = true;
  }

  /**
   * Función Actualiza un Documento
   * @param documen
   */
  updateDocument(documen: Doc) {
    console.log(documen);
    this.documen = documen;
    this.titleModal = 'Actualizar';
    this.actionButton = 'Update';
    this.modalCreateDocument = true;
  }

  /**
   * Función Elimina un Documento
   * @param documen
   */
  deleteDocument(documen: Doc) {
    Swal.fire('Hola!');
    Swal.fire({
      title: 'Eliminar',
      text: '¿Esta seguro de eliminar?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.documentService
          .deleteDocument(documen.doc_id)
          .subscribe((result: any) => {
            if (result.status) {
              this.loadTable();
              Swal.fire({
                title: 'Eliminado!',
                text: 'Eliminado con exito.',
                icon: 'success',
              });
            }
          });
      }
    });
  }

  /**
   * Función Realiza Paginacion
   * @param url
   */
  pagination(url: string) {
    this.loadTable(url);
  }

  /**
   * Detecta el cambio para consultar
   */
  selectChange(event: Event, name: string = '') {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;
    const selectName = target.name;
    switch (selectName) {
      case 'doc_nombre':
        this.requestSearch.doc_nombre = selectedValue;
        break;
    }
    this.loadTable();
  }

  /**
   * Carga la informacion de la tabla
   * @param url
   */
  loadTable(url: string = '') {
    this.documentService
      .getDocumentParams(this.requestSearch, url)
      .subscribe((result: any) => {
        this.tableDocuments = result.data.data;
        this.links = result.data.links;
        // console.log(result);
      });
  }
}
