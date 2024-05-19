<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TipoDocumento;
use Illuminate\Http\Request;

class TipoController extends Controller
{
    public function index()
    {
        try {
            $tipoDocumento = TipoDocumento::orderBy('tip_nombre')->get();
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
