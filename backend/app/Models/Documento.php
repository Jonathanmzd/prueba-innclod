<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Documento extends Model
{
    use HasFactory;

    protected $table = 'doc_documento';

    protected $primaryKey = 'doc_id';

    protected $fillable = [
        'doc_nombre',
        'doc_contenido',
        'doc_codigo',
        'doc_id_tipo',
        'doc_id_proceso',
    ];

    protected $casts = [
        'doc_codigo' => 'integer',
        'doc_id_tipo' => 'integer',
        'doc_id_proceso' => 'integer',
    ];

    public function tipo()
    {
        return $this->belongsTo(TipoDocumento::class, 'doc_id_tipo', 'tip_id');
    }

    public function proceso()
    {
        return $this->belongsTo(Proceso::class, 'doc_id_proceso', 'pro_id');
    }

}
