<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\BookReturn;
use App\Models\Member;
use App\Models\LoanDetail;
use Illuminate\Http\Request;

class BookReturnController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'loan_detail_id' => 'required',
            'tanggal_kembali' => 'required'
        ]);

        $loan = LoanDetail::where('id', $request->loan_detail_id)->first();

        $book = Book::where('id', $loan->book->id)->first();
        $book->update(['status' => 'tersedia']);
        
        $member = Member::where('id', $loan->loan->member->id)->first();
        $member->update(['status' => 'tidak meminjam']);

        $bookReturn = BookReturn::create([
            'loan_detail_id' => $request->loan_detail_id,
            'tanggal_kembali' => $request->tanggal_kembali,
        ]);

        return response()->json([
            'message' => 'Buku sudah dikembalikan'
        ]);
    }
}
