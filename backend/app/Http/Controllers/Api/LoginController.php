<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                throw new AuthenticationException('Credenciales inválidas');
            }

            $user = Auth::user();

            return response()->json([
                'data' => [
                    'status' => true,
                    'message' => 'Inicio de sesión correcto',
                    'token' => $token,
                    'user' => [
                        'id' => $user->id,
                        'name' => $user->name,
                    ]
                ]
            ], 200);
        } catch (AuthenticationException $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ], 401);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error en el servidor',
            ], 500);
        }
    }
}
