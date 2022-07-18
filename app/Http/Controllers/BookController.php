<?php

namespace App\Http\Controllers;
use App\Models\Book;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class BookController extends Controller
{
    public function index()
    {
        return Inertia::render('LandingPage', [
            'name' => auth()->user()->name,
            'books' => Book::all()
        ]);
    }

    public function test()
    {
        return view ('test', [
            'books' => Book::all()
        ]);
    }

    public function detail(Request $request)
    {
        $book = DB::table('books')
                ->where('id', '=', ($request->index)+1)
                ->first();
    }
}
