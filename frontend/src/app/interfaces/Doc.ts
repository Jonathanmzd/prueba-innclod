import { Proceso } from './Proceso';
import { TipoDocumento } from './TipoDocumento';

export interface Doc {
  doc_id: number;
  doc_nombre: string;
  doc_id_tipo: number;
  doc_id_proceso: number;
  doc_codigo: number;
  doc_contenido: string;
  tipo: TipoDocumento; // TipoDocumento
  proceso: Proceso; // TipoProceso
}
