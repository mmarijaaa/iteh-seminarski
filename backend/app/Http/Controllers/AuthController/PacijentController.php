<?php

namespace App\Http\Controllers\AuthController;

use App\Http\Controllers\Controller;
use App\Models\Pacijent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;

class PacijentController extends Controller
{
    public function registerpacijent(Request $request)
    {
        $validator=Validator::make($request->all(), [
            'name'=>'required|string|max:255',
            'email'=>'required|string|max:100|email|unique:users',
            'jmbg'=> 'required',
            'roditelj'=>'required|string',
            'godine'=>'required',
            'password'=>'required|string|min:8'
        ]);

        if($validator->fails())
            return response()->json($validator->errors());

        $user=Pacijent::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'jmbg'=>$request->jmbg,
            'roditelj'=>$request->roditelj,
            'godine'=>$request->godine,
            'password'=>Hash::make($request->password),
            'id_doktor'=>Auth::user()->id
            //@if(Auth::id() == $offerz -> id_doktor)

        ]);

        $token=$user->createToken('auth_token')->plainTextToken;

        return response()->json(['data'=>$user, 'access_token'=>$token, 'token_type'=>'Bearer']);
    }

    public function vratiPacijenteSaIdDoktora($id_doktor){
        $pacijenti = Pacijent::get()->where('id_doktor', $id_doktor);
        if(is_null($pacijenti))
            return response()->json('Data not found', 404);
        return response()->json($pacijenti);
    }

    public function loginpacijent(Request $request) 
    {
       if(!Auth::guard('pacijent')->attempt($request->only('email', 'password')))
            return response()->json(['success'=>false]);
        
        $user=Pacijent::where('email', $request['email'])->firstOrFail();
        $token=$user->createToken('auth_token')->plainTextToken;
        return response()->json(['success'=>true, 'access_token'=>$token, 'token_type'=>'Bearer']);
    }

    public function logoutpacijent()
    {
         //auth()->user()->tokens()->delete();
        return['message'=>"Uspesno izlogovan pacijent."];
    }
}


