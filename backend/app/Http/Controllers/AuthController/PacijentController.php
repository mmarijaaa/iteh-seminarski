<?php

namespace App\Http\Controllers\AuthController;

use App\Http\Controllers\Controller;
use App\Models\Pacijent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\PacijentResource; 
use App\Http\Resources\PacijentCollection; 


class PacijentController extends Controller
{
    public function registerpacijent(Request $request)
    {
        $validator=Validator::make($request->all(), [
            'name'=>'required|string|max:100',
            'email'=>'required|string|max:100|email|unique:users',
            'jmbg'=> 'required|string|size:13',
            'roditelj'=>'required|string|max:100',
            'godine'=>'required|numeric|max:18',
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

    public function pacijenti() {
        
        $pacijenti = Pacijent::all();
        return $pacijenti;
    }

    public function show() {
        return new PacijentCollection(Pacijent::all());
    }

    public function index(Pacijent $pacijent) { 
        return new PacijentResource($pacijent);
    }

    public function loginpacijent(Request $request) 
    {
        $validator=Validator::make($request->all(), [
            'email'=>'required|string|max:100|email',
            'password'=>'required|string|min:8'
        ]);

        if($validator->fails())
            return response()->json($validator->errors());

       if(!Auth::guard('pacijent')->attempt($request->only('email', 'password')))
            return response()->json(['success'=>false]);
        
        $user=Pacijent::where('email', $request['email'])->firstOrFail();
        $token=$user->createToken('auth_token')->plainTextToken;
        $user_id = $user->id;
        return response()->json(['success'=>true, 'access_token'=>$token, 'token_type'=>'Bearer', 'pacijent_user_id'=>$user_id]);
    }

    public function logoutpacijent()
    {
         //auth()->user()->tokens()->delete();
        return['message'=>"Uspesno izlogovan pacijent."];
    }

    public function update(Request $request, $id) {

        $validator=Validator::make($request->all(),[
            'name'=>'required|string|max:100',
            'email'=>'required|string|max:100|email|unique:users',
            'jmbg'=> 'required|string|size:13',
            'roditelj'=>'required|string|max:100',
            'godine'=>'required|numeric|max:18',
            //'password'=>'required|string|min:8'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());
            
        }
        $pacijent=Pacijent::find($id);


        $pacijent->name=$request->name;
        $pacijent->jmbg=$request->jmbg;
        $pacijent->roditelj=$request->roditelj;
        $pacijent->godine=$request->godine;
        $pacijent->email=$request->email;
       // $pacijent->password=$request->password;


        $pacijent->save();

        return response()->json(['Pacijent uspesno azuriran.', $pacijent]); 
    }

    public function destroy($id){
        $pacijent=Pacijent::find($id);
        $pacijent->delete();
        return response()->json('Pacijent uspesno obrisan'); 
    }
}


