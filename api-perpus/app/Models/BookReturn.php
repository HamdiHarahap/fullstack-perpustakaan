<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BookReturn extends Model
{
    protected $fillable = [
        'loan_detail_id',
        'tanggal_kembali'
    ];

    public function loanDetail(): BelongsTo
    {
        return $this->belongsTo(LoanDetail::class);
    }
}
