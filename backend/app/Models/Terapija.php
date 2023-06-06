<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pacijent;
use App\Models\User;
use App\Models\Pregled;

class Terapija extends Model
{
    use HasFactory;
    protected $fillable = [
        'lekovi',
        'nacin_primene',
        'komentar',
        'id_doktor',
        'id_pacijent',
        'id_pregled'
    ];

    public function doktor(){
        return $this->belongsTo(User::class, 'id_doktor');
    }

    public function pacijent(){
        return $this->belongsTo(Pacijent::class, 'id_pacijent');
    }

    public function pregled(){
        return $this->belongsTo(Pregled::class, 'id_pregled');
    }

}
