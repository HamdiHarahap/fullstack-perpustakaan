<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nama_buku' => $this->nama_buku,
            'penulis' => $this->penulis,
            'penerbit' => $this->penerbit,
            'tahun_terbit' => $this->tahun_terbit,
            
            $this->mergeWhen(! $request->routeIs(['books.store', 'books.update']), [
                'status' => $this->status,
            ]),
        ];
    }
}
