<?php

namespace App\Http\Controllers;

use App\Models\Achat;
use App\Models\AchatLivre;
use App\Models\AchatUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LivreController extends Controller
{
    //
    public function index()
    {
        $achat = Achat::where('deleted_at', 'null')->get();

        return Inertia::render('Client/livres/achat', ['categorie' => $achat]);
    }
    public function achat($id)
    {
        $achat = Achat::where('id', $id)->first();

        return Inertia::render('Client/livres/valide-achat', ['achat' => $achat]);
    }

    public function takeAchat($id)
    {
        $achat = Achat::where('id', $id)->first();

        $achats = AchatUser::where('achat_id', $id)->first();

        if ($achats) {
            AchatUser::where('achat_id', $id)->update([
                'prix' => $achat->prix
            ]);
            User::where('id', Auth::user()->id)->update([
                'credit' => $achat->prix
            ]);
            return response()->json([
                'status' => 201,
                'message' => 'Votre transaction a ete mise a jour'
            ]);
        }
        AchatUser::create([
            'user_id' => Auth::user()->id,
            'achat_id' => $id,
            'prix' => $achat->prix
        ]);
        User::where('id', Auth::user()->id)->update([
            'credit' => $achat->prix
        ]);
        return response()->json([
            'status' => 200,
            'message' => 'Votre transaction a ete envoyer'
        ]);
    }

    public function generer()
    {
        $categorie = Achat::with('categorie')->get();

        return Inertia::render('Client/livres/generer', ['categorie' => $categorie]);
    }

    public function generate(Request $request)
    {
        $data = $request->validate([
            'efant_name' => 'required',
            'theme' => 'required',
            'age' => 'required',
            'ton' => 'required',
            'morale' => 'required',
            'langue' => 'required',
            'pronom' => 'required',
            'duree' => 'required',
        ]);
        $data['user_id'] = Auth::user()->id;

        AchatLivre::create($data);
        $achat = Achat::where('type', $data['theme'])->first();
        AchatUser::where('achat_id', $achat->id)->update([
            'prix' => 0
        ]);

        User::where('id', Auth::user()->id)->update([
            'credit' => Auth::user()->credit - $achat->prix
        ]);
        return response()->json([
            'status' => 200,
            'message' => 'votre livre est bien g&eacute;nerer , vous pouvez la modifier a tout moment avant de le t&eacute;l&eacute;charger en pdf'
        ]);
    }
}
