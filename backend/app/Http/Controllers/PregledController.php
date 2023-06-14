<?php

namespace App\Http\Controllers;

use App\Models\Pregled;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UpdatePregledRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\PregledPacijentResource;

class PregledController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id_doktor, $id_pacijent)
    {
        $pregledi = Pregled::get()->where('id_doktor', $id_doktor)->where('id_pacijent',$id_pacijent);
        if(is_null($pregledi))
            return response()->json('Data not found', 404);
        //return response()->json($pregledi);
        return new PregledPacijentResource($pregledi); 
    }

    public function index2($id_pacijent){
        $pregledi = Pregled::get()->where('id_pacijent',$id_pacijent);
        if(is_null($pregledi))
            return response()->json('Data not found', 404);
        //return response()->json($pregledi);
        return new PregledPacijentResource($pregledi); 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $idpac)
    {
        $validator=Validator::make($request->all(), [
            'datum_pregleda'=> 'required',
            'opis'=>'required|string|max:500'
        ]);

        if($validator->fails())
        return response()->json($validator->errors()); 

        $pregled = Pregled::create([
            'id_doktor'=>Auth::user()->id,
            'id_pacijent'=>$idpac,
            'datum_pregleda'=>$request->datum_pregleda,
            'opis'=>$request->opis,
        ]);

        //return response()->json(['Pregled uspesno kreiran.', $pregled, $pregled->id]);  
        return new PregledPacijentResource($pregled);
    }

    /**
     * Display the specified resource.
     */
    public function show(Pregled $pregled)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pregled $pregled)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validator=Validator::make($request->all(), [
            'datum_pregleda'=> 'required',
            'opis'=>'required|string|max:500'
        ]);

        if($validator->fails())
        return response()->json($validator->errors());

        $pregled = Pregled::find($id);

        $pregled->datum_pregleda=$request->datum_pregleda;
        $pregled->opis=$request->opis; 

        $pregled->save();

        return response()->json(['Pregled uspesno azuriran.', $pregled]); 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $pregled=Pregled::find($id);

        $pregled->delete();

        return response()->json('Pregled uspesno obrisan');

    
    }

   
}
