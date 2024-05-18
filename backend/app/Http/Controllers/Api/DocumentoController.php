<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DocumentoRequest;
use App\Models\Documento;

class DocumentoController extends Controller
{
    public function index()
    {
        try {
            $documentos = Documento::all();

            return response()->json([
                'status' => true,
                'data' => $documentos,
                'message' => 'Lista obtenida correctamente'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error al obtener la lista'
            ], 500);
        }
    }

    public function obtenerUltimoNumero()
    {
        try {
            $ultimoNumero = Documento::max('doc_codigo');
            $nuevoNumero = $ultimoNumero + 1;

            return $nuevoNumero;
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error al obtener el último número',
            ], 500);
        }
    }

    public function store(DocumentoRequest $request)
    {
        try {
            $data = $request->validated();
            $nuevoNumero = $this->obtenerUltimoNumero();
            $data['doc_codigo'] = $nuevoNumero;
            $documento = Documento::create($data);

            return response()->json([
                'status' => true,
                'message' => 'Creado exitosamente',
                'documento' => $documento
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error al crear',
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $documento = Documento::findOrFail($id);

            return response()->json([
                'status' => true,
                'data' => $documento,
                'message' => 'Obtenido correctamente'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'No encontrado'
            ], 500);
        }
    }


    public function update(DocumentoRequest $request, $id)
    {
        try {
            $data = $request->validated();

            $documento = Documento::findOrFail($id);
            $documento->update($data);

            return response()->json([
                'status' => true,
                'message' => 'Actualizado exitosamente',
                'documento' => $documento
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error al actualizar',
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $documento = Documento::findOrFail($id);
            $documento->delete();

            return response()->json([
                'status' => true,
                'message' => 'Eliminado correctamente'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error al eliminar',
            ], 500);
        }
    }
}
