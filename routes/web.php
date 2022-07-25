<?php

use App\Http\Controllers\AdminController;
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

Route::get('/test/signup', [AdminController::class, 'test']);
Route::post('/test/signup', [AdminController::class, 'test2']);

Route::get('/test/signin', [AdminController::class, 'test3']);
Route::post('/test/signin', [AdminController::class, 'test4']);
Route::post('/test/signout', [AdminController::class, 'test6']);

Route::get('/test/dashboard', [AdminController::class, 'test5'])->middleware('auth:admin');

Route::get('/', function() {
    return Inertia::render('Begin');
});

//authentication
Route::get('/signin', [GoogleController::class, 'login'])->name('signin')->middleware('guest');
Route::post('/signout', [GoogleController::class, 'logout'])->name('signout');
Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('login');
Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);

//dashboard
Route::get('/dashboard', [BookController::class, 'index'])->middleware('auth:web');
Route::get('/dashboard/rak-buku', [BookController::class, 'rak'])->middleware('auth:web'); // mengembalikan array 'categories' yang berisi category-category
Route::get('/dashboard/{book:id}', [BookController::class, 'detail'])->middleware('auth:web');


// login dashboard admin
Route::get('/admin/signin', [AdminController::class, 'login'])->name('admin.signin')->middleware('guest');
Route::post('/admin/signin', [AdminController::class, 'authenticate']);
Route::post('/admin/signout', [AdminController::class, 'logout']);

// Register dashboard admin
Route::get('/admin/signup', [AdminController::class, 'register'])->middleware('guest');
Route::post('/admin/signup', [AdminController::class, 'store']);

// dashboard admin
Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard')->middleware('auth:admin');
Route::post('/admin/create', [AdminController::class, 'create']); // add buku
Route::put('/admin/update', [AdminController::class, 'update']); // edit buku
Route::delete('/admin/delete', [AdminController::class, 'delete']); // edit buku


require __DIR__.'/auth.php';