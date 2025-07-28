<?php

namespace App\Http\Controllers;

use App\Http\Resources\MemberResource;
use App\Models\Member;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'data' => MemberResource::collection(Member::all())
        ]);
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
            'nama_anggota' => 'required|string',
            'email' => 'required|string',
            'no_telp' => 'required|string',
        ]);

        $member = Member::create([
            'nama_anggota' => $request->nama_anggota,
            'email' => $request->email,
            'no_telp' => $request->no_telp,
        ]);

        return response()->json([
            'message' => 'Data anggota baru berhasil ditambahkan',
            'data' => new MemberResource($member)
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $member = Member::find($id);

        if($member) {
            return response()->json([
                'data' => new MemberResource($member)
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Member $member)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nama_anggota' => 'required|string',
            'email' => 'required|string',
            'no_telp' => 'required|string',
        ]);

        $member = Member::find($id);

        if($member) {
            $member->update([
                'nama_anggota' => $request->nama_anggota,
                'email' => $request->email,
                'no_telp' => $request->no_telp,
            ]);

            return response()->json([
                'message' => 'Data member berhasil diperbarui',
                'data' => new MemberResource($member)
            ]);
        } else {
            return response()->json([
                'message' => 'Member tidak ditemukan'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $member = Member::find($id);

        if($member) {
            $member->delete();
            return response()->json([
                'message' => 'Member ' . $member->nama_anggota . ' berhasil dihapus'
            ]);
        } else {
            return response()->json([
                'message' => 'Member tidak ditemukan'
            ]);
        }
    }
}
