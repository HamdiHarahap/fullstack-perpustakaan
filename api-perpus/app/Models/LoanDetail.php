<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class LoanDetail extends Model
{
    protected $fillable = [
        'loan_id',
        'book_id',
        'status'
    ];

    public function book(): BelongsTo
    {
        return $this->belongsTo(Book::class);
    }

    public function bookReturn(): HasOne
    {
        return $this->hasOne(BookReturn::class);
    }

    public function loan(): BelongsTo 
    {
        return $this->belongsTo(Loan::class);
    }
}
