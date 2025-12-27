<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    //
    public function utilisateurs()
    {
        $users = User::where('id', '!=', Auth::user()->id)->get();

        return Inertia::render('Admin/client/index', ['user' => $users]);
    }
    public function utilisateur($id)
    {
        $user = User::where('id', $id)->first();

        return Inertia::render('Admin/client/profile', ['user' => $user]);
    }
}
