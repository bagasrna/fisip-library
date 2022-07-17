<?php

namespace App\Http\Controllers;
use App\Models\Book;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index()
    {
        return view ('test', [
            'books' => Book::all()
        ]);
        
        return Inertia::render('LandingPage', [
            'books' => Book::all()
        ]);
    }
}
