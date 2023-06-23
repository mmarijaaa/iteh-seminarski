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

    //kreiranje novog pacijenta
    Route::post('/registerpacijent', [PacijentController::class, 'registerpacijent']);

    //kreiranje pregleda za odredjenog pacijenta
    Route::post('/pregledpacijent/{id}', [PregledController::class, 'store']);

    //kreiranje terapije za odredjeni pregled i pacijenta
    Route::post('/terapijapacijent/{id}/{parameter}', [TerapijaController::class, 'store']);

    //izmena pregleda
    Route::put('/izmenapregled/{id}', [PregledController::class, 'update']);

    //izmena pacijenta
    Route::put('/izmenapacijent/{id}', [PacijentController::class, 'update']);

    //logout doktora
    Route::post('/logout', [DRController::class, 'logout']);

    //prikaz terapije odredjenog pregleda i pacijenta
    Route::get('/terapija/{id}/{id_pac}/{id_preg}', [TerapijaController::class, 'index']);

    //lista pacijenata odredjenog doktora
    Route::get('/doktor/{id}', [DoktorPacijentController::class, 'index']);

    //lista pregleda odredjenog pacijenta
    Route::get('/pregledi/{id}/{parameter}', [PregledController::class, 'index']);

    //brisanje pacijenta
    Route::delete('/brisanjepacijenta/{id}', [PacijentController::class, 'destroy']);

    //brisanje pregleda
    Route::delete('/brisanjepregleda/{id}', [PregledController::class, 'destroy']);

    //brisanje terapije
    Route::delete('/brisanjeterapije/{id}', [TerapijaController::class, 'destroy']);
    Route::delete('/brisanjeterapijepregleda/{id}/{idpregl}', [TerapijaController::class, 'destroy2']);

    //izmena terapije
    Route::put('/izmenaterapija/{id}', [TerapijaController::class, 'update']); 

});

  
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

    Route::get('/pregled/{id_pacijent}', [PregledController::class, 'index2']);
    Route::post('/logoutpacijent', [PacijentController::class, 'logoutpacijent']);
    Route::get('/terapija/{id_preg}', [TerapijaController::class, 'index2']);
 
});



