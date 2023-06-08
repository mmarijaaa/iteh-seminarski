<?php

namespace App\Http\Controllers;

use App\Models\Terapija;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTerapijaRequest;
use App\Http\Requests\UpdateTerapijaRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class TerapijaController extends Controller
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
    public function store(Request $request, $idpregleda, $idpacijenta)
    {
        $validator=Validator::make($request->all(), [
            'lekovi'=> 'required|string',
            'nacin_primene'=>'required|string|max:500',
            'komentar' => 'required|string|max:200'
        ]);

        if($validator->fails())
        return response()->json($validator->errors());

        $terapija = Terapija::create([
            'id_pregled'=>$idpregleda,
            'id_doktor'=>Auth::user()->id,
            'id_pacijent'=>$idpacijenta,
            'lekovi'=>$request->lekovi,
            'nacin_primene'=>$request->nacin_primene,
            'komentar'=>$request->komentar
        ]);

        return response()->json(['Terapija uspesno kreirana.', $terapija]); 
    }

    /**
     * Display the specified resource.
     */
    public function show(Terapija $terapija)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Terapija $terapija)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTerapijaRequest $request, Terapija $terapija)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Terapija $terapija)
    {
        //
    }
}
