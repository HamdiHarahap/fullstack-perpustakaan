<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MemberResource extends JsonResource
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
            'nama_anggota' => $this->nama_anggota,
            'email' => $this->email,
            'no_telp' => $this->no_telp,

            $this->mergeWhen(! $request->routeIs(['members.store', 'members.update']), [
                'status' => $this->status,
            ]),
        ];
    }
}
