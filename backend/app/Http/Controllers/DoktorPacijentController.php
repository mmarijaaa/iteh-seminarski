<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pacijent;
use App\Http\Resources\DoktorPacijentResource;

class DoktorPacijentController extends Controller
{
    
    public function index($id_doktor) {
        $pacijenti = Pacijent::get()->where('id_doktor',$id_doktor);
        if(is_null($pacijenti)) {
            return response()->json("Pacijenata nema");
        }
        //return response()->json($pacijenti);
        return new DoktorPacijentResource($pacijenti); 
    }

    
}
