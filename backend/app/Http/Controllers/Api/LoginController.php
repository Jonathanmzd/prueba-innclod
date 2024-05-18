<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {

        $credentials = $request->only('email', 'password');

        if ($token = JWTAuth::attempt($credentials)) {
            $user = Auth::user();

            return response()->json([
                'status' => true,
                'message' => 'Inicio de Sesion Correctamente',
                'token' => $token,
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                ]
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => 'No valido',
        ]);
    }
}
