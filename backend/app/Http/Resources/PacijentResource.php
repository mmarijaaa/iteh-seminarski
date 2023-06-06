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
            'id'=>$this->resource->id,
            'name'=>$this->resource->name,
            'jmbg'=>$this->resource->jmbg,
            'roditelj'=>$this->resource->roditelj,
            'godine'=>$this->resource->godine,
            'email'=>$this->resource->email,
            'id_doktor'=>$this->resource->id_doktor 
        ];
    }
}
