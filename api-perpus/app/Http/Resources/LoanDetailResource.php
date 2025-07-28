<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LoanDetailResource extends JsonResource
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
            'nama_anggota' => $this->loan->member->nama_anggota,
            'nama_buku' => $this->book->nama_buku,
            'tanggal_pinjam' => $this->loan->tanggal_pinjam,
            'jatuh_tempo' => $this->loan->jatuh_tempo,
            'tanggal_kembali' => optional($this->bookReturn)->tanggal_kembali,

            $this->mergeWhen(! $request->routeIs(['loans.store']), [
                'status' => $this->status,
            ]),
        ];
    }
}
