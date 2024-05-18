<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function logout(){

        auth()->logout();

        return response()->json([
            "status" => true,
            "message" => "Usuario salio correctamente"
        ]);
    }
}
