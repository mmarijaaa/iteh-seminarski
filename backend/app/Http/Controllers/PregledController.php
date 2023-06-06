<?php

namespace App\Http\Controllers;

use App\Models\Pregled;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UpdatePregledRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class PregledController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Request $request)
    {
        $validator=Validator::make($request->all(), [
            'datum_pregleda'=>'required|string|max:255',
            'opis'=> 'required|string|max: 500',
        ]);

        if($validator->fails())
            return response()->json($validator->errors());

        $pregled=Pregled::create([
            'datum_pregleda'=>$request->datum_pregleda,
            'opis'=>$request->opis,
            'id_doktor'=>Auth::user()->id,
            //'id_pacijent'=>
            
        ]);

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
    public function update(UpdatePregledRequest $request, Pregled $pregled)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pregled $pregled)
    {
        //
    }
}
