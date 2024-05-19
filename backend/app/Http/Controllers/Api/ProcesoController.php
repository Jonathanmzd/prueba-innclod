<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Proceso as ModelsProceso;
use Illuminate\Http\Request;

class ProcesoController extends Controller
{
    public function index()
    {
        try {
            $tipoDocumento = ModelsProceso::orderBy('pro_nombre')->get();
            return response()->json([
                'status' => true,
                'data' => $tipoDocumento,
                'message' => 'Lista obtenida correctamente'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error al obtener la lista'
            ], 500);
        }
    }
}
