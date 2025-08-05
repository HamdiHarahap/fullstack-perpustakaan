<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\LoanDetail;
use App\Models\Member;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $bookCount = Book::count();
        $memberCount = Member::count();
        $loanCount = LoanDetail::count();

        return response()->json([
            'data' => [
                'bookCount' => $bookCount,
                'memberCount' => $memberCount,
                'loanCount' => $loanCount,
            ]
        ]);
    }
}
