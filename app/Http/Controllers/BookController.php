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
        $books = Book::latest();

        if(request('search')){
            $books->where('title', 'like', '%' . request('search') . '%')
            ->orWhere('author', 'like', '%' . request('search') . '%');
        }

        return Inertia::render('LandingPage', [
            'name' => auth()->user()->name,
            'books' => $books->paginate(10)->withQueryString()
        ]);
    }
    
    public function detail(Book $book)
    {
        return Inertia::render('DetailBuku', [
            'name' => auth()->user()->name,
            'book' => $book
        ]);
    }

    public function test()
    {
        $books = Book::latest();

        if(request('search')){
            $books->where('title', 'like', '%' . request('search') . '%')
            ->orWhere('author', 'like', '%' . request('search') . '%');
        }

        return view('test', [
            'name' => auth()->user()->name,
            'books' => $books->paginate(10)->withQueryString()
        ]);
    }

    public function test2(Book $book)
    {
        return view('test2', [
            "book" => $book
        ]);
    }

}
