import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doc } from 'src/app/interfaces/Doc';
import { DocumentService } from 'src/app/services/document.service';
import { ProcesoService } from 'src/app/services/proceso.service';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'modal-create-documen',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  formulario: FormGroup;
  listTipoDocumento: any[] = [];
  listTipoProceso: any[] = [];
  @Input() title: string = '';
  @Input() visible: boolean = false;
  @Input() action!: string;
  @Input() documen!: Doc;

  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private documentService: DocumentService,
    private tipoDocumento: TipoDocumentoService,
    private tipoProceso: ProcesoService
  ) {
    //Inicializa el formulario
    this.formulario = this.formBuilder.group({
      doc_nombre: ['', Validators.required],
      doc_contenido: ['', Validators.required],
      doc_id_tipo: ['', Validators.required],
      doc_id_proceso: ['', Validators.required],
    });
  }

  /**
   * funcion inicial
   */
  ngOnInit() {
    this.loadTipoDocumento();
    this.loadTipoProceso();
  }

  /**
   * funcion cargar tipo de documento
   */
  loadTipoDocumento() {
    this.tipoDocumento.getTipoDocumento().subscribe((result: any) => {
      this.listTipoDocumento = result.data;
    });
  }

  /**
   * funcion cargar tipo de proceso
   */
  loadTipoProceso() {
    this.tipoProceso.getProceso().subscribe((result: any) => {
      this.listTipoProceso = result.data;
    });
  }

  /**
   * Detecta el cambio cuanod carga el modal
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (this.visible && this.action == 'Update') {
      this.documen = this.documen;
      // Actualizar los valores del formulario con la nueva información.
      this.formulario.patchValue(this.documen);
    } else if (this.visible) {
      this.formulario.reset();
    }
  }

  /**
   * funcion para enviar el formulario
   */
  submit() {
    if (this.formulario.valid) {
      const Data: Doc = this.formulario.value;
      switch (this.action) {
        case 'Create':
          this.saveNew(Data);
          break;
        case 'Update':
          this.updateDocument(this.documen.doc_id, Data);
          break;
      }
    } else {
      console.log('Revise los campos obligatorios.');
    }
  }

  /**
   * funcion para guardar un nuevo documento
   * @param Data
   */
  saveNew(Data: Doc) {
    this.documentService.createDocument(Data).subscribe(
      (response: any) => {
        if (response.status) {
          this.closeModal();
          Swal.fire({
            title: 'Guardado!',
            text: 'Guardado con exito.',
            icon: 'success',
          });
        }
      },
      (error) => {
        console.error('Error al crear', error);
      }
    );
  }

  /**
   * funcion para actualizar
   * @param Data
   */
  updateDocument(id: number, Data: Doc) {
    this.documentService.updateDocument(id, Data).subscribe(
      (response: any) => {
        if (response.status) {
          this.closeModal();

          Swal.fire({
            title: 'Actualizado!',
            text: 'Actualizado con exito.',
            icon: 'success',
          });
        }
      },
      (error) => {
        console.error('Error al actualizar', error);
      }
    );
  }

  /**
   * Función para ocultar el modal
   */
  closeModal() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
