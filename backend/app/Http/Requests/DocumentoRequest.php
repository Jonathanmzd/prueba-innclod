<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DocumentoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return True;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'doc_nombre' => 'required|string|max:50',
            'doc_id_tipo' => 'required|integer',
            'doc_id_proceso' => 'required|integer',
            'doc_codigo' => 'required|integer',
            'doc_contenido' => 'required|string|max:4000',
        ];
    }

    public function messages(): array
    {
        return [
            'doc_nombre.required' => 'El campo nombre del documento es obligatorio.',
            'doc_nombre.string' => 'El campo nombre del documento debe ser una cadena de texto.',
            'doc_nombre.max' => 'El campo nombre del documento no puede exceder los 50 caracteres.',
            'doc_id_tipo.required' => 'El campo tipo de documento es obligatorio.',
            'doc_id_tipo.integer' => 'El campo tipo de documento debe ser un número entero.',
            'doc_id_proceso.required' => 'El campo ID de proceso es obligatorio.',
            'doc_id_proceso.integer' => 'El campo ID de proceso debe ser un número entero.',
            'doc_codigo.required' => 'El campo código del documento es obligatorio.',
            'doc_codigo.integer' => 'El campo código del documento debe ser un número entero.',
            'doc_contenido.required' => 'El campo contenido del documento es obligatorio.',
            'doc_contenido.string' => 'El campo contenido del documento debe ser una cadena de texto.',
            'doc_contenido.max' => 'El campo contenido del documento no puede exceder los 4000 caracteres.',
        ];
    }
}
