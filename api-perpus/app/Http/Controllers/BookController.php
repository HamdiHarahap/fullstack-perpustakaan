<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'data' => BookResource::collection(Book::all())
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama_buku' => 'required|string',
            'penulis' => 'required|string',
            'penerbit' => 'required|string', 
            'tahun_terbit' => 'required',
        ]);

        $book = Book::create([
            'nama_buku' => $request->nama_buku,
            'penulis' => $request->penulis,
            'penerbit' => $request->penerbit,
            'tahun_terbit' => $request->tahun_terbit
        ]);

        return response()->json([
            'message' => 'Data buku berhasil ditambahkan',
            'data' => new BookResource($book)
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $book = Book::find($id);

        if($book) {
            return response()->json([
                'data' => new BookResource($book)
            ], 200);
        } else {
            return response()->json([
                'message' => 'Buku tidak ditemukan'
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nama_buku' => 'required|string',
            'penulis' => 'required|string',
            'penerbit' => 'required|string', 
            'tahun_terbit' => 'required',
        ]);

        $book = Book::find($id);

        if($book) {
            $book->update([
                'nama_buku' => $request->nama_buku,
                'penulis' => $request->penulis,
                'penerbit' => $request->penerbit,
                'tahun_terbit' => $request->tahun_terbit,
            ]);

            return response()->json([
                'message' => 'Data buku berhasil diperbarui',
                'data' => new BookResource($book)
            ]);
        } else {
            return response()->json([
                'message' => 'Buku tidak ditemukan'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $book = Book::find($id);

        if($book) {
            $book->delete();
            return response()->json([
                'message' => 'Buku ' . $book->nama_buku .  ' berhasil dihapus'
            ]);
        } else {
            return response()->json([
                'message' => 'Buku tidak ditemukan'
            ]);
        }
    }
}
