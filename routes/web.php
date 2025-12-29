<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\LivreController;
use App\Http\Controllers\PanelController;
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

    Route::get('/achat/livre', [LivreController::class, 'index'])->name('achat.livre');

    Route::get('/achat/livre/categorie={id}', [LivreController::class, 'achat'])->name('achat.add');

    Route::get('/valide/achat/{id}', [LivreController::class, 'takeAchat'])->name('achat.take');

    Route::get('/generateur/livre', [LivreController::class, 'generer'])->name('livre.generer');

    route::post('/generer/livre/valide', [LivreController::class, 'generate'])->name('livre.generate');

    Route::get('/bibliotheques', [LivreController::class, 'bibliotheque'])->name('bibliotheque');
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/dashboard');
    })->name('log');

    Route::get('/utilisateurs', [AdminController::class, 'utilisateurs'])->name('admin.utilisateurs');

    Route::get('/utilisateur/q={id}', [AdminController::class, 'utilisateur'])->name('admin.utilisateur');

    Route::get('/admin/achat', [PanelController::class, 'indexAchat'])->name('admin.panel');

    Route::get('/ajouter/prix/livre', [PanelController::class, 'ajoutePrix'])->name('admin.prixLivre');

    Route::post('/ajoute/data', [PanelController::class, 'addPrix'])->name('admin.add.prix');

    Route::get('/livre/categorie', [PanelController::class, 'livreCategorie'])->name('admin.categorie.livre');
});

require __DIR__ . '/settings.php';
