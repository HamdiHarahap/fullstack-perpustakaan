<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Book extends Model
{
    protected $fillable = [
        'nama_buku',
        'penulis',
        'penerbit',
        'tahun_terbit',
        'status'
    ];

    public function loanDetail(): HasOne
    {
        return $this->hasOne(LoanDetail::class);
    }
}
