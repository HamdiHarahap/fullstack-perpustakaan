<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\BookReturnController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\LoanDetailController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/books', [BookController::class, 'index'])->name('books.index');
Route::post('/books', [BookController::class, 'store'])->name('books.store');
Route::get('/books/{id}', [BookController::class, 'show'])->name('books.show');
Route::put('/books/{id}', [BookController::class, 'update'])->name('books.update');
Route::delete('/books/{id}', [BookController::class, 'destroy'])->name('books.destroy');

Route::get('/members', [MemberController::class, 'index'])->name('members.index');
Route::post('/members', [MemberController::class, 'store'])->name('members.store');
Route::get('/members/{id}', [MemberController::class, 'show'])->name('members.show');
Route::put('/members/{id}', [MemberController::class, 'update'])->name('members.update');
Route::delete('/members/{id}', [MemberController::class, 'destroy'])->name('members.destroy');

Route::get('/loans', [LoanDetailController::class, 'index'])->name('loans.index');
Route::post('/loans', [LoanDetailController::class, 'store'])->name('loans.store');
Route::post('/book-return', [BookReturnController::class, 'store'])->name('book.return');
