<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pacijent;
use App\Models\User;

class Pregled extends Model
{
    
    use HasFactory;

    protected $fillable = [
        'datum_pregleda',
        'opis',
        'id_doktor',
        'id_pacijent'
    ];

    public function doktor(){
        return $this->belongsTo(User::class, 'id_doktor');
    }

    public function pacijent(){
        return $this->belongsTo(Pacijent::class, 'id_pacijent');
    }
}
