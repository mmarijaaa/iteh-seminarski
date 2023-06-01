<?php

namespace App\Http\Controllers;

use App\Models\Pacijent;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePacijentRequest;
use App\Http\Requests\UpdatePacijentRequest;

class PacijentController extends Controller
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
    public function store(StorePacijentRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Pacijent $pacijent)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pacijent $pacijent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePacijentRequest $request, Pacijent $pacijent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pacijent $pacijent)
    {
        //
    }
}
