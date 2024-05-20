<?php

use App\Http\Controllers\Api\DocumentoController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\LogoutController;
use App\Http\Controllers\Api\ProcesoController;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\TipoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post("register", [RegisterController::class, "register"]);
Route::post("login", [LoginController::class, "login"]);

Route::group([
    'middleware' => ['auth:api']
], function () {
    Route::get("logout", [LogoutController::class, "logout"]);

    Route::get('documento', [DocumentoController::class, 'index']);
    Route::post('documento', [DocumentoController::class, 'store']);
    Route::get('documento/{id}', [DocumentoController::class, 'show']);
    Route::match(['put', 'patch'], 'documento/{id}', [DocumentoController::class, 'update']);
    Route::delete('documento/{id}', [DocumentoController::class, 'destroy']);

    Route::get('tipo', [TipoController::class, 'index']);
    Route::get('proceso', [ProcesoController::class, 'index']);
});
