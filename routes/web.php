<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {

        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/dashboard');
    })->name('log');

    Route::get('/utilisateurs', [AdminController::class, 'utilisateurs'])->name('admin.utilisateurs');
    Route::get('/utilisateur/q={id}', [AdminController::class, 'utilisateur'])->name('admin.utilisateur');
});

require __DIR__ . '/settings.php';
