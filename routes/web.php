<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GoogleController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/test', function() {
    return view ('test', [
        'name' => auth()->user()->name
    ]);
});

Route::get('/', function() {
    return Inertia::render('Begin');
});

//authentication
Route::get('/signin', [GoogleController::class, 'login'])->name('signin')->middleware('guest');
Route::post('/signout', [GoogleController::class, 'logout'])->name('signout');
Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('login');
Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);
Route::get('/signup', function () {
    return Inertia::render('Register');
});

//dashboard
Route::get('/dashboard', [DashboardController::class, 'index'])->middleware('auth');
Route::get('/dashboard/test', [BookController::class, 'test'])->middleware('auth');
//search result page
Route::get('/result', function () {
    return Inertia::render('Result');
})->middleware('auth');

//book detail page
Route::get('/detail', function () {
    return Inertia::render('DetailBuku');
})->middleware('auth');

require __DIR__.'/auth.php';