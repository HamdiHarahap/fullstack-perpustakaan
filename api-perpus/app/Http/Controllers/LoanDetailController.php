<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Book;
use App\Models\Loan;
use App\Models\LoanDetail;
use Illuminate\Http\Request;
use App\Http\Resources\LoanDetailResource;
use App\Models\Member;

class LoanDetailController extends Controller
{
    public function index()
    {
        return response()->json([
            'data' => LoanDetailResource::collection(LoanDetail::all())
        ], 200);
    }

    public function store(Request $request)
    {
         $request->validate([
            'member_id' => 'required|exists:members,id',
            'book_id' => 'required|exists:books,id',
            'tanggal_pinjam' => 'required',
        ]);

        Book::where('id', $request->book_id)->update([
            'status' => 'dipinjam'
        ]);

        Member::where('id', $request->member_id)->update([
            'status' => 'meminjam'
        ]);

        $loan = Loan::create([
            'member_id' => $request->member_id,
            'tanggal_pinjam' => $request->tanggal_pinjam,
            'jatuh_tempo' => Carbon::parse($request->tanggal_pinjam)->addDays(7),
        ]);

        $loanDetail = LoanDetail::create([
            'loan_id' => $loan->id,
            'book_id' => $request->book_id,
        ]);

        return response()->json([
            'message' => 'Data peminjaman berhasil ditambahkan',
            'data' => new LoanDetailResource($loanDetail)
        ], 201);
    }
}
