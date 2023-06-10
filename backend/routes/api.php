<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController\DRController;
use App\Http\Controllers\AuthController\PacijentController;  
use App\Http\Controllers\DoktorPacijentController;
use App\Http\Controllers\PregledController;
use App\Http\Controllers\TerapijaController;


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

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::post('/register', [DRController::class, 'register']);
Route::post('/login', [DRController::class, 'login']);

Route::group(['middleware'=> ['auth:sanctum']], function() {
    Route::get('/profile', function (Request $request) {
        return auth()->user();
    });

    Route::post('/registerpacijent', [PacijentController::class, 'registerpacijent']);

    Route::post('/pregledpacijent/{id}', [PregledController::class, 'store']);

    Route::post('/terapijapacijent/{id}/{parameter}', [TerapijaController::class, 'store']);

    Route::put('/izmenapregled/{id}', [PregledController::class, 'update']);

    Route::post('/logout', [DRController::class, 'logout']);

    /////
    Route::get('/terapija/{id}/{id_pac}/{id_preg}', [TerapijaController::class, 'index']);
});

    Route::get('/doktor/{id}', [DoktorPacijentController::class, 'index']);
    Route::get('/pregledi/{id}/{parameter}', [PregledController::class, 'index']);
    Route::put('/izmenapacijent/{id}', [PacijentController::class, 'update']);
    Route::delete('/brisanjepacijenta/{id}', [PacijentController::class, 'destroy']);
    Route::put('/izmenaterapija/{id}', [TerapijaController::class, 'update']);
    

Route::get('/doktor/{id}/pacijent', [PacijentController::class, 'vratiPacijenteSaIdDoktora']);
Route::get('/pacijenti', [PacijentController::class, 'pacijenti']);
Route::get('/svipacijenti', [PacijentController::class, 'show']);




//Route::resource('/izmenapacijent', PacijentController::class)->only(['update']);


//Route::get('pregledi/{id}/{parameter}',[PregledController::class, 'vratiListuPregleda']);

//Route::post('/registerpacijent', [PacijentController::class, 'registerpacijent']);
Route::post('/loginpacijent', [PacijentController::class, 'loginpacijent']);

Route::group(['middleware'=> ['auth:sanctum','abilities:pacijent']], function() {
    Route::get('/profile', function (Request $request) {
        return auth()->user();
    });

    Route::post('/logoutpacijent', [PacijentController::class, 'logoutpacijent']);
 
});



