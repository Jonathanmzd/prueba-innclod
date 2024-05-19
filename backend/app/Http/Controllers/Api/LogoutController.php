<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class LogoutController extends Controller
{
    public function logout()
    {
        try {
            if (auth()->check()) {
                auth()->logout();

                return response()->json([
                    'status' => true,
                    'message' => 'Usuario ha cerrado sesión exitosamente',
                ], 200);
            }

            return response()->json([
                'status' => false,
                'message' => 'No se pudo cerrar sesión',
            ], 401);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error en el servidor',
            ], 500);
        }
    }
}
