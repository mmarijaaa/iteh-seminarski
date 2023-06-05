<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PacijentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap='pacijent';
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'jmbg'=>$this->jmbg,
            'roditelj'=>$this->roditelj,
            'godine'=>$this->godine,
            'email'=>$this->email,
            'id_doktor'=>$this->id_doktor 
        ];
    }
}
