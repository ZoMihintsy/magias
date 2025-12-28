<?php

namespace App\Http\Controllers;

use App\Models\Achat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PanelController extends Controller
{
    //
    public function indexAchat()
    {
        return Inertia::render('Admin/Achats/index');
    }
    public function ajoutePrix()
    {
        return Inertia::render('Admin/Achats/prix');
    }
    public function addPrix(Request $request)
    {
        $data = $request->validate([
            'prix' => ['required'],
            'type' => ['required', 'unique:' . Achat::class]
        ]);
        $data['user_id'] = Auth::user()->id;
        Achat::create($data);
    }
    public function livreCategorie()
    {
        $livreCategorie = Achat::where('deleted_at', 'null')->get();
        return Inertia::render('Admin/Achats/manager/categorie', ['categorie' => $livreCategorie]);
    }
}
